document.addEventListener("DOMContentLoaded", () =>
{
    const body = document.querySelector("body")
    const btnTheme = document.querySelector(".btnModoVIsual")
    const iconeBtnTheme = document.querySelector("button i")
    
    console.log(body.classList)
    btnTheme.addEventListener("click", () =>
    {
        body.classList.toggle("lightMode")
        iconeBtnTheme.classList.toggle("fa-sun");
    })
})