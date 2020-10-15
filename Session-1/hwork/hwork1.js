console.log('Homework:')

console.log(" \n")

console.log('Ex 1')

console.log("  \n")

console.log('1.1 The cases that cause SyntaxError when declare variable in JS:')
console.log('    Variable names contain special characters.')
console.log('   Eg: @, #, !, %, ^, &, ....')
console.log('    Variable names cannot begin with a number.')
console.log('   Eg: 1Hiep, 2anhTrieu, 3LopC4EJS100')
console.log('    Variable names must be unique')
console.log('   Eg: let a = 10 \n \      let a = 10 SyntaxError: a has been declared  ')
console.log('1.2 To test a variable data type we use typeof')
let age = 23 
console.log('   Eg: let age = "23" : ' + typeof(age) )

console.log("  \n")

console.log('Ex 2')

console.log("  \n")

console.log('    Functions HTML, CSS, JavaScript in the front-end web')
console.log('    Front-end consists of HTML, CSS, JS')
console.log('    HTML Content')
console.log('    CSS Decoration, appearance')
console.log('    Js Direct User interaction')

console.log("  \n")

console.log('Ex 3')

console.log("  \n")

console.log('3.1: A String named message with value ‘Coding is great’, then use console.log to print it out')
let message = 'Coding is great' 
console.log(message)

console.log("  \n")

console.log('3.2: A Number named studentCount with value 0, then use console.log to  print it out')
let studentCount = 0
console.log(studentCount)

console.log(" \n")

console.log('Ex 4')

console.log(" \n")

console.log('4.1: Change message into ‘Coding might not be easy, but still great’, then use console.log to  print it out')
     message = 'Coding might not be easy, but still great'
console.log(message)

console.log(" \n")

console.log('4.2: Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out')
    studentCount = 16
console.log(studentCount)

console.log(" \n")

console.log('4.3: After completing exercise a, change the message into lowercase, then use console.log to print it out' )
console.log(message.toLocaleLowerCase())

console.log(" \n")

console.log('4.4 After completing exercise b, increase studentCount by 1, then use console.log to print it out')
console.log((studentCount) + 1)

console.log(" \n")

console.log("Ex 5: Write a script to show user a nice message")
alert('I think I am bad')

console.log(" \n")

console.log('Ex 6: Write a script to ask user about their name, and then say hi to them, say something nice to them if you want')
alert(prompt('Hi what your name?') +'Have a good day')

console.log(" \n")

console.log('Ex 7: Write a script that ask 2 things from users, their first name and last name, then greet them with their full name')
var firstname = prompt("Enter your first name:")
var lastname = prompt("Enter your last name:")
alert(("Hi ") + ( firstname + lastname))

console.log( "\n")

console.log('Ex 8: Write a script that calculates the area of a square')

var edge = prompt('Enter side length of the square')
alert('The area of the square is ' + edge*edge)

console.log("\n")

console.log('Ex 9: Write a script that calculates the area of a circle')
 
var radius = prompt("Enter the radius of the circle")
alert(`The area of the circle is : ${(radius)*(radius)*(3.14)}`)

console.log("\n")

console.log('Ex 10: Write a script that converts Celsius (0C) into Fahrenheit (0F)')

var Celsius = prompt("Enter the temperature in Celsius")
alert(`${Celsius} (C) = ${(Celsius)*(1.8)+(32)} (F)`);