var images=["https://lh3.googleusercontent.com/proxy/scLu3gK_512IFNr8hm0J32BROZFD8Q-PLkpzn7sHs4W-QwCzq1q-vE1I8Kw-8U4yyLnVZxACAD7m6XEAiIs-SfMjsIc92lFjxnE_KxgIwhHsli1a548_UkrrzOMEGGogAMYV8K5Nbq3YgeDccszT", "https://s.clipartkey.com/mpngs/s/64-649065_indian-woman-indian-women-clip-art.png", "https://previews.123rf.com/images/robuart/robuart1710/robuart171000041/87289071-indian-girl-with-long-black-hair.jpg", "https://c1.peakpx.com/wallpaper/827/762/362/cat-resting-place-animal-portrait-wallpaper.jpg", "https://cdn1.vectorstock.com/i/1000x1000/83/20/girl-wearing-sari-dress-national-costume-india-vector-16108320.jpg", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6948/happy-family-clipart-md.png"];
var family_names=["Uday", "Latha", "Anvika", "Devenci", "Medha", "family book cover"];
var i=0;
function next_pic(){
  document.getElementById("family_pic").src= images[i];
  document.getElementById("names").innerHTML= family_names[i];
  i++;
  if (i>5){
      i=0;
  }
}
