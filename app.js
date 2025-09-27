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
document.writeln("<br>")
// question 15
var arry=[1,2,3,4,5,5,6,7,8,9,5,10,11,12,13,14,5,15,16,17,18,19,20]
var given= 5;
var count= 0;
for(var i=0; i<arry.length; i++){
   if(arry[i] === given){
    count++
   }
  }
  document.writeln(count)
document.writeln("<br>")
// question 16
var arry=[1,3,5,5,7,9,5,10,11,12,13,14,5,15,16,17,18,19,20]
var even= 0;
for(var i=0; i<arry.length; i++){
  if(arry[i] % 2 ===0){
   document.writeln("First even number " + arry[i])
   break
  }
}
document.writeln("<br>")
// question 17
var arry=[1,3,5,5,7,9,5,10,11,12,13,14,5,15,16,17,18,19,21]
for(var i=arry.length -1; i>=0; i--){
  if(arry[i] % 2 !== 0){
    document.writeln("Last odd number " + arry[i])
    break;
  }
}
document.writeln("<br>")
// question 18
var arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var number= 5;
for(var i=0; i<arry.length; i++){
  if(arry[i] == number){
   document.writeln("Number Found")
   break;
  }
}
document.writeln("<br>")
// question 19
var arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var given= 5;
for(var i=0; i<arry.length; i++){
   if(arry[i] == given){
    document.write(i)
   }
}
document.writeln("<br>")
// question 20
var arr =[1,64,8,59,53,3,7,37,53,24,5,9,3,11]
var count= 10;
for(var i=0; i<arr.length; i++){
  if(arr[i] < count){
    document.write("This number are smollest 10 = ",arr[i], "<br>")
  }
}
document.writeln("<br>")
// question 21
var arr=[3,8,45,85,36,20,4,63,26,92,38] 
var arr2=[];
for(var i=0; i<=arr.length; i++){
  if(arr[i] % 2 ===0){
   arr2.push(arr[i])
}
}
document.write("Even number in new arry " , arr2)

document.writeln("<br>")
// question 22
var arr=[1,3,5,6,8,44,43,75,83,18,23,52,81]
var arr2=[];
for(var i=0; i<arr.length; i++){
   if(arr[i] % 2 !==0)[
    arr2.push(arr[i])
   ]
}
document.write("Odd number in new arry  ", arr2)

document.writeln("<br>")
// question 23
var arr=[1,3,5,6,8,44,43,75,83,18,23,52,81]
var arr2=[];
for(var i=0; i<arr.length; i++){
   arr2.push(arr[i] + 1)
}
document.write("Addition of 1 in new arry " , arr2)

document.writeln("<br>")
// question 24
var arr=[2,3,5]
var arr2=[];
for(var i=0; i<arr.length; i++){
 arr2.push(arr[i] * 5)
}
document.write("create a new arry multipy by 5 " , arr2)

document.writeln("<br>")
// question 25
var arr=[1,8,3,4,5,6,7,8,9,10]
for(var i=0; i<arr.length; i++){
  if(arr[i] % 2 ===0){
    document.write("First Even number in Arry " , arr[i])
  break
  }
}

document.writeln("<br>")
// question 26
var arr=[1,2,3,4,5]
var arr2=[];
for(var i=0; i<arr.length; i++){
  arr2.push(arr[i])
}
document.write("Old arry push in new arry " , arr2)

document.write("<br>")
// question 27
var arr=[1,2,3,4]
var arr2=[5,6,7,8]
var arr3=[];
for(var i=0; i<arr.length; i++){
  arr3[i] = arr[i]
}
for(var j=0; j<arr2.length; j++){
  arr3[arr.length + j] =
  arr2[j] 
}
document.write(arr3)

document.write("<br>")
// question 28
var arr=[1,2,3,4,5,6,7,8,9]
var total = 0;
for(var i=0; i<arr.length; i++){
  if(arr[i] % 2 ===0 ){
   total += arr[i]
  }

}
document.write(total)







