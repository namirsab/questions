this.DashboardNewQuestionController = RouteController.extend({
	template: "NewQuestion",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	waitOn: function(){
		return Meteor.subscribe("all_questions");
	},

	action: function() {
		this.render(); 
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
	},

	data: function() {
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		document.title = this.route.options.title;
	}
});