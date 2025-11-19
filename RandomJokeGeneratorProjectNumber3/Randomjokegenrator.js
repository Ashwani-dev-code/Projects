const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

function getJoke() {
    btn.disabled = true;
    btn.innerText = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            setup.innerText = data.setup;
            punchline.innerText = data.punchline;
        })
        .catch(error => {
            setup.innerText = "Oops! Something went wrong 😢";
            punchline.innerText = "";
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerText = "Next Joke";
        });
}

btn.addEventListener("click", getJoke);
