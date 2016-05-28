var info = {
    methadone: {
        name: "methadone",
        basicInfo: "Methadone is a medication used in medication-assisted treatment (MAT) to help people reduce or quit their use of heroin or other opiates.",
        source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/methadone",
        interactionCheckerLink: "http://reference.medscape.com/drug/methadose-dolophine-methadone-343317#3",
        webMdChecker: "2671/methadone+oral",
        sideEffects: [{
            title: "Common Side Effects",
            link: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a682134.html#side-effects"
        }, {
            title: "Side Effect Management",
            link: "http://healthqwest.us/pdfs/Methadone.Brochure.pdf#page=2"
        }, {
            title: "Dealing with Pain",
            link: "http://atforum.com/patient-education-brochures/"
        }, {
            title: "Constipations During MMT",
            link: "http://www.atforum.com/documents/english/Constipation_During_MMT.pdf"
        }, {
            title: "Getting help for Sexual Problems",
            link: "http://www.atforum.com/documents/english/Getting_help_for_sexual_problems.pdf"
        }, {
            title: "Sleep Problems During MMT",
            link: "http://www.atforum.com/documents/english/Sleep_Problems_During_MMT.pdf"
        }],
        successStoriesLink: "http://www.methadone.us/methadone-success-stories/",
        successStories: [{
            name: "Sharon",
            image: "women/10.jpg",
            text: "After beginning daily methadone medication, she never used opiates again. After several attempts, she also achieved abstinence from Xanax, and remained completely drug free from that point forward..."
        }, {
            name: "Kiley",
            image: "women/42.jpg",
            text: "After two months receiving methadone, Kiley became completely free of illicit drugs. Everything about her changed dramatically. She gained weight. Her depression lifted, and her mental clarity..."
        }, {
            name: "Franklin",
            image: "men/30.jpg",
            text: "When Franklin began methadone maintenance, he experienced the kind of relief he had been hoping for. Withdrawal sickness ended. Like many people, his energy returned. He began to get a grip on his life, and..."
        }, {
            name: "Steven",
            image: "men/8.jpg",
            text: "He had heard about methadone and decided he should give it a chance since everything else he had tried did not work. The decision paid off. Methadone provided excellent relief, and enabled Steven to..."
        }, {
            name: "Barry",
            image: "men/50.jpg",
            text: "Fast forward 6 years, Barry worked successfully through all phases in his methadone treatment clinic. Along the way, he maintained steady employment, joined a church, resumed parenting of his child..."
        }]
    },
    buprenorphine: {
        name: "buprenorphine",
        basicInfo: "Common Brands: Revia and Vivitrol <br> Buprenorphine is used in medication-assisted treatment (MAT) to help people reduce or quit their use of heroin or other opiates, such as pain relievers like morphine.",
        source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/buprenorphine",
        interactionCheckerLink: "http://reference.medscape.com/drug/buprenex-buprenorphine-343326",
        webMdChecker: "64748/buprenorphine+sublingual",
        sideEffects: [{
            title: "Common Side Effects",
            link: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a605002.html#side-effects"
        }, {
            title: "Side Effect Management",
            link: "http://store.samhsa.gov/shin/content/SMA09-4442/SMA09-4442.pdf#page=9"
        }, {
            title: "More Common Side Effects from Buprenorphine",
            link: "http://www.naabt.org/buprenorphine-side-effects.cfm"
        }, {
            title: "Info on opioid withdrawal and buprenorphine",
            link: "http://www.naabt.org/documents/NAABT_PrecipWD.pdf"
        }],
        successStoriesLink: "http://www.naabt.org/true_stories.cfm",
        successStories: [{
            name: "Russell",
            image: "men/13.jpg",
            text: "Not only has Suboxone given me another chance at life, it has given my kids their daddy back!.."
        }, {
            name: "Victoria",
            image: "women/29.jpg",
            text: "My only regret with Suboxone is that I didn't try it sooner. My advice to anyone that is struggling with an addiction is to give it a try. I also believe that therapy is a very important part of recovery..."
        }, {
            name: "Gloria",
            image: "women/8.jpg",
            text: "...It helped me a lot, but without the Suboxone I don't think I would have made it..."
        }, {
            name: "Keith",
            image: "men/33.jpg",
            text: "I would say if you are addicted to opiates to please give Suboxone a try – if you have tried every other way and failed first. Bupe isn't for everyone but it works wonders for me..."
        }, {
            name: "Ian",
            image: "men/27.jpg",
            text: "I am approaching 3 months on Suboxone, and I have my life back..."
        }, ]
    },
    naltrexone: {
        name: "naltrexone",
        basicInfo: "Naltrexone is a medication used in medication-assisted treatment (MAT) to treat both opioid and alcohol use disorders.",
        source: "http://www.samhsa.gov/medication-assisted-treatment/treatment/naltrexone",
        interactionCheckerLink: "http://reference.medscape.com/drug/vivitrol-revia-naltrexone-343333#3",
        webMdChecker: "7399/naltrexone+oral",
        sideEffects: [{
            title: "Common Side Effects",
            link: "https://www.nlm.nih.gov/medlineplus/druginfo/meds/a609007.html#side-effects"
        }, {
            title: "Side Effect Management",
            link: "http://store.samhsa.gov/shin/content/SMA12-4444/SMA12-4444.pdf#page=9"
        }, {
            title: "Naltrexone Fact Sheet",
            link: "http://attcnetwork.org/projects/documents/poats/POATS_Naltrexone_FactSheet.pdf"
        }, ],
        successStoriesLink: "http://www.recoverystories.info/category/stories/",
        successStories: [{
            name: "Adam",
            image: "men/44.jpg",
            text: "Naltrexone is not some sort of miracle cure. It is one thing that can help a person along their path to recovery. In my case, it helped give me some headspace (free of cravings) where I could focus on trying to learn to live without drugs and alcohol. The drug didn’t make me better. I made myself better, with the help of key people around me..."
        }, ]
    }
};

var loadGoodRXWidget = function(drug) {
  $("#goodrx_low-price_widget").html("<div id=\"goodrx_low-price_widget\"><div class=\"drug-info-loading-spinner\"><div class=\"mdl-spinner mdl-js-spinner is-active\"></div></div></div>")
    _grxdn = drug;
    (function(d, t) {
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.src = "//s3.amazonaws.com/assets.goodrx.com/static/widgets/low.min.js";
        s.parentNode.insertBefore(g, s)
    }(document, "script"));
}

Template.Drugs.onRendered(function() {
    Session.set("currentDrugSelection", "methadone")
    loadGoodRXWidget(Session.get("currentDrugSelection"))
})

Template.Drugs.events({
    'click a.drug' (evt, instance) {
        drug = evt.currentTarget.dataset.value
        loadGoodRXWidget(drug)
        Session.set("currentDrugSelection", drug)
    },
});

Template.Drugs.helpers({
    selection() {
        return info[Session.get("currentDrugSelection")];
    }
});
