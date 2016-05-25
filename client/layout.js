Template.Layout.onCreated(function LayoutOnCreated(){
  this.iframeUrl = new ReactiveVar(null)
})

Template.Layout.helpers({
  iframeUrl(){
    return Template.instance().iframeUrl.get();
  }
})

Template.Layout.events({
  "click a.external-link" (evt, instance){
    evt.preventDefault();
    instance.iframeUrl.set(evt.currentTarget.href)
    $("div#iframe-modal").show()
  }
})
