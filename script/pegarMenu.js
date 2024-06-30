document.addEventListener("DOMContentLoaded", () =>
{
    const menuActualActivo = (window.location.href).split("/").pop().split(".")[0]
    
    if (menuActualActivo == "index")
    {
        const btnMenu = document.querySelectorAll(".navbar a")[0]
        btnMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }
    else if(menuActualActivo == "blog")
    {
        const btnMenu = document.querySelectorAll(".navbar a")[1]
        btnMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }    
    else if(menuActualActivo == "setup")
    {
        const btnMenu = document.querySelectorAll(".navbar a")[2]
        btnMenu.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    }    
    
})

