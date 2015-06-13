Session.set("ExtraAnswers",[]);
var index = 0;

Template.FormNewQuestionAnswers.helpers({
	extraAnswers: function () {

		return Session.get("ExtraAnswers");
	}
});


Template.FormNewQuestion.events({
	'click #add-answer': function (event) {
		event.preventDefault();
		var extraAnswers = Session.get("ExtraAnswers");
		extraAnswers.push(index++);
		Session.set("ExtraAnswers",extraAnswers);
		console.log(extraAnswers);
	},

	'click #delete-answer': function(event) {
		event.preventDefault();
		var extraAnswers = Session.get("ExtraAnswers");
		extraAnswers = _.without(extraAnswers,+JSON.stringify(this));
		Session.set("ExtraAnswers",extraAnswers);
		console.log(extraAnswers);
	},

	'submit #new-question': function(event,template){
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
		Meteor.call('addQuestion',questionData);
		Router.go('dashboard',{});
	}
});