Template.QuestionRowWithActions.events({
	'click #action-delete': function (event) {
		event.preventDefault();
		var questionId = this._id;
		bootbox.confirm("Are you sure?",function(result){
			if(result){
				Meteor.call('deleteQuestion',questionId);
				
			}
		});
	},
	'click #action-edit': function(event){
		event.preventDefault();
		Router.go('dashboard.edit_question',{slug:this.slug});
	},

	'click #question-title-col': function(event){
		event.preventDefault();
		Router.go('dashboard.view_question',{slug:this.slug});
	}
});
