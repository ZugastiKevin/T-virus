const eventTitle = document.querySelector(".event-title");
const eventSubTitle = document.querySelector(".event-sub-title");
const eventTexte = document.querySelector(".event-texte");
const eventCardsContainer = document.querySelector(".event-cards-container");
const eventButton = document.querySelector(".event-button");

async function startPage() {
    const params = new URLSearchParams(document.location.search);
    const  reponse = await fetch('event.json');
    const events = reponse.json();
    
    if (params.get("event") === "mariage") {
        eventTitle.textContent = events.find("mariage");
    }
};

startPage();