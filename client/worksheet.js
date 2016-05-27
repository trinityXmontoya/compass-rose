Template.Worksheet.onRendered(function(){
  Session.set("currentPageSelection", 0)
})

Template.Worksheet.events({
  "click button.doc-viewer-btn" (evt,instance){
    var dir = evt.currentTarget.dataset.dir
    var val = (Session.get("currentPageSelection") +  parseInt(dir))
    if (val < 0){ val = 0 }
    else if (val == 32 ){ val = Session.get("currentPageSelection")}
    Session.set("currentPageSelection", val)
  },

  "click .toc-list-item" (evt, instance){
    var page = parseInt(evt.currentTarget.dataset.pg)
    Session.set("currentPageSelection", page)
  }
})

Template.Worksheet.helpers({
  currentPageSelection: function(){
  return Session.get("currentPageSelection")
  }
})
