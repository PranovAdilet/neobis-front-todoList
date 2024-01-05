//Part 1

//1
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// };
// В консоли выведутся только десятки, потому что происходит замыкание, а так же из-за использования var

//2

// const currentDateFunction = () => {
//     const daysInWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//
//
//     const currentDate = new Date()
//
//
//     let currentHours = currentDate.getHours()
//     let currentMinutes = currentDate.getMinutes()
//     let currentSeconds = currentDate.getSeconds()
//
//     const formatHours = currentHours % 12 || 12
//
//     const formatMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes
//
//     const formatSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds
//
//     const ampm = currentHours >= 12 ? 'PM' : 'AM'
//
//
//     return `Today is: ${daysInWeek[currentDate.getDay()]}.
// Current time is: ${formatHours}${ampm}:${formatMinutes}:${formatSeconds}`
// }
//
// console.log(currentDateFunction())

//3

// const reverseFunction = (n) => {
//     return +n.toString().split("").reverse().join("")
// }
//
// console.log(reverseFunction(234621))

//4

// const factorialOfNum = (num) => {
//     let result = 1
//
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     return `${num}! = ${result}`
// }
//
// console.log(factorialOfNum(5))

//5

// const promtFunction = () => {
//     let num1 = prompt("Введите свое первое число")
//     let num2 = prompt("Введите свое второе число")
//
//     if (!isNaN(+num1) && !isNaN(+num2)){
//         return +num1 > +num2 ? alert(num1) : alert(num2)
//     }else{
//         alert("Данные которые вы ввели не являются числами!")
//     }
//
// }
// promtFunction()

//6

// const colorsToString = (arr) => {
//     return arr.join(",")
// }
// console.log(colorsToString(["Red", "Green", "White", "Black"]))

//7

// const monthName = (date) => {
//
//     const months = ["January","February","March","April","May","June","July","August","September", "October", "November", "December"]
//
//     let month = date.getMonth()
//
//     return months[month]
//
// }
// console.log(monthName(new Date("02/06/2009")))
// console.log(monthName(new Date("11/13/2009")))

//8

// const isUppercase = (string) => {
//     let firstChar = string.slice(0,1)
//     return firstChar === firstChar.toUpperCase()
// }
// console.log(isUppercase('Hello'))

//9

// const smileFunction = () => {
//     console.log(":)");
//
//     console.log("   ******   ");
//     console.log(" *        * ");
//     console.log("*   O    O   *");
//     console.log("*     ||     *");
//     console.log(" * \\____/ * ");
//     console.log("  *      *  ");
//     console.log("   ******   ");
// }
// smileFunction()









//  Part 2

//1
// const patterFunction = () => {
//     let arr = [3, 5, 2, 4, 6, 1]
//
//     for (let i = 0; i < arr.length; i++) {
//         console.log(document.querySelector(`#string-${arr[i]}`).textContent)
//     }
// }
//
// patterFunction()

//2

// const elementsColor = () => {
//     let elems = document.querySelectorAll('.element')
//
//     return  elems.forEach((item, idx) => {
//         if (idx < 3){
//             item.style.color = `red`
//         }else {
//             item.style.color = "green"
//         }
//     })
// }
//
// elementsColor()

//3

// const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
//
// const addElements = () => {
//     let todoList = document.querySelector("#todo-list")
//
//     tasks.forEach((item) => {
//         let newElement = document.createElement("li")
//         newElement.className = "task"
//         newElement.textContent = item
//         todoList.appendChild(newElement)
//     })
// }
// addElements()

//4

// const addHrFunction = () => {
//     let pElements = document.querySelectorAll('p')
//
//
//     pElements.forEach(p => {
//         let hr = document.createElement("hr")
//         p.append(hr)
//     })
//
//     console.log(pElements)
// }
//
// addHrFunction()

//5

// const cartFunction = () => {
//     const products = document.querySelectorAll('.item')
//     const parent = document.querySelector('#cart-items')
//
//     products.forEach(product => {
//         if (product.textContent === 'Cola 1.5 l. x 1'){
//             product.remove()
//         }
//         if (product.textContent === 'Chocolate bar x 3'){
//             let span = document.createElement('span')
//             let newProduct = document.createElement("div")
//
//             newProduct.textContent = 'Canned Fish '
//             span.textContent = 'x 4'
//
//             newProduct.appendChild(span)
//
//            parent.replaceChild(newProduct, product )
//         }
//     })
// }
//
// cartFunction()

//6

// const createList = () => {
//
//     let body = document.querySelector('body')
//
//     let list = document.createElement('ul')
//
//
//     let count = 1
//     let promptFunction = (c) => {
//         return prompt(`Введите содержимое ${c} пункта`)
//     }
//     while (true) {
//         let userInput = promptFunction(count)
//         if (!userInput) {
//             break
//         }
//         let li = document.createElement("li")
//         li.textContent = userInput
//         list.appendChild(li)
//         count++
//     }
//     body.appendChild(list)
//
// }
//
// createList()

