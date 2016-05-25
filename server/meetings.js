Meetings = {
  NA: {},
  AA: {},
  CDA: {},
  SMART: {},
  stateToAbbr: {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District of Columbia": "DC",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
    "Canada": "NF",
    "[Canada] Alberta": "AB",
    "[Canada] British Columbia": "BC",
    "[Canada] Manitoba": "MB",
    "[Canada] New Brunswick": "NB",
    "[Canada] Newfoundland &amp; Labrador": "NL",
    "[Canada] Northern Territories": "NT",
    "[Canada] Nova Scotia": "NS",
    "[Canada] Nunavut": "NU",
    "[Canada] Ontario": "ON",
    "[Canada] Prince Edward Island": "PE",
    "[Canada] Quebec": "QC",
    "[Canada] Saskatchewan": "SK",
    "[Canada] Yukon Territory": "YK"
  }
}

Meteor.publish("meetings.all", function(city, state){
  console.log(state)
  if (!state){
    return "false"
  }
  else {
    // Meetings.NA.getHelplines(state)
    console.log(Meetings.CDA.filter(state))
  }
})


//
// Meetings.retrieve = function(city,state){
//   this.NA.RetrieveHelplines(state)
// }
