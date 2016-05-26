import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

_ = lodash

IframeUrl = new ReactiveVar(null);

Template.Layout.helpers({
  IframeUrl(){
    return IframeUrl.get()
  }
})
