import cheerio from 'cheerio'
import "./meeting.js";

Meetings.AA = {
  stateOpts: ["us_al", "us_ak", "us_az", "us_ar", "us_ca", "us_co", "us_ct",
  "us_de", "us_dc", "us_fl", "us_ga", "us_hi", "us_id", "us_il", "us_in", "us_ia",
  "us_ks", "us_ky", "us_la", "us_me", "us_md", "us_ma", "us_mi", "us_mn", "us_ms",
  "us_mo", "us_mt", "us_ne", "us_nv", "us_nh", "us_nj", "us_nm", "us_ny", "us_nc",
  "us_nd", "us_oh", "us_ok", "us_or", "us_pa", "us_pr", "us_ri", "us_sc", "us_sd",
  "us_tn", "us_tx", "us_ut", "us_vt", "us_vi", "us_va", "us_wa", "us_wv", "us_wi",
  "us_wy"],

  seed: function(){
    console.log("Seeding AA data...")

    var results = _.map(this.stateOpts, function(s){
      var url = "http://www.aa.org/find-meetings/list?a=" + s
      var html = HTTP.get(url).content
      $ = cheerio.load(html, {normalizeWhitespace: true})
      var rows = $(".item-columns-row .item-cell")
      var results = _.map(rows, function(row){
        var location = _.split($(row).find(".city").text(), ", ")
        var city = location[0]
        var state = location[1]
        var nameInfo = $(row).find("a")
        var name = $(nameInfo[0]).text()
        var website = $(nameInfo[1]).text()
        // TODO ugh
        var nums = Meetings.formatPhoneNumbers(_.trim(
          _.replace(_.replace(
            _.replace($(row).find(".item").not("a").text(), "Site: ", ""),
            name, ""), website, "")
          ))
        return {
           type: "AA",
           contact: name,
           city: city,
           state: state,
           country: "US",
           addlInfo: "<a target='_blank' href='" + website + "'>" + website + "</a>'",
           phone: nums
        };
      });
      return results;
    });
    console.log("...AA seed complete.")
    return _.compact(_.flatten(results))
  }

}
