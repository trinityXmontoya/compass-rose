var info = {
  methadone : {
    name: "methadone",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/methadone",
    interactionCheckerLink: "http://reference.medscape.com/drug/methadose-dolophine-methadone-343317#3",
    sideEffectsListLink: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a682134.html#side-effects",
    sideEffectMgmtLink: "http://healthqwest.us/pdfs/Methadone.Brochure.pdf#page=2"
  },
  buprenorphine : {
    name: "buprenorphine",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/buprenorphine",
    interactionCheckerLink: "http://reference.medscape.com/drug/buprenex-buprenorphine-343326",
    sideEffectsListLink: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a605002.html#side-effects",
    sideEffectMgmtLink: "http://store.samhsa.gov/shin/content/SMA09-4442/SMA09-4442.pdf#page=9"
  },
  naltrexone : {
    name: "naltrexone",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/naltrexone",
    interactionCheckerLink: "http://reference.medscape.com/drug/vivitrol-revia-naltrexone-343333#3",
    sideEffectsListLink: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a609007.html#side-effects",
    sideEffectMgmtLink: "http://store.samhsa.gov/shin/content/SMA12-4444/SMA12-4444.pdf#page=9"

  }
};

Template.Drugs.onCreated(function () {
  this.currentSelection = new ReactiveVar(null);
});

Template.Drugs.events({
  'click a.drug' (evt, instance) {
    instance.currentSelection.set(info[evt.currentTarget.dataset.value]);
  },
});

Template.Drugs.helpers({
  selection() {
    return Template.instance().currentSelection.get()
  }
});

Template.Drugs_info.helpers({
  addlInfo() {

    // console.log(info, "gottem")
    return info;
    // return Template.instance()
  },
});
