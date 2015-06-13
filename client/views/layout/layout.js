Template.PrivateLayoutRightMenu.events({
	'click #logout': function (event) {
		event.preventDefault();
		App.logout();
	}
});
