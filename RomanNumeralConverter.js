function convertone(nu,power){
	var char=[["I","V","X"],["X","L","C"],["C","D","M"],["M","V","L"]];	
    switch (true) {
      case (0<=nu && nu<4) || (5<=nu && nu<9) :
			return char[power][1].repeat(nu/5) + char[power][0].repeat(nu%5);
      case nu==4 || nu==9:
			return char[power][0] + char[power][nu%4+1];
	}
}

function convert(num) {
 var result=[];
 var i=0;
 while (num>0){
 	mod=parseInt(num%10);
 	num=parseInt(num/10);
 	result.unshift(convertone(mod,i));
    i+=1;
 } 
 return result.join('');  
}

convert(36);
