for (var i=1; i<=10;  i++){
    document.writeln("Number: " , i , "<br>");
}
for(i=5; i<=15; i++){
    document.writeln(i , "<br>")
}
for (i=10; i>=0; i--){
    document.writeln(i , "<br>")

}
for(i=0; i<=10; i++){
    document.writeln(i , "<br>")
}
for(i=10; i>=1; i--){
    document.writeln(i , "<br>")
 }

// for (i = 1; i <= 5; i++) {         
//     for (j = 1; j <= i; j++) {     
//         document.write("*");
//     }
//     document.write("<br>");       
// }
// for(var i = 5; i>=1; i--){
//     for(j=1; j<=i; j++){
//         document.writeln("*")
//     }
//     document.writeln("<br>")
// }

// for(i=1; i<=5; i++){
//    for(j=1; j<=i-1; j++){
//     document.writeln("&nbsp")
//    }
//    for(k=1; k <= (2*i-1); k++){
//     document.writeln("*")
//    }
//   document.writeln("<br>")
// }
// question 1
var arry=[1,2,3,4,5,6,7,8,9]
for(var i=0; i<arry.length; i++){
  document.writeln(arry[i])
}
// question 2
var arry=[1,2,3,4,5,6,7,8,9]
for(var i=arry.length -1; i>=0; i--){
  document.writeln(arry[i])
}
// question 3
var arry=[1,2,3,4,5,6,7,8,9]
var sum= 0;
for(var i=0; i<arry.length; i++){
  sum = sum + arry[i]
}
document.writeln("Total Sum = " + sum)
// question 4
var arry=[1,2,3,4,5,6,7,8,9]
var sum=0;
for(i=0; i<arry.length; i++){
  sum = sum + arry[i]
}
document.writeln("Average " + sum / arry.length)
// question 5
var arry=[1,2,3,4,5,6,7,8,9]
var count=0;
for(var i=0; arry[i] !==undefined; i++){
  count++ 
}
document.writeln("Count " + count +"<br>")
// question 6 
for(var i=2; i<=30; i+=2){
    document.writeln( i , "<br>")
}
// question 7 
for(var i=2; i<=30; i++){
   if(i % 2 !==0) {
   document.writeln(i)
   }
}
































































