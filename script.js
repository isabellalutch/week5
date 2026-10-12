
let mood = "";

document.getElementById("Pizza").addEventListener("click", function() {
    mood = "Pizza";
    showResult();
});

document.getElementById("Pasta").addEventListener("click", function() {
    mood = "Pasta";
    showResult();
});

document.getElementById("Steak").addEventListener("click", function() {
    mood = "Steak";
    showResult();
});

function showResult() {

    if (mood === "Pizza") {
        document.getElementById("result").innerHTML = "Maybe go to the Italian restaurant down the street.";
        document.getElementById("foodImage").src = "Pizza.jpg.avif";

    } else if (mood === "Pasta") {
        document.getElementById("result").innerHTML = "That's always a good choice. You can even make it at home.";
        document.getElementById("foodImage").src = "Pasta.jpg.webp";

    } else {
        document.getElementById("result").innerHTML = "Hmm..If I were you, I'd probably go with Pizza. Steak seems a bit too heavy for now";
        document.getElementById("foodImage").src = "steak.jpg";
    }

    document.getElementById("foodImage").style.display = "block";
}
