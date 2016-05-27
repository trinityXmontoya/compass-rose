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
});
