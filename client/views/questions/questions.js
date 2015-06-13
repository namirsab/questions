Template.QuestionRow.events({
	'click #question': function(event){
		event.preventDefault();
		Router.go('questions.answer',{slug: this.slug});
	}
})

