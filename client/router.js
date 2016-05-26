FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("Layout");
  }
});

FlowRouter.route('/meeting-finder', {
  name: 'Meetings.finder',
  action: function() {
    BlazeLayout.render("Layout", {content: "MeetingFinder"});
  }
});

FlowRouter.route('/drugs', {
  name: 'Drugs.show',
  action: function() {
    BlazeLayout.render("Layout", {content: "Drugs"});
  }
});

FlowRouter.route('/toolbox', {
  name: 'Toolbox.show',
  action: function() {
    BlazeLayout.render("Layout", {content: "Toolbox"});
  }
});

FlowRouter.route('/self-help', {
  name: 'SelfHelp.show',
  action: function() {
    BlazeLayout.render("Layout", {content: "SelfHelp"});
  }
});

FlowRouter.route('/stories', {
  name: 'Stories.show',
  action: function() {
    BlazeLayout.render("Layout", {content: "Stories"});
  }
});
