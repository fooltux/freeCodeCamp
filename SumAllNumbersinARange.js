function sumAll(arr) {
  var newarr=new Array();
  for (i=Math.min.apply(null,arr);i<=Math.max.apply(null,arr);i++){
    newarr.push(i);
  
  }
  
 var he=newarr.reduce( function(previousValue, currentValue){
    return previousValue + currentValue;
  } );
  return he;
}

sumAll([1, 4]);
