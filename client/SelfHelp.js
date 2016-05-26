import pdfjs from 'pdfjs-dist'

var url = "../public/matrix.pdf#page=39"
pdfjs.workerSrc = "../node_modules/pdfjs-dist/build/pdf.worker.js";
pdfjs.getDocument(url).then(function getPdfHelloWorld(pdf) {
    //
    // Fetch the first page
    //
    pdf.getPage(1).then(function getPageHelloWorld(page) {
      var scale = 1.5;
      var viewport = page.getViewport(scale);
      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('the-canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });

var SelfHelpResources = [
    {title: "Alcohol", page_begin: 39 , page_end: 40},
    {title: "Boredom", page_begin: 41, page_end: 42},
    {title: "Guilt and Shame", page_begin: 48, page_end: 49},
    {title: "Truthfulness", page_begin: 54, page_end: 55 },
    {title: "Anger", page_begin: 80 , page_end: 80},
    {title: "Feelings & Depression", page_begin: 88 , page_end: 90 },
    {title: "12-Step Programs", page_begin: 91, page_end: 94},
    {title: "Money", page_begin: 67 , page_end: 67 },
    {title: "New Friends", page_begin: 82 , page_end: 82 },
    {title: "Repairing Relationships", page_begin: 83 , page_end: 83},
    {title: "Sex", page_begin: 57 , page_end: 57},
    {title: "Prayer", page_begin: 84, page_end: 84},
    {title: "Work", page_begin: 46 , page_end: 47 },
    {title: "Motivation", page_begin: 52 , page_end: 52 },
    {title: "Self-Care", page_begin: 70 , page_end: 70},
    {title: "Stress", page_begin: 78 , page_end: 79}
]

Template.SelfHelp.helpers({
  resources() {
    return SelfHelpResources;
  },
});
