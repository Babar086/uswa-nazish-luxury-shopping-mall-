/*=========================================
 Babar TEC Framework V2 Premium
 Uswa Nazish Luxury Shopping Mall
=========================================*/

//========== Loader ==========//

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1000);

});

//========== Mobile Menu ==========//

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.onclick = () =>{

navLinks.classList.toggle("active");

};

}

//========== Sticky Navbar ==========//

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="rgba(20,20,20,.85)";
navbar.style.backdropFilter="blur(20px)";

}else{

navbar.style.background="";
navbar.style.backdropFilter="blur(18px)";

}

});

//========== Search Filter ==========//

const search=document.querySelector(".search-box input");

const products=document.querySelectorAll(".product-card");

if(search){

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

products.forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

//========== Cart Counter ==========//

let cart=0;

const cartCount=document.querySelector(".cart-count");

const cartBtns=document.querySelectorAll(".product-card button");

cartBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

cart++;

if(cartCount){

cartCount.innerHTML=cart;

}

btn.innerHTML="Added ✓";

setTimeout(()=>{

btn.innerHTML="Add To Cart";

},1200);

});

});

//========== Product Hover ==========//

products.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

//========== Contact Form ==========//

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

}

//========== Newsletter ==========//

const newsBtn=document.querySelector(".newsletter button");

if(newsBtn){

newsBtn.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input");

if(email.value===""){

alert("Please enter your email.");

}else{

alert("Newsletter subscribed successfully.");

email.value="";

}

});

}

//========== Back To Top ==========//

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//========== WhatsApp Button ==========//

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

whatsapp.href="https://wa.me/923157540218";

}

//========== Scroll Animation ==========//

const cards=document.querySelectorAll(

".category-card,.product-card,.review"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s";

observer.observe(card);

});

console.log("Babar TEC Framework V2 Premium Loaded Successfully");
