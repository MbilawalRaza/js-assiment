//chap 6
// question 1
//task #1
// var a = 10;
// console.log( ++a  )

// task 2

//   var a = 11; 
//   a++
//  console.log(a)


// task 3
// var a =11;
// ++a
// console.log(--a )

//task 4
// var a=11
// a--
// console.log(a--);

// queation no 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//qustion no 3
// var name = prompt("Please enter your name:");

// var a = name ? console.log("Hello, " + name + "! Welcome.") : console.log("Hello! Welcome.");
// console.log(a);
//question no 5
//   
//  var userInput=prompt(" enter a number")

//  console.log(`${userInput} x 1 = ${userInput*1}`);
//  console.log(`${userInput} x 2 = ${userInput*2}`);
//  console.log(`${userInput} x 3 = ${userInput*3}`);
//  console.log(`${userInput} x 4 = ${userInput*4}`);
//  console.log(`${userInput} x 5 = ${userInput*5}`);
//  console.log(`${userInput} x 6 = ${userInput*6}`);
//  console.log(`${userInput} x 7 = ${userInput*7}`);
//  console.log(`${userInput} x 8 = ${userInput*8}`);
//  console.log(`${userInput} x 9 = ${userInput*9}`);
//  console.log(`${userInput} x 10 = ${userInput*10}`);
// question no 6
// let engMarks = parseFloat(prompt("Enter you'r English marks: "))
// let urduMarks = parseFloat(prompt("Enter you'r Urdu marks: "))
// let mathsMarks = parseFloat(prompt("Enter you'r Maths marks: "))

// let totalMarks = 100

// function generatePercentage(oMark) {
//     return ( oMark / totalMarks ) * 100
// }

// const subjects = [
//     {
//         subject: "Urdu",
//         totalMarks: totalMarks,
//         obtainedMarks: urduMarks,
//         percentage: generatePercentage(urduMarks)
//     },
//     {
//         subject: "English",
//         totalMarks: totalMarks,
//         obtainedMarks: engMarks,
//         percentage: generatePercentage(engMarks)
//     },
//     {
//         subject: "Maths",
//         totalMarks: totalMarks,
//         obtainedMarks: mathsMarks,
//         percentage: generatePercentage(mathsMarks)
//     },
// ]

// const average = arr => arr.reduce((a, b) => a + b) / arr.length;

// window.onload = () => {
//     const table = document.createElement('table');
//     table.setAttribute('border', '2');

//     table.innerHTML = `
//         <tr>
//             <th>Subject</th>
//             <th>Total marks</th>
//             <th>obtained marks</th>
//             <th>Percentage</th> 
//         </tr>
//     `

//     const percentageArr = []

//     subjects.forEach(item => {
//         const template = `
//             <tr>
//                 <th>${item.subject}</th>
//                 <td>${item.totalMarks}</td>
//                 <td>${item.obtainedMarks}</td>
//                 <td>${item.percentage}%</td>
//             </tr>
//         `
//         percentageArr.push(item.percentage)
//         table.innerHTML += template;
//     })

//     const total = `
//         <tr>
//             <th>Totals</th>
//             <td>${subjects[0].totalMarks + subjects[1].totalMarks + subjects[2].totalMarks}</td>
//             <td>${subjects[0].obtainedMarks + subjects[1].obtainedMarks + subjects[2].obtainedMarks}</td>
//             <td>${Math.floor(average(percentageArr))}%</td>
//         </tr>
//     `

//     table.innerHTML += total

//     document.body.appendChild(table)
// }


// var subject1=+prompt("enter a  eng marks" );
// var subject2=+prompt("enter a  urdu marks" );
// var subject3=+prompt("enter a math marks " );

// var totalmarks=100;
// var table=  document.getElementById('table')
// table.innerHTML=`
// <table>
//     <tr>
//         <th>subject</th>
//         <th>totalmark</th>
//         <th>obtainedmark</th>
//         <th>percentage</th>

//     </tr>
//     <tr>
//         <th>eng</th>
//         <td> ${totalmarks}</td>
//         <td> ${subject1}</td>
//         <td> ${subject1 }%</td>
//          <sub><td></td></sub> 

//     </tr>
//     <tr>
//         <th>urdu</th>
//         <td>${totalmarks}</td>
//         <td>${subject2}</td>
//         <td> ${subject2}%</td>
//         <sub><td></td></sub>
//     </tr>
//     <tr>
//         <th>math</th>
//         <td>${totalmarks}</td> 
//         <td>${subject3}</td>
//         <td>${subject3}%</td>

//     </tr>
//     <tr>
//     <th></th>
//     <th>300</th>
//     <th> ${ subject1+subject2+subject3} </th>
//     
//     <th>${Math.floor((parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3)) / (3 * totalmarks) * 100)}%</th>

// </tr>
// </table>

//`

// chap 9 
// question 1
// var userInput = prompt( " enter your city ")
// if (userInput=== "karachi") {
//   console.log(" welcome to the city of light")
// }
// else  {
//   console.log (userInput+"your city is famous")
// }

//question 2
// var gender=prompt("what is your gender")
// if(gender==='male') {
//     console.log("welcome,sir!")
// }
// else if(gender==='female'){
//     console.log("welcome mam");
// }
// else{"gender not conformed"}

//question 3

// var signalColor=prompt("enter a signal color")
// if (signalColor==="red") {
//     console.log("must stop")
// }
// else if(signalColor==="yellow") {
//     console.log("redy to move")
// }

// else if(signalColor==="green") {
//     console.log("move");
// }
// else ("color not valid");

//question no 4
// var userInput=+prompt("remaning fuel in car ")
// if (userInput < 0.25){
//     console.log("please refill the fuel in your car "); 
// }
// else if (userInput >= 0.25 ) {
//     console.log("your fuel level is normal");
// }
// else { console.log("Unexpected condition."); }

//question no 5
// var a=4;
//a// if (++a===5){
//     alert( )
// }
//b//

// var b=82;
// if(b++===83){
//     alert("given condation for variblr b is true")
// }
//c//
// var c=12;
// if(c++ === 13){
//     alert("condition 1 is true")

// }if (c===13){
//     alert("condition 2 is true")
// }
// if (c===14){
//     alert("condition 3 is true")
// }
// if (c===14){
//     alert("condition 4  is true")
// }

//d//
// var materialCost =20000
// var labourCost=2000
// var totalCost= materialCost+labourCost;
// if( totalCost===labourCost+materialCost){
//     alert("")
// }
//e//
// if (true){
// alert(false);
// }if (false){
//     alert("false");
//     }
//f//
// if("car" <"cat");{
//     alert("car is smaller than cat")
// }
//question no 6
// var obtainedMark=prompt("enter a obtained mark")
// var totalMarks =300
// var percentage = Math.floor((parseFloat(obtainedMark)) / (1 * totalMarks) * 100)
// var table=document.getElementById("table")
// var  box2 = document.getElementById('box2')
// function markSheet(){
//     table.innerHTML=`
// <table>
// <tr>
//  <th>"total marks"</th>
//  <th> ${totalMarks}</th>
//   </tr>

//  <tr>
//  <th>marks obtained</th>
//  <th> ${obtainedMark}</th>

//   </tr>
//  <tr>



//    <th>remarks</th>
//    <th></th>
//     </tr>
// </table>
//  `
//  if (percentage >= 90 +" %") {
//     console.log("work1");
//     box2.innerHTML = `
//         <h3>Congratulations!! You sccore is good</h3><br>
//         <h3>Percentage: ${percentage}</h3>
//         <h3>grade:A1</h3>
//     `;
// } else if (percentage >= 70 +" %") {
//     console.log("work2");
//     box2.innerHTML = `
//         <h4>Congratulations!! You're doing better   </h4><br>
//         <h4>Percentage: ${percentage}</h4>
//         <h3>grade:A</h3>
//     `;
// } else {
//     console.log("work3");
//     console.log(percentage +" %"); 
//     box2.innerHTML = `
//         <div>
//             <h4>Congratulations!! You're need to improving</h4><br>

//             <h3>grade:B</h3>
//         </div>
//     `;
// }

// }



// markSheet()


// qusetion no 7


// var guess=prompt("enter a number");
// var secretNumber = Math.floor(Math.random()*10)


// if (guess === secretNumber) {
//     console.log("Bingo Correct answer");
// } else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
//     console.log(" close  to the correct answer");
// } else {
//     console.log("Sorry, incorrect guess. The secret number was: " + secretNumber);
// }
// question 8


// var UserInput=prompt("enter a num divisible by 3")
// if (UserInput%3===0){
//     console.log("number is  divisible by 3")
// }
// else{
//     console("number is not divisible by 3")
// }
// var UserInput=prompt("enter a odd or even")

//question no 9
// if (UserInput%2===0){
//     console.log("number is even")
// }
// else{
//     console.log(" number is odd")
// }
//question no 10
// var userInput = prompt("enter a temprature");
// if (userInput >= 40) {;
//     console.log("its to hot out side");
// } else if(userInput >= 30) {;
//     console.log(" wheather today is normal");
// } else if(userInput >= 20){;
//     console.log("today whaether is cool");
// } else if(userInput >= 10) {;
//     console.log("omg today ehaether is so cool");

// } else {
//     console.log("Unexpected answer.");
// }
// question no 11
// var userValue1=prompt("enter a 1 number")
// var userValue2=prompt("enter a  2 number")
// var operationValue=prompt("enter a operation value +,-,/.*")
// if ( operationValue==="+"){
//     console.log(Number(userValue1)+Number(userValue2))
// }
// else if ( operationValue==="-"){
//     console.log((userValue1)-(userValue2))
// }
// else if ( operationValue==="*"){
//     console.log((userValue1)*(userValue2))
// }
// else if ( operationValue==="/"){
//     console.log((userValue1)/(userValue2))
// }
//assiment 6_11 complete