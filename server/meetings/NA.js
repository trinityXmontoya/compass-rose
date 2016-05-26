import cheerio from 'cheerio'
import "./meeting.js";

Meetings.NA.formatContactInfo = function(str) {
  var arr = _.split(str, "http")
  phone = arr[0]
  website = arr[1]
  if (phone){
    arr[0] = "<a href='tel:" + _.split(phone, "Phone: ")[1] + "'>" + phone + "</a>"
  }
  if (website) {
    url = "http" + website
    arr[1] = "<a href='"+ url + "' class='external-link'>" + url + "</a>"
  }
  return arr.join(" ")
};

Meetings.NA.getHelplines = function(state){
  console.log("im being called")
  var url = "http://www.na.org/meetingsearch/search-by-state.php?state=" + state
  var html = HTTP.get(url).content
  $ = cheerio.load(html, {normalizeWhitespace: true})
  var trows = _.drop($("table.result_table tr"),2)
  var results = _.map(trows, function(tr){
    var tdata = $(tr).find("td")
      return {
       source: "NA",
       location: $(tdata[0]).text(),
       contact: Meetings.NA.formatContactInfo(_.trim($(tdata[1]).text())),
       country: $(tdata[2]).text(),
       state: $(tdata[3]).text(),
       areaCode: $(tdata[4]).text()
     };
  });
  return results
}
