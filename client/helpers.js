Template.registerHelper('capitalize', (str) => {
  if (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});

Template.registerHelper('formatNAContactRes', (str) => {
  var arr = _.split(str, "http")
  phone = arr[0]
  website = arr[1]
  if (phone){
    arr[0] = "<a href='tel:" + _.split(phone,"Phone: ")[1] + "'>" + phone + "</a>"
  }
  if (website) {
    url = "http" + website
    arr[1] = "<a href='"+ url + "'>" + url + "</a>"
  }
  return arr.join(" ")
});
