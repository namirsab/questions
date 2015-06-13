this.DashboardViewQuestionController = RouteController.extend({
	template: "ViewQuestion",
	


	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();

	},

	waitOn: function(){
		return Meteor.subscribe("single_question_to_answer",this.params.slug);
	},

	action: function() {
		this.render(); 
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
	},

	data: function() {
		
		var slug =this.params.slug;
		return {
			question: function(){
				var question = Questions.findOne({slug: slug});
				Session.set("CurrentQuestionTitle",question.title);
				return question;
			}
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
		document.title = this.route.options.title + " " + Session.get("CurrentQuestionTitle") ;
	}
});