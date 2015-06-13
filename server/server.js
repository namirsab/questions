Meteor.startup(function () {
	//Add one simple question if db is empty
	if(Questions.find().count() == 0){
		Questions.insert({
			name: 'Gender',
			title: 'I identify my gender as...',
			answers: [
				{label: 'Male', count: 0},
				{label: 'Female',count: 0},
				{label: 'Other', count: 0}
			],
			answered_by: 0,
		});
	}

	//Create admin user
	if(Meteor.users.find().count() == 0){
		var options = {
			username: 'admin@questions.com',
			email: 'admin@questions.com',
			password: 'admin_questions',
			profile : {name: 'Admin'}
		}
		Accounts.createUser(options);
	}
});