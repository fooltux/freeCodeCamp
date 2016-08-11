function rot13(str) { 
  var newstr='';// LBH QVQ VG!
  for(i=0;i<str.length;i++){
    num=str.charCodeAt(i);
    if(num>=65&&num<=77){
        num+=13;
    } 
    else if(num>=78 && num<=90){
      num-=13;
    } 
    newstr=newstr.concat(String.fromCharCode(num));
  } 
 // alert(newstr);

  return newstr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

