const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");
let i = 0
const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});
function nextTabs(){
    if (i === tabContent.length - 1) {
        tabContent[i].style.display = "none";
        i = 0
        tabContent[0].style.display = "block";
    } else {
        tabContent[i].style.display = "none";
        tabContent[i + 1].style.display ="block";
        i++;
    }
}
setInterval(nextTabs, 1000)



const modal = document.querySelector(".modal");
const modalTigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");


const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden"

};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
};
modalTigger.addEventListener("click", openModal)

modal.addEventListener("click", (event)=>{
    if(event.target == modal){
        closeModal();
    }
})
closeModalBtn.addEventListener("click", closeModal);


// const footer = document.querySelector(".footer")
// window.addEventListener('scroll', () =>{
//     if (window.pageYOffset > footer ) {
//         closeModal.classList.add("active");
//     } else {
//         closeModal.classList.remove("active");
//     }
// })

