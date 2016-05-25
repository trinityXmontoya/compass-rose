import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

_ = lodash

IframeUrl = new ReactiveVar(null);

Template.Layout.helpers({
  IframeUrl(){
    return IframeUrl.get()
  }
})
