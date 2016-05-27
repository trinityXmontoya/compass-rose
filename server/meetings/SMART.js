import cheerio from 'cheerio'
import "./meeting.js";

Meetings.SMART = {
  stateOpts: ["A","C","D","F","G","H","I","K","L","M","N","O","P","R","S","T",
  "U","V","W"],

  extractLocationInfo: function(str){
    var info = _.split(str, /(^.*\d{1,2}:\d{2}.?(?:AM|PM)?)/)
    var res = {}
    if (info.length < 2) {
      res.location = info[0]
    }
    else {
      res.time = info[1];
      res.location = _.trim(info[2]);
    }
    return res
  },

  seed: function(){
    console.log("Seeding SMART data...")

    var _this = this;
    var allStateResults = _.map(_this.stateOpts, function(s){
      var url = "http://www.smartrecovery.org/meetings_db/view/showalpha_state.php?search=" + s
      var html = HTTP.get(url).content
      $ = cheerio.load(html, {normalizeWhitespace: true})
      var trows = _.drop($("table tr"))
      var results = _.map(trows, function(tr){
        var tdata = $(tr).find("td")
        var locationInfo = _this.extractLocationInfo(_.trim($(tdata[3]).text()))
        var phone = Meetings.formatPhoneNumbers($(tdata[4]).text())
        var res = {
          type: "SMART",
          country: $(tdata[0]).text(),
          state: $(tdata[1]).text(),
          city: $(tdata[2]).text(),
          phone: phone,
          contact: $(tdata[5]).text(),
          addlInfo: $(tdata[6]).text()
        }
        return _.merge(res, locationInfo)
      })
      return results
    })
    console.log("...SMART seed complete.")
    return _.compact(_.flatten(allStateResults))
  }
}


// TODO what does normalize whitespace do
