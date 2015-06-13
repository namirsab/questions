Meteor.publish("all_questions", function () {
	return Questions.find({});
});

Meteor.publish("all_questions_without_answers", function () {
	return Questions.find({},{fields: {name:1,title:1,slug:1}},{sort: {name:1}});
})

Meteor.publish("single_question_to_answer",function(_slug){
	return Questions.find({slug:_slug});
})