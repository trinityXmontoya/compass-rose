import cheerio from 'cheerio'
import "./meeting.js";

Meetings.NA = {
  stateOpts: ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID",
  "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE",
  "NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN",
  "TX","UT","VT","VA","WA","WV","WI","WY"],

  extractContactInfo: function(str) {
    var arr = _.split(str, "http")
    phone = arr[0]
    website = arr[1]
    if (phone){ phone = _.trim(_.split(phone, "Phone:"))[1] }
    if (website) { website = "http" + website }
    return { phone: phone, website: website }
  },

  seed: function(){
    console.log("Seeding NA data...")

    var _this = this
    var results = _.map(_this.stateOpts, function(s){
      var url = "http://www.na.org/meetingsearch/search-by-state.php?state=" + s
      var html = HTTP.get(url).content
      $ = cheerio.load(html, {normalizeWhitespace: true})
      var trows = _.drop($("table.result_table tr"),2)
      var results = _.map(trows, function(tr){
        var tdata = $(tr).find("td")
        var contactInfo =_this.extractContactInfo(_.trim($(tdata[1]).text()))
        var res = {
           source: "NA",
           area: $(tdata[0]).text(),
           country: $(tdata[2]).text(),
           state: $(tdata[3]).text()
        };
        return _.merge(res, contactInfo)
      });
      return results;
    });
    console.log("...NA seed complete.")
    return _.compact(_.flatten(results))
  }
}
