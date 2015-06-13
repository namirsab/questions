this.QuestionsController = RouteController.extend({
	template: "QuestionsList",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	waitOn: function(){
		return Meteor.subscribe("all_questions_without_answers");
	},

	action: function() {
		this.render(); 
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
	},

	data: function() {
		

		return {
			questions: function(){
				return Questions.find({});
			}
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		document.title = this.route.options.title;
	}
});