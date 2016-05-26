import cheerio from 'cheerio'
import "./meeting.js";

Meetings.CDA = {
  extractAddlInfo: function(infoArr){
    var res = {}
    if (infoArr.length == 2){
      regex = _.split(infoArr[1], " - ")
      res.name = regex[0]
      res.location = regex[1]
    }
    else if (infoArr.length == 3){
     res.location = _.trim(infoArr[2])
    }
    else {
     res.location = _.join(_.drop(infoArr, 2), ",")
    }
    return res
  },

  seed: function(){
    console.log("Seeding CDA data...")

    var _this = this;
    var url = "http://cdawebsitedev.com/meetings.html#"
    var html = HTTP.get(url).content
    $ = cheerio.load(html, {normalizeWhitespace: true})
    var panels = $(".Accordion .AccordionPanel")
    var results = _.map(panels, function(panel){
      var location = _.split($(panel).find(".AccordionPanelTab").text(), "-")
      var state = location[0]
      var area = _.trim(location[1])
      var meetings = $(panel).find("li")
      return _.map(meetings, function(meeting){
        var info = _.split($(meeting).html(), "<br>")
        var res = {
          source: "CDA",
          area: area,
          state: state,
          time: info[0],
        }
        if (_.includes(res.time, "(O) Open Meeting;")){
          return null
        }
        else {
          var addlInfo = _this.extractAddlInfo(info)
          res = _.merge(addlInfo, res)
        }
        return res;
      })
    })
    console.log("...CDA seed complete.")
    return _.compact(_.flatten(results))
  }
}
