var info = {
  methadone : {
    name: "methadone",
    basicInfo: "Methadone is a medication used in medication-assisted treatment (MAT) to help people reduce or quit their use of heroin or other opiates.",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/methadone",
    interactionCheckerLink: "http://reference.medscape.com/drug/methadose-dolophine-methadone-343317#3",
    sideEffects: [
      {title: "Common Side Effects", link: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a682134.html#side-effects"},
      {title: "Side Effect Management", link: "http://healthqwest.us/pdfs/Methadone.Brochure.pdf#page=2"},
      {title: "Dealing with Pain", link: "http://atforum.com/patient-education-brochures/"},
      {title: "Constipations During MMT", link: "http://www.atforum.com/documents/english/Constipation_During_MMT.pdf"},
      {title: "Getting help for Sexual Problems", link: "http://www.atforum.com/documents/english/Getting_help_for_sexual_problems.pdf"},
      {title: "Sleep Problems During MMT", link: "http://www.atforum.com/documents/english/Sleep_Problems_During_MMT.pdf"}
    ]
  },
  buprenorphine : {
    name: "buprenorphine",
    basicInfo: "Buprenorphine is used in medication-assisted treatment (MAT) to help people reduce or quit their use of heroin or other opiates, such as pain relievers like morphine.",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/buprenorphine",
    interactionCheckerLink: "http://reference.medscape.com/drug/buprenex-buprenorphine-343326",
    sideEffects: [
      {title: "Common Side Effects", link: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a605002.html#side-effects"},
      {title: "Side Effect Management", link: "http://store.samhsa.gov/shin/content/SMA09-4442/SMA09-4442.pdf#page=9"},
      {title: "More Common Side Effects from Buprenorphine", link: "http://www.naabt.org/buprenorphine-side-effects.cfm"},
      {title: "Info on opioid withdrawal and buprenorphine", link: "http://www.naabt.org/documents/NAABT_PrecipWD.pdf"}
    ]
  },
  naltrexone : {
    name: "naltrexone",
    basicInfo: "Naltrexone is a medication used in medication-assisted treatment (MAT) to treat both opioid and alcohol use disorders.",
    source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/naltrexone",
    interactionCheckerLink: "http://reference.medscape.com/drug/vivitrol-revia-naltrexone-343333#3",
    sideEffects: [
      {title: "Common Side Effects", link:"https://www.nlm.nih.gov/medlineplus/druginfo/meds/a609007.html#side-effects"},
      {title: "Side Effect Management", link: "http://store.samhsa.gov/shin/content/SMA12-4444/SMA12-4444.pdf#page=9"},
      {title: "Naltrexone Fact Sheet", link: "http://attcnetwork.org/projects/documents/poats/POATS_Naltrexone_FactSheet.pdf"},
    ]
  }
};

Template.Drugs.onCreated(function () {
  this.currentSelection = new ReactiveVar("methadone");
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
    return info;
  },
});
