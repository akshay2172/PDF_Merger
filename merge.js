import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergepdf = async (p1, p2 , p3 ) => {
  await merger.add(p1);  
  await merger.add(p2);  
  await merger.add(p3);  

  await merger.save('public/merged.pdf');
};

