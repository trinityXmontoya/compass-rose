USMeetings = new Mongo.Collection('USMeetings');


Session_MeetingFinder_Searching = new ReactiveVar(false)
Session_MeetingFinder_State = new ReactiveVar(null)

Template.MeetingFinder.onCreated(function(){
	Session_MeetingFinder_State.set(null)
	this.autorun(()=> {
		if (Session_MeetingFinder_State.get()){
			var searchHandle = Meteor.subscribe("meetings.all", Session_MeetingFinder_State.get());
			Session_MeetingFinder_Searching.set(!(searchHandle.ready()));
		}
	})
})

Template.MeetingFinder.events({
	"submit form#meeting-finder-location-entry" (evt,instance){
		evt.preventDefault();
		var state = evt.currentTarget.state.value
		if (state){
			Session_MeetingFinder_State.set(state)
			evt.currentTarget.state.value = ""
		}
	}
})

Template.MeetingFinder.helpers({
	searching: function(){ return Session_MeetingFinder_Searching.get()},
	searchResults: function(){
		return USMeetings.find({state: Session_MeetingFinder_State.get()})
	}
})
//

Template.MeetingFinder.onRendered(function () {
	$("select#meeting-finder-form-state").chosen({
    inherit_select_classes: true,
    max_selected_options: 1
  });
});
