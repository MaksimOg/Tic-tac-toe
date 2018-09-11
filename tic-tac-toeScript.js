
  var flag=1;
  var flag1,flag2,flag3=0;
  var arr=[];
  var arr2=[];
  var timeId;
  var q;
  
   $("#target10").click(function(){
    for(var i=1;i<10;i++){
	      $('#target'+i).removeClass('krestik');
	      $('#target'+i).removeClass('nolik');
	      $('#target'+i).html('');
		  $('#target'+i).css('background-color','#3dfff2');
	     }
		 arr=[];
		 flag=1;
		 flag3=0;
   });
   
    
  function proverka(str,){
   var arr1=[];
   if($("#target1").hasClass(str)){
    if($("#target2").hasClass(str)){
	 if($("#target3").hasClass(str)){
	  arr1[0]=1;
	  arr1[1]=2;
	  arr1[2]=3;
	  return arr1;
	  }
	 }
     else{
      if($("#target4").hasClass(str)){
	   if($("#target7").hasClass(str)){
	    arr1[0]=1;
	    arr1[1]=4;
	    arr1[2]=7;
	    return arr1;
	   }
	  }
	  else{
	   if($("#target5").hasClass(str)){
	    if($("#target9").hasClass(str)){
		 arr1[0]=1;
	     arr1[1]=5;
	     arr1[2]=9;
	     return arr1;
		}
	   }
	  }
	 }	 
	}
	else{
	 if($("#target2").hasClass(str)){
	  if($("#target5").hasClass(str)){
	   if($("#target8").hasClass(str)){
	    arr1[0]=2;
	    arr1[1]=5;
	    arr1[2]=8;
	    return arr1;
	   }
	  }
	 }
	 else{
	  if($("#target3").hasClass(str)){
	   if($("#target6").hasClass(str)){
	    if($("#target9").hasClass(str)){
		 arr1[0]=3;
	     arr1[1]=6;
	     arr1[2]=9;
	     return arr1;
		}
	   }
	   else{
	    if($("#target5").hasClass(str)){
		 if($("#target7").hasClass(str)){
		  arr1[0]=3;
	      arr1[1]=5;
	      arr1[2]=7;
	      return arr1;
		 }
		}
	   }
	  }
	  else{
	   if($("#target4").hasClass(str)){
	    if($("#target5").hasClass(str)){
		 if($("#target6").hasClass(str)){
		  arr1[0]=4;
	      arr1[1]=5;
	      arr1[2]=6;
	      return arr1;
		 }
		}
	   }
	   else{
	    if($("#target7").hasClass(str)){
		 if($("#target8").hasClass(str)){
		  if($("#target9").hasClass(str)){
		   arr1[0]=7;
	       arr1[1]=8;
	       arr1[2]=9;
	       return arr1;
		  }
		 }
		}
	   }
	  }
	 }
	}
   	
	 
  }
   
   function hod(str1,str2,str3,arr){
    var num,num2,num3;
	var num1=0;
	if(arr.length>0){ num1=arr[arr.length-1];}
	
	for(var i=1;i<10;i++){
	    if(i==arr[0]){continue;}
		if(i==arr[1]){continue;}
		if(i==arr[2]){continue;}
		if(i==arr[3]){continue;}
	    if($('#target'+i).hasClass(str3)) {num=i;}
	  }
	  if(arr.length==1){
	  if(arr[0]>num){
	   num2=num;
	   num3=arr[0];
	  }
	  else{
	   num3=num;
	   num2=arr[0];
	   }
	   }
	   else{
	   if(arr.length>0){
	  if(arr[0]>arr[1]){
	   num2=arr[1];
	   num3=arr[0];
	  }
	  else{
	   num3=arr[1];
	   num2=arr[0];
	   }
	   }}
	  
	  switch(arr.length){
	   case 0:{
	    switch(num){
		 case 5:{
		  $('#target'+1).html("<p>"+str1+"</p>");
	      $('#target'+1).addClass(str2);
		 }
		 break;
		 default:{
		  $('#target'+5).html("<p>"+str1+"</p>");
	      $('#target'+5).addClass(str2);
		 }
		 break;
		}
	   }
	   break;
	   case 1:{
	    switch(num2){
		 case 1:{
		  switch(num3){
		   case 2:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
	       case 3:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
	       case 4:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 6:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
	       case 7:{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
	       case 8:{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
		   case 9:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 2:{
		  switch(num3){
	       case 3:{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 4:{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		   case 5:{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
		   case 6:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
	       case 7:{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 8:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 9:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 3:{
		  switch(num3){
	       case 4:{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		   case 5:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 6:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
	       case 7:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
	       case 8:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 9:{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 4:{
		  switch(num3){
		   case 6:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 5:{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
	       case 7:{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 8:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 9:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 6: {
		  switch(num3){
	       case 7:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
	       case 8:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 9:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 7:{
		  switch(num3){
	       case 8:{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 9:{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 8:{
		  switch(num3){
		   case 9:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 5:{
		  switch(num3){
	       case 6:{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
	       case 7:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 8:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
	       break;
		   case 9:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
	     break;
		}
	   }
	   break;
	   case 2:{
	     switch(num2){
		 case 1:{
		  switch(num3){
		   case 2:if(num==7){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
	       case 3:if(num==8){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
	       case 4:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 6:if(num==8){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
	       case 7:if(num==6){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
	       case 8:if(num==6){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
		   case 9:if(num==8){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 2:{
		  switch(num3){
	       case 3:if(num==9){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
	       case 4:if(num==9){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 5:{
		    switch(num){
			 case 3:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
			 break;
			 case 7:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
			 break;
			 case 4:{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
			 break;
			 case 6:{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
			 break;
			 case 9:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
			 break;
			}
		   }
		   break;
		   case 6:if(num==7){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
	       case 7:if(num==9){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
	       case 8:if(num==3){$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 9:if(num==7){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 3:{
		  switch(num3){
	       case 4:if(num==9){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		   case 5:if(num==4){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
		   case 6:if(num==1){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 7:if(num==8){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
	       case 8:if(num==1){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		   case 9:if(num==4){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 4:{
		  switch(num3){
		   case 5:{
		    switch(num){
			 case 3:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
			 break;
			 case 7:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
			 break;
			 case 2:{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
			 break;
			 case 8:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
			 break;
			 case 9:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
			 break;
			}
		   }
		   break;
		   case 6:if(num==1){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 7:if(num==9){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
	       case 8:if(num==3){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 9:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 6: {
		  switch(num3){
	       case 7:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 8:if(num==1){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		   case 9:if(num==7){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 7:{
		  switch(num3){
	       case 8:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		   case 9:if(num==2){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
	       break;
		  }
		 }
		 break;
	     case 8:{
		  switch(num3){
		   case 9:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
		 break;
		 case 5:{
		  switch(num3){
		   case 6:if(num==7){$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 7:if(num==2){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
		   case 8:if(num==3){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 9:if(num==2){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
	       break;
		  }
		 }
	     break;
		}
	   }
	   break;
	   case 3:{
	    switch(num2){
		 case 1:{
		  switch(num3){
		   case 6:if(num==4){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
	       case 8:if(num==2){$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   else{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
		   case 9:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		   default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		  }
		 }
		 break;
		 case 2:{
		  switch(num3){
	       case 4:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 6:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 8:if(num==4){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
	       case 7:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 9:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
	       break;
		   default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
		  }
		 }
		 break;
	     case 3:{
		  switch(num3){
	       case 4:if(num==7){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   break;
	       case 7:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
	       case 8:if(num==4){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
		   default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
		  }
		 }
		 break;
	     case 4:{
		  switch(num3){
		   case 6:if(num==8){$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
	       case 8:if(num==6){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
		   case 9:if(num==1){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
	       break;
		   default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
		  }
		 }
		 break;
		 case 6: {
		  switch(num3){
	       case 7:if(num==2){$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   else{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   break;
	       case 8:if(num==4){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
		   default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
		  }
		 }
		 break;
		 case 5:{
		  switch(num){
	       case 2:{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
	       case 3:{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		   case 4:{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
	       case 6:{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
	       case 7:{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		   case 8:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
	       break;
		   case 9:{$('#target'+2).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
	       break;
		  }
		 }
	     break;
		 default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
		}
	   }
	  }
	  
	return num;
   }
   
   function hod1(str1,str2,str3,arr){
    var num,num2,num3;
	var num1=0;
	if(arr.length>0){ num1=arr[arr.length-1];}
	for(var i=1;i<10;i++){
	    if(i==arr[0]){continue;}
		if(i==arr[1]){continue;}
		if(i==arr[2]){continue;}
		if(i==arr[3]){continue;}
	    if($('#target'+i).hasClass(str3)) {num=i;arr.push(num)}
	  }
	  
	  
	  
	
	switch(arr.length){
	 case 0:{
	  $("#target5").html("<p>"+str1+"</p>");
	  $("#target5").addClass(str2);
	 }
	 case 1:{
	  switch(num){
	   case 1:{$("#target"+2).html("<p>"+str1+"</p>");$("#target"+2).addClass(str2);}
	   break;
	   case 3:{$("#target"+2).html("<p>"+str1+"</p>");$("#target"+2).addClass(str2);}
	   break;
	   case 7:{$("#target"+4).html("<p>"+str1+"</p>");$("#target"+4).addClass(str2);}
	   break;
	   case 9:{$("#target"+6).html("<p>"+str1+"</p>");$("#target"+6).addClass(str2);}
	   break;
	   case 2:{$("#target"+3).html("<p>"+str1+"</p>");$("#target"+3).addClass(str2);}
	   break;
	   case 4:{$("#target"+1).html("<p>"+str1+"</p>");$("#target"+1).addClass(str2);}
	   break;
	   case 6:{$("#target"+3).html("<p>"+str1+"</p>");$("#target"+3).addClass(str2);}
	   break;
	   case 8:{$("#target"+7).html("<p>"+str1+"</p>");$("#target"+7).addClass(str2);}
	   break;
	  }
	 }
	 break;
	 case 2:{
	  switch(arr[0]){
		 case 1:if(arr[1]==8){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
		 case 3:if(arr[1]==8){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   break;
		 case 7:if(arr[1]==6){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   break;
		 case 9:if(arr[1]==4){$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   else{$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   break;
		 case 2:if(arr[1]==7){$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		 case 4:if(arr[1]==9){$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		 case 6:if(arr[1]==7){$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   else{$('#target'+7).html("<p>"+str1+"</p>");$('#target'+7).addClass(str2);}
		   break;
		 case 8:if(arr[1]==3){$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;    
	   }
	 }
	 break;
	 case 3:{
	  switch(arr[0]){
		 case 1:if(num==3){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		 case 3:if(num==1){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		 case 7:if(num==1){$('#target'+8).html("<p>"+str1+"</p>");$('#target'+8).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		 case 9:if(num==3){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+3).html("<p>"+str1+"</p>");$('#target'+3).addClass(str2);}
		   break;
		 case 2:if(num==1){$('#target'+6).html("<p>"+str1+"</p>");$('#target'+6).addClass(str2);}
		   else{$('#target'+1).html("<p>"+str1+"</p>");$('#target'+1).addClass(str2);}
		   break;
		 case 4:if(num==9){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		 case 6:if(num==9){$('#target'+2).html("<p>"+str1+"</p>");$('#target'+2).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;
		 case 8:if(num==9){$('#target'+4).html("<p>"+str1+"</p>");$('#target'+4).addClass(str2);}
		   else{$('#target'+9).html("<p>"+str1+"</p>");$('#target'+9).addClass(str2);}
		   break;    
	   }
	 }
	 break;
	 default:{
		    for(var i=9;i>0;i--){
			 if($('#target'+i).hasClass(str3)) {continue;}
			 if($('#target'+i).hasClass(str2)) {continue;}
			 $('#target'+i).html("<p>"+str1+"</p>");
			 $('#target'+i).addClass(str2);
			 break;
	        }
		   }
		   break;
	 
	}
	return arr;
   }
   
   $("input").click(function(){
    if($(this).val()=='1'){
     $('#rad3').removeAttr('disabled');
	 $('#rad4').removeAttr('disabled');
	 flag1=0;
	}
	  if($(this).val()=='2'){
     $('#rad3').attr('disabled','disabled');
	 $('#rad4').attr('disabled','disabled');
	 flag1=1;
	}
	if($(this).val()=='3'){
	 flag2=0;
	}
	if($(this).val()=='4'){
	 flag2=1;
	}
   });
   
   $('div.yacheika').click(function(){
   if(!$(this).hasClass("krestik")&&!$(this).hasClass("nolik"))
   {
    if(flag1==1){
      if(flag==1){
       $(this).html("<p>x</p>");
	   $(this).addClass("krestik");
	   flag=0;
	  }
	  else{
	   $(this).html("<p>o</p>");
	   $(this).addClass("nolik");
	   flag=1;
	  }
	  if(arr2=proverka('krestik')){
	     $('#target'+arr2[0]).css('background-color','green');
		 $('#target'+arr2[1]).css('background-color','green');
		 $('#target'+arr2[2]).css('background-color','green');
		timeId=setTimeout(function qqqq(){
	     alert("выйграл крестик");
	     for(var i=1;i<10;i++){
	      $('#target'+i).removeClass('krestik');
	      $('#target'+i).removeClass('nolik');
	      $('#target'+i).html('');
		  $('#target'+i).css('background-color','#3dfff2');
	     }
		},1000);
		 
	   flag3=0;
	  }
	  if(arr2=proverka('nolik')){
	    $('#target'+arr2[0]).css('background-color','red');
		 $('#target'+arr2[1]).css('background-color','red');
		 $('#target'+arr2[2]).css('background-color','red');
		timeId=setTimeout(function qqqq(){
	     alert("выйграл нолик");
		  for(var i=1;i<10;i++){
	      $('#target'+i).removeClass('krestik');
	      $('#target'+i).removeClass('nolik');
	      $('#target'+i).html('');
		  $('#target'+i).css('background-color','#3dfff2');
	     }
		},1000);
	   flag3=0;
	    }
	 flag3++;
	 if(flag3==9){
	  alert("победила дружба");
	   for(var i=1;i<10;i++){
	    $('#target'+i).removeClass('krestik');
	    $('#target'+i).removeClass('nolik');
	    $('#target'+i).html('');
		arr=[];
		flag3=0;
	   }
	 }
	}
	if(flag1==0){
	 if(flag2==0){
	  if(flag==1){
	   $(this).html("<p>x</p>");
	   $(this).addClass("krestik");
	   timeId=setTimeout(function qq(){
	    arr.push(hod('o','nolik','krestik',arr));
	   },700);
	  }
	  else{
	   $(this).html("<p>x</p>");
	   $(this).addClass("krestik");
	   timeId=setTimeout(function qq(){
	    arr=hod1('o','nolik','krestik',arr);
	   },700);
	 }
	 }
	 else{
	  if(flag==1){
	  $(this).html("<p>o</p>");
	  $(this).addClass("nolik");
	  timeId=setTimeout(function qq(){
	   arr.push(hod('x','krestik','nolik',arr));
      },700);	 
	 }
	  else{
	   $(this).html("<p>o</p>");
	   $(this).addClass("nolik");
	    timeId=setTimeout(function qq(){
	     arr=hod1('x','krestik','nolik',arr);
	   },700);
	  }
	 }
	 
	 flag3++;
	}
   }
  });
  
  $('div.yacheika').mouseenter(function(){
   if(arr2=proverka('krestik')){
	   $('#target'+arr2[0]).css('background-color','green');
	   $('#target'+arr2[1]).css('background-color','green');
	   $('#target'+arr2[2]).css('background-color','green');
	   timeId=setTimeout(function qqqq(){
	     alert("выйграл крестик");
	     for(var i=1;i<10;i++){
	      $('#target'+i).removeClass('krestik');
	      $('#target'+i).removeClass('nolik');
	      $('#target'+i).html('');
		  $('#target'+i).css('background-color','#3dfff2');
	     }
		 arr=[];
		 if(flag==1){
	      if(flag2==0){
	       timeId=setTimeout(function qq(){
	        arr=hod1('o','nolik','krestik',arr);
	       },700);
	      }
		  else{
		   $(this).addClass("nolik");
	       timeId=setTimeout(function qq(){
	         arr=hod1('x','krestik','nolik',arr);
	       },700);
		  }
	      flag=0;
	     }
	     else{
	      flag=1;}
		 },1500);
	     flag3=0;
	  }
	  
	  if(arr2=proverka('nolik')){
	   $('#target'+arr2[0]).css('background-color','red');
	   $('#target'+arr2[1]).css('background-color','red');
	   $('#target'+arr2[2]).css('background-color','red');
	   timeId=setTimeout(function qqqq(){
	     alert("выйграл нолик");
		 for(var i=1;i<10;i++){
	      $('#target'+i).removeClass('krestik');
	      $('#target'+i).removeClass('nolik');
	      $('#target'+i).html('');
		  $('#target'+i).css('background-color','#3dfff2');
	     }
		 arr=[];
		 if(flag==1){
	      if(flag2==0){
	       timeId=setTimeout(function qq(){
	        arr=hod1('o','nolik','krestik',arr);
	       },700);
	      }
		  else{
		   $(this).addClass("nolik");
	       timeId=setTimeout(function qq(){
	        arr=hod1('x','krestik','nolik',arr);
	       },700);
		  }
	      flag=0;
	     }
	     else{
	      flag=1;}
		 },1500);
	     flag3=0;
	    }
		
		if(flag==0){
		 q=4;
		}
		else{
		 q=5;
		}
		
		if(flag3==q){
	     timeId=setTimeout(function qqqq(){
	      alert("победила дружба");
	      for(var i=1;i<10;i++){
	       $('#target'+i).removeClass('krestik');
	       $('#target'+i).removeClass('nolik');
	       $('#target'+i).html('');
	      }
		  arr=[];
		  if(flag==1){
	       if(flag2==0){
	        timeId=setTimeout(function qq(){
	         arr=hod1('o','nolik','krestik',arr);
	        },700);
	       }
		   else{
		    $(this).addClass("nolik");
	        timeId=setTimeout(function qq(){
	         arr=hod1('x','krestik','nolik',arr);
	        },700);
		   }
	       flag=0;
	      }
	      else{
	       flag=1;}
		 },1000);
	     flag3=0;
	 }
   });