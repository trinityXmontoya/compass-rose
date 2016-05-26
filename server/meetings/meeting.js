USMeetings = new Mongo.Collection("USMeetings");

Meetings = {
  NA: {},
  AA: {},
  CDA: {},
  SMART: {},
  seed: function(){
    var meetings = [
      this.NA.seed(),
      this.CDA.seed(),
      this.SMART.seed()
    ]
    var batch = USMeetings.rawCollection().initializeUnorderedBulkOp();
    _.each(_.flatten(meetings), function(meeting){batch.insert(meeting)})
    var execute = Meteor.wrapAsync(batch.execute, batch)
    execute()
  }
}

Meteor.publish("meetings.all", function(state){
  if (!state){ return this.ready() }
  else { return USMeetings.find({state: state}) }
})
