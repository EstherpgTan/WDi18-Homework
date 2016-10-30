// Emmanuel 25102016 - Week 1
// Write an if statement that writes Hello World in different languages
// I shall not bear responsible on this usage
//   to translate Hello World into different language.
// This is purely gotten straight from the Google Translate.
// Hence, do excuse for it and don't blame Google Translate that much for it.
var language = "cn";

if( language === "english"
    || language === "English"
    || language === "en" ) {
  // Prints out Hello World in English
  console.log( "Hello World" );
}
else if( language === "french"
         || language === "French"
         || language === "fr" ) {
  // Prints out Hello World in French
  console.log( "Bonjour le monde" );
}
else if( language === "Hindi"
         || language === "hindi"
         || language === "hin" ) {
  // Prints out Hello World in Hindi language
  console.log( "नमस्ते दुनिया (namaste duniya)" );
}
else if( language === "chinese"
         || language === "Chinese"
         || language === "cn" ) {
  // Prints out Hello World in Chinese
  console.log( "你好，世界 (Ni hao, shijie)");
}
else {
  console.log( "I have no clue on what to output on your desired language" );
}
