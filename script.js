const clicker = document.querySelectorAll(".FAQ-1")

clicker.forEach((each) => {
    each.addEventListener("click", (e) => {
        const para = each.querySelector(".subtext")
        const image = each.querySelector("img")
        if (image.getAttribute("src") == "./assets/images/icon-plus.svg") {
          image.setAttribute("src", "./assets/images/icon-minus.svg")  
        } else {
            image.setAttribute("src", "./assets/images/icon-plus.svg"); 
        }
          para.classList.toggle("hidden");
    })
})