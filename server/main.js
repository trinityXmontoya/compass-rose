import { Meteor } from 'meteor/meteor';

_ = lodash

Meteor.startup(() => {
  if (USMeetings.find().count() == 0){
    Meetings.seed()
  }
});
