this.ThanksController = RouteController.extend({
	template: "Thanks",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	waitOn: function(){

	},

	action: function() {
		this.render();
		/*ACTION_FUNCTION*/
	},

	onAfterAction: function() {
		document.title = this.route.options.title;
	}
});