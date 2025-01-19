import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergepdf = async (pdfpaths ) => {

  
  for(const pdfpath of pdfpaths){
    await merger.add(pdfpath)
  }

  await merger.save('public/merged.pdf');
};

