
let arr = JSON.parse(localStorage.getItem("details"));
console.log(arr);
cartInfo(arr)
function cartInfo(arr){
 arr.forEach(function(elem){
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
        box1.append(image)
        box2.append(name,price)
        mainbox.append(box1,box2)
        document.querySelector("#main").append(mainbox)
 })
}