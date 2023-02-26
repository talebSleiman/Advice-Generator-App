let span = document.querySelector("h4 span");
let p = document.querySelector("p");
let btn = document.querySelector("button");

getRandomAdvice();

async function getRandomAdvice() {
    try {
        let req = await fetch("https://api.adviceslip.com/advice");
        let data = await req.json();
        span.textContent = data["slip"]["id"];
        p.textContent = data["slip"]["advice"];
    } catch (error) {
        p.textContent = "Lorem ipsum dolor sit amet consectetur.";
        console.error(error);
    }
}

btn.addEventListener("click", () => {
    getRandomAdvice();
});
