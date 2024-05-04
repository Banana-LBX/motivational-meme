var isEaten;
var isRickrolled;

document.querySelector(".button").style.visibility = "hidden";

//Normal banana
document.querySelector(".motivation-img").addEventListener("mouseover", function() {
    if (!isEaten) {
        this.setAttribute("src", "assets/images/Banana.jpg");
        document.querySelector(".heading").innerHTML = "Wow";
        document.querySelector(".paragraph").innerHTML = "What a juicy banana! Now eat it.";
    }
    else if (!isRickrolled) {
        this.setAttribute("src", "assets/images/BananaEaten.png");
        document.querySelector(".heading").innerHTML = "Yum";
        document.querySelector(".paragraph").innerHTML = "Click on the button for another banana.";
        document.querySelector(".button").style.visibility = "visible";

    }
})


//Broken banana
document.querySelector(".motivation-img").addEventListener("mouseout", function() {
    if (!isEaten) {
        this.setAttribute("src", "assets/images/BananaBroken.png");
        document.querySelector(".heading").innerHTML = "Oof";
        document.querySelector(".paragraph").innerHTML = "Don't waste food, there is only so much.";
    }
    else if (!isRickrolled) {
        this.setAttribute("src", "assets/images/BananaEaten.png");
        document.querySelector(".heading").innerHTML = "Yum";
        document.querySelector(".paragraph").innerHTML = "Click on the button for another banana.";
        document.querySelector(".button").style.visibility = "visible";
    }
})

//Eaten banana
document.querySelector(".motivation-img").addEventListener("click", function() {
    if (!isRickrolled) {
        isEaten = true;
        this.setAttribute("src", "assets/images/BananaEaten.png");
        document.querySelector(".heading").innerHTML = "Yum";
        document.querySelector(".paragraph").innerHTML = "Click on the button for another banana.";
        document.querySelector(".button").style.visibility = "visible";
    }
})

//Rickroll
document.querySelector(".button").addEventListener("click", function() {
    isRickrolled = true;
    document.querySelector(".motivation-img").setAttribute("src", "assets/images/rick.gif");
    document.querySelector(".heading").innerHTML = "lol";
    document.querySelector(".paragraph").innerHTML = "You just got rickrolled.";
    document.querySelector(".button").style.visibility = "hidden";
})
