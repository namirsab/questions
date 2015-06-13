Template.QuestionAnswersForm.events({
	'click input[type=radio]': function(event){
		Session.set("SelectedAnswer", event.target.value);
		Session.set("SelectedAnswerCount",$(event.target).data('count'));
	}
});

Template.QuestionAnswersSubmit.events({
	'click #submit': function (event) {
		event.preventDefault()
		var answerId = Session.get("SelectedAnswer");
		if(!answerId){
			bootbox.alert("Please, choose an answer :)");
		}else{
			var questionId = this._id;
			var count = Session.get("SelectedAnswerCount");
			var answeredBy = this.answered_by;
			Meteor.call('incrementQuestionAnswerCount',questionId,answerId,count,answeredBy);
			Router.go('thanks',{});
		}
	}
});

Template.QuestionAnswerInput.helpers({
	isSelected: function (label) {
		if(label == Session.get("SelectedAnswer")){
			return "btn-success";
		}else{
			return "btn-default";
		}
	}
});

Template.QuestionAnswerInput.events({
	'click #option': function (event,template) {
		event.preventDefault();
		Session.set("SelectedAnswer",event.target.value);
		Session.set("SelectedAnswerCount",$(event.target).data('count'));
	}
});