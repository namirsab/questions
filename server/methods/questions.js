Meteor.methods({
	incrementQuestionAnswerCount: function (questionId,answerId,currentCount,timesAnswered) {
		// console.log(Questions.findOne({_id: questionId,"answers.label": answerId}));
		// Questions.update({_id: questionId,"answers.label": answerId},{$inc: {"answers.$.count" : 1}});
		Questions.update(
			{_id: questionId,"answers.label": answerId},
			{$set: {"answers.$.count" : currentCount + 1, answered_by: timesAnswered + 1}});
	},

	addQuestion: function(questionData){
		if(!Meteor.userId()){
			throw new Meteor.Error("Not allowed");
		}

		Questions.insert(questionData);
	},

	updateQuestion: function(questionId,questionData){
		if(!Meteor.userId()){
			throw new Meteor.Error("Not allowed");
		}
		console.log(questionId);
		console.log(questionData);
		Questions.update(
			{_id: questionId},
			{$set:{
				name: questionData.name,
				title: questionData.title,
				answers: questionData.answers,
				answered_by: questionData.answered_by
			}
		});
	},
	deleteQuestion: function(questionId){
		if(!Meteor.userId()){
			throw new Meteor.Error("Not allowed");
		}

		Questions.remove(questionId);
	}
});