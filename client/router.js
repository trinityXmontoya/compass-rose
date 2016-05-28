Tracker.autorun(function() {
  FlowRouter.watchPathChange();
  $("#pdf-viewer-container").hide()
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("Layout", {content: "Home"});
  }
});

FlowRouter.route('/meeting-finder', {
  action: function() {
    BlazeLayout.render("Layout", {content: "MeetingFinder"});
  }
});

FlowRouter.route('/drugs', {
  action: function() {
    BlazeLayout.render("Layout", {content: "Drugs"});
  }
});

// FlowRouter.route('/toolbox', {
//   name: 'Toolbox.show',
//   action: function() {
//     BlazeLayout.render("Layout", {content: "Toolbox"});
//   }
// });

FlowRouter.route('/self-help', {
  action: function() {
    BlazeLayout.render("Layout", {content: "Worksheet"});
  }
});

// FlowRouter.route('/stories', {
//   name: 'Stories.show',
//   action: function() {
//     BlazeLayout.render("Layout", {content: "Stories"});
//   }
// });

FlowRouter.route('/credits', {
  action: function() {
    BlazeLayout.render("Layout", {content: "Credits"});
  }
});
