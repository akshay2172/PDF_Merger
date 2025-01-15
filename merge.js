// merge.mjs

import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergepdf = async (p1, p2 , p3 ) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p3);  //merge all pages. parameter is the path to file and filename.

  await merger.save('public/merged.pdf');
};

