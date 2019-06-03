// Shown as strings
let meal = "lunch"
let sandwich = "peanut butter and jelly"
let bread = "whole wheat"
let drink = "grape juice"
let sideSnack = "apple"

// Make an array
let todayMeal = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice", "apple"]

// Make into Object
let todayMealObject = {
    meal: "lunch",
    sandwich: "peanut butter and jelly",
    bread: "whole wheat",
    drink: "grape juice",
    sideSnacks: "apple",
}

// Exercise for String Template Literals
const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

console.log(`Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In 25 years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`)

// One element
const blogContainer = document.querySelector('.blogPosts');
console.log(blogContainer);

// One or more elements
const myArticles = document.querySelectorAll('.blogArticle');
console.log(myArticles);

// Add class
blogContainer.classList.add('currentBlog');

for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add('currentBlog');
}


