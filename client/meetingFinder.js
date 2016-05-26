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

//
// Template.NA_Helplines.onRendered(function () {
//   $("#na-helpline-finder-chosen").chosen({
//     inherit_select_classes: true,
//     max_selected_options: 1
//   });
// });
//
// Template.NA_Helplines.helpers({
// 	NAHelplineStateVals(){ return NAHelplineStateVals;}
// });
// Template.NA_Meeting_Search.helpers({
// 	NAMeetingStateVals(){ return NAMeetingStateVals;}
// });
//
// Template.NA_Helplines.helpers({
//   helplineResults() {
//     return Template.instance().currentHelplineResults.get()
//   }
// });
//
// Template.NA_Meeting_Search.helpers({
// 	meetingResultsUrl(){
// 		return Template.instance().currentMeetingResultsUrl.get()
// 	}
// });
//
// Template.CDA_Info.helpers({
// 	meetingResults(){
// 		return Template.instance().currentMeetingResults.get()
// 	}
// });
//
// Template.NA_Helplines.events({
// 	"change #na-helpline-finder-chosen" (evt, instance){
// 		var state = evt.currentTarget.value
// 		var url = "http://www.na.org/meetingsearch/search-by-state.php?state=" + state
// 		$.ajax({
//       url: url,
//       type: 'GET',
// 			headers: {
//           "Access-Control-Allow-Origin": "*"
//       },
//       success: function(data) {
// 				instance.formatNAHelplineResults(data, instance)
//       },
//       error: function(xhr, status, err) {
//         console.error(status, err.toString());
//       }
//     });
// 	}
// });
//
// Template.NA_Meeting_Search.events({
// 	"submit form[name='NA-meeting-search-form']" (evt,instance){
// 		evt.preventDefault()
// 		var form = evt.currentTarget
// 		state = form.state.value
// 		city = form.city.value
// 		dist = form.dist.value
// 		url = "http://www.na.org/meetingsearch/map-results.php" +
// 					"?state=" + state + "&city=" + city + "&within=" + dist;
// 					console.log(url)
// 		IframeUrl.set(url)
// 		$("div#iframe-modal").show()
// 		// TODO BTR^
// 		form.state.value = ""
// 		form.city.value = ""
// 		form.dist.value = ""
// 	}
// })
