class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.match(/^\d+_([\w-]+\.\w+)/)[1];
  } // extractFileName()
} // FileNameExtractor()

console.log(
  FileNameExtractor.extractFileName(
    "1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION",
  ),
);
console.log(
  FileNameExtractor.extractFileName(
    "1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34",
  ),
);
console.log(
  FileNameExtractor.extractFileName("1231231223123131_myFile.tar.gz2"),
);
console.log(
  FileNameExtractor.extractFileName(
    "1_FILE_NAM-E.EXTENSION.OTHEREXTENSIONadasdassdassds34",
  ),
);
