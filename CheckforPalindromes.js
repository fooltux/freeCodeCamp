function palindrome(str) {
  
  var a=str.toLowerCase().replace(/\W|_/g,'');
  var newstr=a.split('').reverse().join('');
  return newstr==a;
//if (newstr == a){
//      return true;
//  }
// return false;
    
}

palindrome("eye");
