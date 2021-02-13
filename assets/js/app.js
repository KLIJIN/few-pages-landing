const modalBtn = document.querySelectorAll("[data-modal]")
const modal = document.querySelectorAll(".modal")
const videoModal = document.querySelector(".videoModal")
const body = document.querySelector("body")
const modalClose = document.querySelectorAll(".modal__close")
const wrapper = document.querySelector(".page__mask")
const burger = document.querySelector("#sidebarToggle")
const sidebar = document.querySelector("#sidebar")

console.log("wrapper", wrapper);
console.log(sidebar);


modalBtn.forEach(item => {  //c помощью форИч перебираем все элементы коллекции

    item.addEventListener("click", event => {
        //let modalId = event.target.getAttribute('data-modal'); //получаем значение атрибута дата-Модал - contact modal
        let modalId = event.currentTarget.getAttribute('data-modal'); //получаем значение атрибута дата-Модал - contact modal
        // console.log(modalId);
        let modalContent = modal[0].querySelector(".modal__content")
        console.log(modalContent);

        modalContent.addEventListener("click", event => {
            event.stopPropagation();
        })

        modal[0].classList.add("show")
        body.classList.add("no-scroll")
    })
})


modalClose.forEach(item => {  //c помощью форИч перебираем все элементы коллекции

    item.addEventListener("click", event => {
        let currentModal = event.currentTarget.closest(".modal")
        closeModal(currentModal)
    })
})


modal.forEach(item => {  //c помощью форИч перебираем все элементы коллекции

    item.addEventListener("click", event => {
        console.log(event)
        let currentModal = event.currentTarget

        closeModal(currentModal)
    })
})

function closeModal(currentModal) {
    currentModal.classList.remove("show")
    body.classList.remove("no-scroll")
}


burger.addEventListener("click", event => {
    body.classList.toggle("show-sidebar");
    //добавить закрытие сайдбара по клику на майн
    if (!sidebar.style.overflow) {
        sidebar.style.overflow = "scroll"
    } else {
        sidebar.style.overflow = ""
    }


})

wrapper.addEventListener("click", event => {
    body.classList.remove("show-sidebar");
    sidebar.style.overflow = ""
})