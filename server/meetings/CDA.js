import cheerio from 'cheerio'
import "./meeting.js";

Meetings.CDA.seed = function(){
  var url = "http://cdawebsitedev.com/meetings.html#"
  var html = HTTP.get(url).content
  $ = cheerio.load(html, {normalizeWhitespace: true})
  var panels = $(".Accordion .AccordionPanel")
  var results = _.map(panels, function(panel){
    var location = $(panel).find(".AccordionPanelTab").text()
    var state = Meetings.stateToAbbr[_.trim(_.split(location, "-")[0])]
    var meetings = $(panel).find("li")
    return _.map(meetings, function(meeting){
      var info = _.split($(meeting).html(), "<br>")
      var res = {
        source: "CDA",
        location: location,
        state: state,
        time: info[0],
        name: _.trim(info[1])
      }
      if (_.includes(res.time, "(O) Open Meeting;")){
        return null
      }
      else {
        if (info.length == 2){
          regex = _.split(info[1], " - ")
          res.name = regex[0]
          res.address = regex[1]
        }
        else if (info.length == 3){
         res.address = info[2]
       }
        else {
         _.join(_.drop(info, 2), ",")
       }
        return res
      }
    })
  })
  Meetings.CDA.results = _.compact(_.flatten(results))
}

Meetings.CDA.filter = function(state){
  var meetings = Meetings.CDA.results
  if (meetings){
    return _.filter(meetings, function(m){
      return m.state == state
    })
  }
  else {
    Meetings.CDA.seed()
    Meetings.CDA.filter(state)
  }
}
