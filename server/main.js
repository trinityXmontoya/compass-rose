import { Meteor } from 'meteor/meteor';
// import "./meetings.js"
// import "./NA.js"
// console.log(Meetings)
// console.log(HTTP)

_ = lodash

Meteor.startup(() => {
  if (USMeetings.find().count() == 0){
    Meetings.seed()
  }

  // code to run on server at startup
  // Meetings.CDA.populateInfo()
});
