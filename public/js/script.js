const toggleBtn = document.querySelector('.navToggle');
const nav = document.querySelector('.nav')
toggleBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible")
    console.log(visibility)

    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        toggleBtn.setAttribute("aria-expanded", true)

    } else {
        nav.setAttribute("data-visible", false)
        toggleBtn.setAttribute("aria-expanded", false)

    }
})

function hidOpenIcon() {
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.close').style.display = 'block';


}

function hidCloseIcon() {
    document.querySelector('.open').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
}

