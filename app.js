// for (var i=1; i<=10;  i++){
//     document.writeln("Number: " , i , "<br>");
// }
// for(i=5; i<=15; i++){
//     document.writeln(i , "<br>")
// }
// for (i=10; i>=0; i--){
//     document.writeln(i , "<br>")

// }
// for(var i=2; i<=30; i+=2){
//     document.writeln(i , "<br>")
// }
var detail=("Zeeshan Abbasi")
console.log(detail)
var name1=prompt("Enter number")
if(name1>10){
   document.writeln("greater then 10")
}
else{
    document.writeln("less then 10")
}
var marks=prompt("Enter number of marks")
if(marks>=80){
   document.writeln("A1 Grade")
}
else if(marks>=70){
    document.writeln("A Grade")
}
else if(marks>=60){
    document.writeln("B Grade")
}
else if(marks>=50){
    document.writeln("C Grade")
}
else if(marks>=40){
    document.writeln("D Grade")
}
else if(marks>=33){
    document.writeln("E Grade")
}
else {
    document.writeln("Fail") 
}
var weeks=+prompt("Enter Day Number ( 1 from 7 )")
switch (weeks) {
    case 1: 
     document.writeln("Today Monday")   
        break;
    case 2: 
     document.writeln("Today Tuesday")   
        break;
    case 3: 
     document.writeln("Today Wednesday")
        break;
    case 4: 
     document.writeln("Today Thuresday")  
        break;
    case 5: 
     document.writeln("Today Friday")   
        break;
    case 6: 
     document.writeln("Today Saturday")   
        break;
    case 7: 
     document.writeln("Today Sunday")   
        break;
        
    default:
        document.writeln("Invalid Day Today")
        break;
}
var months=+prompt("Enter Number For Month Name ( 1 from 12)")
switch (months) {
    case 1:
        document.writeln("January")
        break;
     case 2:
        document.writeln("Febrary")
        break; 
    case 3:
        document.writeln("March")
        break;
    case 4:
        document.writeln("April")
        break;
    case 5:
        document.writeln("May")
        break; 
    case 6:
        document.writeln("June")
        break; 
    case 7:
        document.writeln("July")
        break; 
    case 8:
        document.writeln("August")
        break; 
    case 9:
        document.writeln("September")
        break; 
    case 10:
        document.writeln("Octuber")
        break; 
    case 11:
        document.writeln("November")
        break;
     case 12:
        document.writeln("December")
        break;
    default:
        document.writeln("Invalid Month")
        break;
}
var grade=prompt("Enter Grade In Capital later ")
switch (grade) {
    case "A":
        document.writeln("Excellent")
     break;  
    case "B":
        document.writeln("Good")
     break;   
    case "C":
        document.writeln("Average")
     break;   
    case "D":
        document.writeln("Poor")
     break;
    case "F":
        document.writeln("Fail")
     break;
    default:
        document.writeln("Invaild Grade")
        break;
}
var digit=+prompt("Enter Singal Digit ")
switch (digit) {
    case 0:
        document.writeln("Zero")
        break;
    case 1:
        document.writeln("One")
        break;
    case 2:
        document.writeln("Two")
        break;
    case 3:
        document.writeln("Three")
        break;
    case 4:
        document.writeln("Four")
        break;
    case 5:
        document.writeln("Five")
        break;
    case 6:
        document.writeln("Six")
        break;
    case 7:
        document.writeln("Seven")
        break;
    case 8:
        document.writeln("Eight")
        break;
    case 9:
        document.writeln("Nine")
        break;
    default:
        document.writeln("Not a singal number")
        break;
}



