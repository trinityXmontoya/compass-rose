var NAHelplineStateVals = [
	{val: "AL", label: "[USA] Alabama"},
  {val: "AK", label: "[USA] Alaska"},
  {val: "AZ", label: "[USA] Arizona"},
  {val: "AR", label: "[USA] Arkansas"},
  {val: "CA", label: "[USA] California"},
  {val: "CO", label: "[USA] Colorado"},
  {val: "CT", label: "[USA] Connecticut"},
  {val: "DE", label: "[USA] Delaware"},
  {val: "DC", label: "[USA] District of Columbia"},
  {val: "FL", label: "[USA] Florida"},
  {val: "GA", label: "[USA] Georgia"},
  {val: "HI", label: "[USA] Hawaii"},
  {val: "ID", label: "[USA] Idaho"},
  {val: "IL", label: "[USA] Illinois"},
  {val: "IN", label: "[USA] Indiana"},
  {val: "IA", label: "[USA] Iowa"},
  {val: "KS", label: "[USA] Kansas"},
  {val: "KY", label: "[USA] Kentucky"},
  {val: "LA", label: "[USA] Louisiana"},
  {val: "ME", label: "[USA] Maine"},
  {val: "MD", label: "[USA] Maryland"},
  {val: "MA", label: "[USA] Massachusetts"},
  {val: "MI", label: "[USA] Michigan"},
  {val: "MN", label: "[USA] Minnesota"},
  {val: "MS", label: "[USA] Mississippi"},
  {val: "MO", label: "[USA] Missouri"},
  {val: "MT", label: "[USA] Montana"},
  {val: "NE", label: "[USA] Nebraska"},
  {val: "NV", label: "[USA] Nevada"},
  {val: "NH", label: "[USA] New Hampshire"},
  {val: "NJ", label: "[USA] New Jersey"},
  {val: "NM", label: "[USA] New Mexico"},
  {val: "NY", label: "[USA] New York"},
  {val: "NC", label: "[USA] North Carolina"},
  {val: "ND", label: "[USA] North Dakota"},
  {val: "OH", label: "[USA] Ohio"},
  {val: "OK", label: "[USA] Oklahoma"},
  {val: "OR", label: "[USA] Oregon"},
  {val: "PA", label: "[USA] Pennsylvania"},
  {val: "RI", label: "[USA] Rhode Island"},
  {val: "SC", label: "[USA] South Carolina"},
  {val: "SD", label: "[USA] South Dakota"},
  {val: "TN", label: "[USA] Tennessee"},
  {val: "TX", label: "[USA] Texas"},
  {val: "UT", label: "[USA] Utah"},
  {val: "VT", label: "[USA] Vermont"},
  {val: "VA", label: "[USA] Virginia"},
  {val: "WA", label: "[USA] Washington"},
  {val: "WV", label: "[USA] West Virginia"},
  {val: "WI", label: "[USA] Wisconsin"},
  {val: "WY", label: "[USA] Wyoming"},
  {val: "NF", label: "[Canada] "},
  {val: "AB", label: "[Canada] Alberta"},
  {val: "BC", label: "[Canada] British Columbia"},
  {val: "MB", label: "[Canada] Manitoba"},
  {val: "NB", label: "[Canada] New Brunswick"},
  {val: "NL", label: "[Canada] Newfoundland &amp; Labrador"},
  {val: "NT", label: "[Canada] Northern Territories"},
  {val: "NS", label: "[Canada] Nova Scotia"},
  {val: "NU", label: "[Canada] Nunavut"},
  {val: "ON", label: "[Canada] Ontario"},
  {val: "PE", label: "[Canada] Prince Edward Island"},
  {val: "QC", label: "[Canada] Quebec"},
  {val: "SK", label: "[Canada] Saskatchewan"},
  {val: "YK", label: "[Canada] Yukon Territory"}]

var NAMeetingStateVals = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District of Columbia",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode IslandRhode",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming"
]

Template.CDA_Info.onCreated(function(){
	var _this = this
	this.currentMeetingResults = new ReactiveVar(null);

	var url = "http://cdawebsitedev.com/meetings.html#"

	var formatCDAMeetingResults = function(res){
		var parser = new DOMParser();
		var resTable = $(parser.parseFromString(res, "text/html")).find(".Accordion .AccordionPanel");
		var results = _.map( resTable, function(panel){
			return _.map(
				{
					location: $(panel).find(".AccordionPanelTab").text(),
					results: _.map($(panel).find("li"), function(li){ return li.innerHTML.split("<br>")})
				}
			)
		});
		_this.currentMeetingResults.set(results)
	};

	$.ajax({
		url: url,
		type: 'GET',
		headers: {
				"Access-Control-Allow-Origin": "*"
		},
		success: function(data) {
			formatCDAMeetingResults(data)
		},
		error: function(xhr, status, err) {
			console.error(status, err.toString());
		}
	});
})

Template.NA_Meeting_Search.onCreated(function(){
	this.currentMeetingResultsUrl = new ReactiveVar(null);
})
Template.NA_Helplines.onCreated(function(){
	this.currentHelplineResults = new ReactiveVar(null);

	this.formatNAHelplineResults = function(res, instance){
		var parser = new DOMParser();
		var resTable = $(parser.parseFromString(res, "text/html")).find("table.result_table tr");
		var results = _.map( resTable, function(tr){ return _.map($(tr).find("td"), function(td){ return td.textContent}) })
		var finalResults = _.drop(results, 2)
		instance.currentHelplineResults.set(finalResults)
	};
})

Template.MeetingFinder.onCreated(function () {

});

Template.MeetingFinder.events({
	"submit form#meeting-finder-location-entry" (evt,instance){
		evt.preventDefault();
		var state = evt.currentTarget.state.value
		var city = evt.currentTarget.city.value
		console.log(state, city)
		var handle = Meteor.subscribe("meetings.all", city, state);
	}
})

Template.NA_Meeting_Search.onRendered(function () {
	$("#na-meeting-finder-chosen").chosen({
    inherit_select_classes: true,
    max_selected_options: 1
  });
});

Template.NA_Helplines.onRendered(function () {
  $("#na-helpline-finder-chosen").chosen({
    inherit_select_classes: true,
    max_selected_options: 1
  });
});

Template.NA_Helplines.helpers({
	NAHelplineStateVals(){ return NAHelplineStateVals;}
});
Template.NA_Meeting_Search.helpers({
	NAMeetingStateVals(){ return NAMeetingStateVals;}
});

Template.NA_Helplines.helpers({
  helplineResults() {
    return Template.instance().currentHelplineResults.get()
  }
});

Template.NA_Meeting_Search.helpers({
	meetingResultsUrl(){
		return Template.instance().currentMeetingResultsUrl.get()
	}
});

Template.CDA_Info.helpers({
	meetingResults(){
		return Template.instance().currentMeetingResults.get()
	}
});

Template.NA_Helplines.events({
	"change #na-helpline-finder-chosen" (evt, instance){
		var state = evt.currentTarget.value
		var url = "http://www.na.org/meetingsearch/search-by-state.php?state=" + state
		$.ajax({
      url: url,
      type: 'GET',
			headers: {
          "Access-Control-Allow-Origin": "*"
      },
      success: function(data) {
				instance.formatNAHelplineResults(data, instance)
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
	}
});

Template.NA_Meeting_Search.events({
	"submit form[name='NA-meeting-search-form']" (evt,instance){
		evt.preventDefault()
		var form = evt.currentTarget
		state = form.state.value
		city = form.city.value
		dist = form.dist.value
		url = "http://www.na.org/meetingsearch/map-results.php" +
					"?state=" + state + "&city=" + city + "&within=" + dist;
					console.log(url)
		IframeUrl.set(url)
		$("div#iframe-modal").show()
		// TODO BTR^
		form.state.value = ""
		form.city.value = ""
		form.dist.value = ""
	}
})
