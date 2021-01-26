let recipeDiv = document.getElementById("cakeRecipe")
let elementUl = document.getElementById('ulE')
let nameRecipe = prompt("Enter the name of your recipe");
let numberOfIngredients = prompt("Enter the number of ingredients");
let nameIngredient = prompt("Enter the names of your Ingredients");


function numOfIng(input, ingredient, element) {

    
    input += ingredient
    element.innerHTML += `<li>${ingredient}</li>`

}

function print(recipe, ingredient, element, input, elementUl) {

    element.innerHTML = "";
    element.innerHTML += `<h2>My ${recipe} Recipe</h2>`;
    numOfIng(input, ingredient, elementUl)

}

print(nameRecipe, nameIngredient, recipeDiv, numberOfIngredients, elementUl);