/* =========================
   IMAGE CAROUSEL
========================= */

const mainImage = document.getElementById("mainImage");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const thumbs = document.querySelectorAll(".thumbs img");

let index = 0;

/* GET IMAGES FROM THUMBNAILS */

const images = Array.from(thumbs).map(img => img.src);

function updateImage(){

mainImage.style.opacity = "0";

setTimeout(()=>{
mainImage.src = images[index];
mainImage.style.opacity = "1";
},150);

}

/* NEXT */

if(nextBtn){
nextBtn.addEventListener("click",()=>{

index++;

if(index >= images.length){
index = 0;
}

updateImage();

});
}

/* PREVIOUS */

if(prevBtn){
prevBtn.addEventListener("click",()=>{

index--;

if(index < 0){
index = images.length - 1;
}

updateImage();

});
}

/* THUMB CLICK */

thumbs.forEach((thumb,i)=>{

thumb.addEventListener("click",()=>{

index = i;
updateImage();

});

});

/* =========================
   STICKY HEADER
========================= */

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(!navbar) return;

let currentScroll = window.pageYOffset;

if(currentScroll > 150){

if(currentScroll > lastScroll){
navbar.style.transform = "translateY(-100%)";
}
else{
navbar.style.transform = "translateY(0)";
}

}

lastScroll = currentScroll;

});


/* =========================
   FAQ ACCORDION
========================= */

const questions = document.querySelectorAll(".faq-question");

questions.forEach(q=>{

q.addEventListener("click",()=>{

const answer = q.nextElementSibling;

document.querySelectorAll(".faq-answer").forEach(item=>{
if(item !== answer){
item.style.display = "none";
}
});

answer.style.display =
answer.style.display === "block" ? "none" : "block";

});

});


/* =========================
   INDUSTRY SLIDER
========================= */

const industryTrack = document.querySelector(".industry-track");
const industryNext = document.querySelector(".industry-right");
const industryPrev = document.querySelector(".industry-left");

let industryPosition = 0;
const industryCardWidth = 320;

if(industryNext){
industryNext.addEventListener("click",()=>{

industryPosition -= industryCardWidth;
industryTrack.style.transform = `translateX(${industryPosition}px)`;

});
}

if(industryPrev){
industryPrev.addEventListener("click",()=>{

industryPosition += industryCardWidth;

if(industryPosition > 0){
industryPosition = 0;
}

industryTrack.style.transform = `translateX(${industryPosition}px)`;

});
}


/* =========================
   PROCESS IMAGE SLIDER
========================= */

const processImages = [
"assets/images/hero1.jpg",
"assets/images/port1.jpg",
"assets/images/port2.jpg"
];

let processIndex = 0;

const processImg = document.getElementById("processImage");
const processNext = document.querySelector(".process-next");
const processPrev = document.querySelector(".process-prev");

if(processNext){
processNext.addEventListener("click",()=>{

processIndex++;

if(processIndex >= processImages.length){
processIndex = 0;
}

processImg.src = processImages[processIndex];

});
}

if(processPrev){
processPrev.addEventListener("click",()=>{

processIndex--;

if(processIndex < 0){
processIndex = processImages.length - 1;
}

processImg.src = processImages[processIndex];

});
}


/* =========================
   PROCESS TABS
========================= */

const processTabs = document.querySelectorAll(".process-tab");

processTabs.forEach(tab=>{

tab.addEventListener("click",()=>{

processTabs.forEach(t=>t.classList.remove("active"));
tab.classList.add("active");

});

});


/* =========================
   MODALS
========================= */

const overlay = document.getElementById("modalOverlay");

const quoteModal = document.getElementById("quoteModal");
const downloadModal = document.getElementById("downloadModal");

const quoteButtons = document.querySelectorAll(".openQuoteModal");
const downloadButtons = document.querySelectorAll(".openDownloadModal");


/* OPEN QUOTE MODAL */

quoteButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

if(overlay && quoteModal){
overlay.classList.add("active");
quoteModal.classList.add("active");
}

});

});


/* OPEN DOWNLOAD MODAL */

downloadButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

if(overlay && downloadModal){
overlay.classList.add("active");
downloadModal.classList.add("active");
}

});

});


/* CLOSE BUTTON */

document.querySelectorAll("[data-close]").forEach(btn=>{
btn.addEventListener("click", closeModal);
});


/* CLICK OUTSIDE */

if(overlay){
overlay.addEventListener("click", closeModal);
}


/* CLOSE FUNCTION */

function closeModal(){

if(overlay) overlay.classList.remove("active");

if(quoteModal) quoteModal.classList.remove("active");

if(downloadModal) downloadModal.classList.remove("active");

}