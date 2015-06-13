Session.set("MoreAnswers",[]);
var index = 0;

Template.FormEditQuestionFirstAnswers.helpers({
	firstTwoAnswers: function () {
		// return Session.get("FirstTwoAnswers");
		return Questions.findOne({}).answers.slice(0,2);
	}
});

Template.FormEditQuestionExtraAnswers.helpers({
	extraAnswers: function () {
		var extraAnswers =  Questions.findOne({}).answers.slice(2);
		console.log(extraAnswers);
		return extraAnswers;
	}
});

Template.FormEditQuestionMoreAnswers.helpers({
	moreAnswers: function () {

		return Session.get("MoreAnswers");
	}
});

Template.FormEditQuestion.events({
	'click #add-answer': function (event) {
		event.preventDefault();
		var moreAnswers = Session.get("MoreAnswers");
		moreAnswers.push(index++);
		Session.set("MoreAnswers",moreAnswers);
		console.log(moreAnswers);
	},

	'submit #edit-question': function(event,template){
		event.preventDefault();
		var answersList = [];
		template.findAll("input[id^=answer]").filter(function(answer,index){
			
			if(answer.value){
				answersList.push({label: answer.value, count:0});
			}
		});
		var questionName = template.find('#name').value;
		var questionTitle = template.find('#title').value;
		var questionData = {
			name: questionName,
			title: questionTitle,
			answers: answersList,
			answered_by: 0,
		};
		console.log(answersList);
		Meteor.call('updateQuestion',this._id,questionData);
		Router.go('dashboard',{});
		return false;
	}

	
});

Template.FormEditQuestionExtraAnswers.events({
	'click #delete-answer': function(event) {
		event.preventDefault();
		console.log(this.label);
		console.log($(event.target).parents());
		$(event.target).parents().find("div[id='" + this.label + "']").remove();

	},
});

Template.FormEditQuestionMoreAnswers.events({
	'click #delete-answer': function(event) {
		event.preventDefault();
		var moreAnswers = Session.get("MoreAnswers");
		moreAnswers = _.without(moreAnswers,+JSON.stringify(this));
		Session.set("MoreAnswers",moreAnswers);
	},
});