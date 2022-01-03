var url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

async function meals(){
    try{
        let mls = await fetch(url)
        let food = await mls.json()
        foodInfo(food.meals)
        console.log(food)
    }
    catch(err){
        console.log(err)
    }
}
meals();
let cart = JSON.parse(localStorage.getItem("details")) || []
function foodInfo(foods){
    document.querySelector("#items").innerHTML = null;
    foods.forEach(function(elem){
        let mainbox = document.createElement("div")
        let box1 = document.createElement("div")
        let box2 = document.createElement("div")
        let name = document.createElement("h3")
        name.textContent = elem.strMeal
        let image  = document.createElement("img")
        image.src = elem.strMealThumb
        image.setAttribute("id","img")
        let price = document.createElement("p")
        price.innerText = `Cost: ${Math.round(Math.random()*400+100)}Rs`
        let button = document.createElement("button")
        let span = document.createElement("span")
        button.innerText = "Add to Cart"
        box1.append(image)
        box2.append(name,price,button)
        mainbox.append(box1,box2)
        document.querySelector("#items").append(mainbox)

        button.addEventListener("click",addCart)
        function addCart(){
            document.getElementsByClassName("cart").innerHTML = null;
           span.innerText = `(${cart.length})`
            cart.push(elem);
            console.log(cart);
            document.querySelector(".cart").append(span)
            localStorage.setItem("details",JSON.stringify(cart));
        }
    })
}