// Start Of Search Bar
const icon = document.querySelector("#icon");
const myForm = document.querySelector(".form");
const input = document.querySelector(".input");

// ***** If I Did Not Use Toggle *****
// icon.addEventListener("click", (event) => {
//     event.stopPropagation();
//     if (myForm.classList.contains("show")) {
//         myForm.classList.remove("show");
//     } else {
//         myForm.classList.add("show");
//     }});

icon.addEventListener("click", (event) => {
    event.stopPropagation();
    myForm.classList.toggle("show");
    icon.classList.add("disapear");
});
input.addEventListener("click", (event) => {
    event.stopPropagation();
});
document.addEventListener("click", () => {
    myForm.classList.remove("show");
    icon.classList.remove("disapear");
});

//search input 
const searchInput = document.querySelector(".input");
const targets = {
    "services": ".services",
    "protfolio": ".protfolio",
    "about": ".about",
    "pricing": ".pricing",
    "contact": ".contact-us",
};

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const valueOfInput = e.target.value.toLowerCase(); // this means when i press enter take the value make it lowerCase and save it to a variable
        if (valueOfInput in targets) {
            window.scrollTo({
                left: 0,
                top: document.querySelector(targets[valueOfInput]).offsetTop,
                // i didn't use targets.valueOfInput bec its a string so i have to use [].    
                behavior: "smooth"
            })
        } else {
            alert(`We Don't Have "${valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1)}" Section In Our Site`);
            /*
            this means take the value then take the first letter of it make it capital then add it the the value again without
            the first letter for example ahmed => A + hmed = Ahmed note: slice(start,end)
            so i i will start from index 1 until i reach the end 
            */
        }
    }
});
// End Of Search Bar

//Start Of toggle-menu 
const toggleMenu = document.querySelector(".toggle-menu");
const ul = document.querySelector("#ul");

toggleMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    ul.classList.toggle("visable");
});
ul.addEventListener("click", (event) => {
    event.stopPropagation();
});
document.addEventListener("click", () => {
    ul.classList.remove("visable");
});
//End Of toggle-menu

//Start Of Styling Links
const links = document.querySelectorAll("#ul a");

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Remove "active" class from all links
        links.forEach((link) => {
            link.classList.remove("active");
        });

        // Add "active" class to the clicked link
        link.classList.add("active");
    });
});

//Scroll To Sections
function scrollToElement(element) {
    window.scrollTo({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    });
};

const services = document.querySelector("#services");
const protfolio = document.querySelector("#protfolio");
const about = document.querySelector("#about");
const pricing = document.querySelector("#pricing");
const contact = document.querySelector("#contact");

services.addEventListener("click", () => {
    scrollToElement(document.querySelector(".services"));
});

protfolio.addEventListener("click", () => {
    scrollToElement(document.querySelector(".protfolio"));
});

about.addEventListener("click", () => {
    scrollToElement(document.querySelector(".about"));
});

pricing.addEventListener("click", () => {
    scrollToElement(document.querySelector(".pricing"));
});

contact.addEventListener("click", () => {
    scrollToElement(document.querySelector(".contact-us"));
});

//End Of Styling Links

// Start Landing

let left = document.querySelector("#left");
let right = document.querySelector("#right");
let leftLi = document.querySelector(".left");
let rightLi = document.querySelector(".right");

let pic1 = "url(images/Owl2.jpg)";
let pic2 = "url(images/owl-cool.jpg)";
let pic3 = "url(images/owl-digital-art-3840x2160-10177.jpg)";
let images = [pic1, pic2, pic3];

let landingPic = document.querySelector(".landing");

let currentPicIndex = 0; //This Will Be Used To Select The Place In The Array (The Index)
let currentPic = images[currentPicIndex]; //Here This Means Let currentPic = Index 0 Which Is Pic1 In The Image Aarry => images[0];
landingPic.style.backgroundImage = currentPic;

right.addEventListener("click", next);
left.addEventListener("click", prev);

rightLi.addEventListener("click", next);
leftLi.addEventListener("click", prev);

function next() {
    currentPicIndex = (currentPicIndex + 1) % images.length;
    currentPic = images[currentPicIndex];
    landingPic.style.backgroundImage = currentPic;
}
function prev() {
    currentPicIndex = (currentPicIndex - 1 + images.length) % images.length; // As A Start ((0 - 1 + 3)%3) = 2
    currentPic = images[currentPicIndex]; //Any Small Number % A Biger Number = The Result Will Be The Small Number ex:2%3=2
    landingPic.style.backgroundImage = currentPic;
}

//End Landing

//Start Protfolio
let shuffledBoxs = document.querySelectorAll(".shuffle li");
let imgsContanier = document.querySelectorAll(".imgs-contanier .box");

shuffledBoxs.forEach(box => {
    box.addEventListener("click", (ele) => {
        shuffledBoxs.forEach(li => {
            li.classList.remove("active");
        })
        ele.currentTarget.classList.add("active");
        imgsContanier.forEach(img => {
            img.style.display = "none";
        })
        document.querySelectorAll(ele.currentTarget.dataset.item).forEach(item => {
            item.style.display = "block";
        })
    })
})
//End Protfolio

