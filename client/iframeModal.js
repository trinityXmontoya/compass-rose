// IframeUrl = new ReactiveVar("http://www.google.com");

Template.IframeModal.events({
  "click button#iframe-modal-close-btn" (evt,target){
    $("div#iframe-modal").hide()
  }
})
