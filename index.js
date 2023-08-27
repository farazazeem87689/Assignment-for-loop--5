"use strict";
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop
// let sum:number=0;
// for (var i=0;  i<=10; i++) 
// {
//     if(i%2==0)
//     {
//        sum=sum +i;
// }
// }
// console.log("The Sum of calculate value is "+sum);
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// let even:number[]=[2,56,34,36,98,67,5,9]
// let sum:number=0;
// let list:number[]=[]
// for ( let a=1; a<=100; a++)
// {
// if(a%2==0)
// {
// sum= sum+a;
// list.push(a)
// }
// }
// console.log("Total sum of even number",sum,list)
// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones?
// let odd:number[]=[4,3,6,7,9,13,17]
// let sum:number=0;
// let list:number[]=[];
// for (let a=1; a<=20; a++)
// {
// if(a%2 !=0)
// {
//     sum=sum+a
//     list.push(a)
// }
// }
// console.log("Sum of Odd Number",sum ,list )
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area
// let pie:number=3.14;
// let Area:number=0;
// function AreaOfCircle(radius:number)
// {
//     Area=pie* (radius**2)
//     return Area ;
// }
// AreaOfCircle(10)
// console.log( "Area of Circle:",Area);
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// let grade:number[]=[67,89,45,23,60,89,34,49,100]
// for ( let a=grade.length-1; a>0; a--)
// {
//     if (grade[a]<50)
//     {
//         grade.splice(a,1)
//     }
// }
// console.log("list of failing Grade Student " ,grade)
function largestNumber(array) {
    var largestvalue = array[0];
    for (let a = 1; a < array.length; a++) {
        if (array[a] > largestvalue) {
            largestvalue = array[a];
        }
        console.log(largestvalue);
    }
    return largestvalue;
}
let result = largestNumber([25, 45]);
