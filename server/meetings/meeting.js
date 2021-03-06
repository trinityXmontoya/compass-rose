USMeetings = new Mongo.Collection("USMeetings");

Meetings = {
  NA: {},
  AA: {},
  CDA: {},
  SMART: {},
  formatPhoneNumbers: function(str){
    return str.replace(/(\(?\d{3}.?\d{3}.?\d{4})/g, function(m){
      return "<a href='tel:" + m + "'>" + m + "</a>"
    })
  },
  seed: function(){
    var meetings = [
      this.NA.seed(), // 8
      this.CDA.seed(), // 7
      this.SMART.seed(), // 9
      this.AA.seed() //23
    ]
    var batch = USMeetings.rawCollection().initializeUnorderedBulkOp();
    _.each(_.flatten(meetings), function(meeting){batch.insert(meeting)})
    var execute = Meteor.wrapAsync(batch.execute, batch)
    execute()
  }
}

Meteor.publish("meetings.all", function(state){
  if (!state){ return this.ready() }
  else { return USMeetings.find({state: state}, {sort: {type: -1}}) }
})
