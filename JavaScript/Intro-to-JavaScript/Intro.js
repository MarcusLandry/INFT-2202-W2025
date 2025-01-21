//console.log("Hello World!")

// Variables and Data types

/* var num = 5; //General decleration, previously used to declare global scope
let num1 = 5; // General decleration, variable takes on current scope
const num2 = 5; // Declares a constant
 */
// Boolean - true or false
// Null - null value(empty)
// Undefined - undefined value
// Number - number (see documentation online)
// String - string (characters)
// Symbol - unique identifier

// Expressions, Operators

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

//let num1 = 5
//let num2 = 10
//let num3 = 15

//console.log(num1 == num2\) // false
//console.log(num1 != num2) // true

// Arrays, Objects

// Arrays - ordered collection of values
//let arr = [1, 2, 3, 4, 5]
//arr.push() // adds to end of array
//arr.pop() // removes from end of array

// Loops, Conditionals

// Example of a simple loop
/* for (let i = 0; i < 5; i++) {
    console.log(i)
}

// Example of Objects
// https://www.w3schools.com/js/js_object_methods.asp
let car = {
    brand: "honda", // key: value
    year: 2005,
    color: "blue",
    type: "odyssey",
    engine: "off",
    igniteEngine: () => {
        this.engine = "on"
    }
}

//Functions

// Function Declerations
fucniton SubmitEvent(a,b) {
    return a + b
}
    // Functions Expresisons
    
    // Arrow Functions

//Classes

class Car {
    color
    constructor(type, make, model, year) {
        this.type = type
        this.make = make
        this.model = model
        this.year = year
        }
        startEngine() {
            this.engine = "on"
        }
    }

    let vehicle = new Car("SUV", "Toyota", "Highlander", 2015)
    myVehicle.startEngine() */


//DOM: Document Object Model

console.log("hello browser!")
console.log(document)

//document.body.style.backgroundColor = "red";


// User Stories
// 1. AAU, I want to be able to type a new blog post into a text box
// 2. AAU, I want to be able to click a button to submit the blog
// 3. I wan to be able to view all the blog posts
// 4. AAU, I want to be able to delete the blog post

// Set up

function setupBlogPage() {
    // Create form (After)
    let blogForm = document.createElement("form")
    blogForm.setAttribute("Id", "blogForm")

    // Create element and display on page
    let blogInput = document.createElement("input")
    blogInput.setAttribute("type", "text")
    blogInput.setAttribute("id", "blogInput")
    document.body.appendChild(blogInput)

    // Create the button to submit
    let blogPostBtn = document.createElement("button")
    blogPostBtn.setAttribute("type", "submit")
    blogPostBtn.innerText = "Publish Blog Post"
    blogPostBtn.addEventListener("click", publishPost)
    document.body.appendChild(blogPostBtn)

    

}

setupBlogPage();

function publishPost () {
    // Grab data from input element
    let blogInputData = getElementById("blogInput").value
    console.log(blogInputData)
    let blogPost = document.createElement("div")
    blogPost.innerText = blogInputData
    document.body.appendChild(blogPost)
}


// Store input and button and elements in html form and attach to the form
// submission event the publishPost function using addEventListener()


// Store blog post in an array of objects that include the id and content


// add another button to each blog post to delete the blog post
let deleteBtn = document.createElement("button")