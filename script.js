// Page Navigation
let currentPage = 1;
const totalPages = 7;

function nextPage() {

    document
        .getElementById(`page${currentPage}`)
        .classList.remove("active");

    currentPage++;

    if (currentPage <= totalPages) {
        document
            .getElementById(`page${currentPage}`)
            .classList.add("active");
    }
}

// ------------------------
// Interactive Hearts
// ------------------------

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".heart-card").forEach(card => {

        card.addEventListener("click", () => {

            card.style.background = "#ffd9e5";
            card.style.transform = "scale(1.05)";

            setTimeout(() => {
                card.style.transform = "scale(1)";
            }, 200);

        });

    });

});

// ------------------------
// Interactive Stars
// ------------------------

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".star").forEach(star => {

        star.addEventListener("click", () => {

            star.style.background = "#fff4d6";
            star.style.transform = "scale(1.05)";

            setTimeout(() => {
                star.style.transform = "scale(1)";
            }, 200);

        });

    });

});

// ------------------------
// Forgive Button
// ------------------------

document.addEventListener("DOMContentLoaded", () => {

    const forgiveBtn = document.querySelector(".forgive");

    forgiveBtn.addEventListener("click", () => {

        forgiveBtn.innerHTML = "❤️ Thank You For Reading ❤️";

        alert(
`Thank you for reading everything.

This website wasn't made to pressure you.

It was made because every single word came from my heart.

I'm truly sorry. ❤️`
        );

    });

});

// ------------------------
// Secret Bunny Message
// ------------------------

let taps = 0;

document.addEventListener("click", function(e){

    if(
        e.target.tagName === "H1" &&
        e.target.innerText.includes("My Baby Boy")
    ){

        taps++;

        if(taps === 7){

            alert(
`🐰 Secret Message ❤️

If you've reached this far...

Thank you for reading every word.

This wasn't just a website.

It was my heart trying to reach yours.

I love you.

I'm truly sorry. ❤️`
            );

            taps = 0;
        }

    }

});
