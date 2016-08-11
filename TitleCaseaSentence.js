function titleCase(str) {
  arr=str.toLowerCase().split(" ");
  var temparr=new Array();
  for(i=0 ;i<arr.length;i++){
    temparr.push(arr[i].slice(0,1).toUpperCase()+arr[i].slice(1));
  }
  str=temparr.join(" ");
    return str;
}

titleCase("I'm a little tea pot");
