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
document.writeln("<br>")
// question 2
var arry=[1,2,3,4,5,6,7,8,9]
for(var i=arry.length -1; i>=0; i--){
  document.writeln(arry[i])
}
document.writeln("<br>")
// question 3
var arry=[1,2,3,4,5,6,7,8,9]
var sum= 0;
for(var i=0; i<arry.length; i++){
  sum = sum + arry[i]
}
document.writeln("Total Sum = " + sum)

document.writeln("<br>")
// question 4
var arry=[1,2,3,4,5,6,7,8,9]
var sum=0;
for(i=0; i<arry.length; i++){
  sum = sum + arry[i]
}
document.writeln("Average " + sum / arry.length)

document.writeln("<br>")
// question 5
var arry=[1,2,3,4,5,6,7,8,9]
var count=0;
for(var i=0; arry[i] !==undefined; i++){
  count++ 
}
document.writeln("Count " + count +"<br>")

document.writeln("<br>")
// question 6 
for(var i=2; i<=30; i+=2){
    document.writeln(i)
}
document.writeln("<br>")
// question 7 
for(var i=2; i<=30; i++){
   if(i % 2 !==0) {
   document.writeln(i)
   }
}
document.writeln("<br>")
// question 8
var arry=[1,2,3,4,5,6,7,8,9]
for(var i=0; i<arry.length; i++){
  document.writeln(arry[i] * 2)
}
document.writeln("<br>")
// question 9
var arry=[1,2,3,4,5,6,7,8,9]
for(var i=0; i<arry.length; i++){
  document.writeln(arry[i] * arry[i])
}
document.writeln("<br>")
// question 10
var arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for(var i=0; i<arry.length; i++){
  if(arry[i] > 5 ){
    document.writeln(arry[i])
  }
}
document.writeln("<br>")
// question 11
var arry=[5,23,45,64,63,73,94]
var big= arry[0];
for(var i=1; i<arry.length; i++){
  if(arry[i]>big){
   big = arry[i];
  }
} 
document.writeln("Bigest Number " + big)
document.writeln("<br>")
// question 12
var arry=[23,45,76,89,42,6,87,53]
var small= arry[0];
for(var i=0; i<arry.length; i++){
  if(arry[i]<small){
    small = arry[i]
  }
}
document.writeln(" Smollest Number " + small)
document.writeln("<br>")
// question 13
var arry=[23,45,76,89,42,6,87,53]
var big= arry[0];
var small= arry[0];
for(var i=0; i<=arry.length; i++){

  if(arry[i]>big){
    big = arry[i];
  }
  if (arry[i]<small){
    small = arry[i]
  }
}
document.writeln("Bigest " + big ,  " Smollest " +  small)
document.writeln("<br>")
// question 14
var arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var even= 0;
var odd= 0;

for(var i=0; i<arry.length; i++){
  if(arry[i] % 2 ===0){
   even++
  }
}
for(var i=0; i<arry.length; i++){
if(arry[i] % 2 !==0){
  odd++
}
}
document.writeln( "Even count " + even + "<br>")
document.writeln("Odd count " + odd + "<br>")












































