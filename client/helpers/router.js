Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var publicRoutes = ["index","questions","questions.answer","thanks","admin"];
var privateRoutes = ["dashboard","dasboard.new_question","dashboard.edit_question","dashboard.view_question"];
var zonelessRoutes = [];

var roleMap = [

];


Router.ensureLogged = function() {
	if(Meteor.userId()){
		this.next();
	}else{
		this.redirect('admin');
	}
};

Router.ensureNotLogged = function() {
	this.next();
	// if(Meteor.userId()) {
	// 	var redirectRoute = 'dashboard';
	// 	App.logout();
	// 	this.redirect(redirectRoute);
	// }
	// else {
	// 	this.next();
	// }
};

Meteor.subscribe("current_user_data");

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.onBeforeAction(Router.ensureNotLogged, {only: publicRoutes});
Router.onBeforeAction(Router.ensureLogged, {only: privateRoutes});

Router.map(function () {
	
	//Pubic Routes
	this.route("index", {title:"Questions!",path: "/", controller: "IndexController"});
	this.route("questions", {title:"Questions! - List", path: "/questions", controller: "QuestionsController"});
	this.route("questions.answer",{title:"Questions! - Answer:" , path: "/questions/:slug", controller: "QuestionsAnswerController"});
	this.route("thanks",{title:"Questions! - Thanks", path: "/thanks", controller:"ThanksController"});
	this.route("admin",{title:"Questions!- Administration", path:"/admin",controller: "AdminController"});
	//Admin routes
	this.route("dashboard",{title:"Questions! - Dashboard", path:"/dashboard",controller:"DashboardController"});
	this.route("dashboard.new_question",{title:"Questions! - Dashboard - New Question",  path:"/dashboard/new-question",controller:"DashboardNewQuestionController"});
	this.route("dashboard.edit_question",{title:"Questions! - Dashboard - Edit Question: ", path:"/dashboard/edit-question/:slug",controller:"DashboardEditQuestionController"});
	this.route("dashboard.view_question",{title:"Questions! - Dashboard - View Question: ", path:"/dashboard/view-question/:slug",controller:"DashboardViewQuestionController"});

	
});