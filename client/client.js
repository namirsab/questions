this.App = {};
this.Helpers = {};


Meteor.startup(function() {
	// App.logout();
});

App.logout = function() {
	Meteor.logout(function(err) {
	});
};


Helpers.username = function(){
	var username = ""
	if(Meteor.user()){
		username = Meteor.user().username;
	}
	return username;
}	

Helpers.userFullName = function() {
	var name = "";
	if(Meteor.user() && Meteor.user().profile)
		name = Meteor.user().profile.name;
	return name;
};

Helpers.userEmail = function() {
	var email = "";
	if(Meteor.user() && Meteor.user().profile)
		email = Meteor.user().profile.email;
	return email;
};


Helpers.formatDate = function(date, dateFormat) {
	if(!date) {
		return "";
	}

	var f = dateFormat || "MM/DD/YYYY";

	if(_.isString(date)) {
		if(date.toUpperCase() == "NOW") {
			date = new Date();
		}
		if(date.toUpperCase() == "TODAY") {
			d = new Date();
			date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
		}
	}

	return moment(date).format(f);
};


Helpers.prettyDate = function(timestamp){
	return moment(new Date(timestamp)).fromNow();
}

Helpers.selected = function(param,value){
	return param == value ? 'selected':'';
}

Helpers.menuItemClass = function(routeName){
	var currentPath = Router.routes[Router.current().route.getName()].handler.path;
	var routePath = Router.routes[routeName].handler.path;

	if(routePath === "/") {
		return currentPath == routePath ? "active" : "";
	}

	return currentPath.indexOf(routePath) === 0 ? "active" : "";
}

_.each(Helpers, function (helper, key) {
	Handlebars.registerHelper(key, helper);
});

