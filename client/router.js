Tracker.autorun(function() {
	FlowRouter.watchPathChange();
});

FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("Layout", {
			content: "Toolbox"
		});
	}
});

FlowRouter.route('/meeting-finder', {
	action: function() {
		BlazeLayout.render("Layout", {
			content: "MeetingFinder"
		});
	}
});

FlowRouter.route('/drugs', {
	action: function() {
		BlazeLayout.render("Layout", {
			content: "Drugs"
		});
	}
});



FlowRouter.route('/self-help', {
	action: function() {
		BlazeLayout.render("Layout", {
			content: "Worksheet"
		});
	}
});



FlowRouter.route('/credits', {
	action: function() {
		BlazeLayout.render("Layout", {
			content: "Credits"
		});
	}
});
