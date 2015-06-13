Template.LoginForm.helpers({
	errorMessage: function () {
		return Session.get("ErrorMessage");
	}
});

Template.LoginForm.events({
	"submit #login_form": function (event,template) {
		event.preventDefault();
		var email = template.find('#login_email').value;
		var password = template.find('#login_password').value;

		Meteor.loginWithPassword(email,password,function(err){
			if(err){
				Session.set("ErrorMessage","The username and password do not match.");
			}else{
				//Logged In, go to Dashboard
				Router.go('dashboard',{});
			}
		});

		return false;
	}
});