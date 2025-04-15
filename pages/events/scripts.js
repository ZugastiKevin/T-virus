const eventTitle = document.querySelector(".event-title");
const eventSubTitle = document.querySelector(".event-sub-title");
const eventTexte = document.querySelector(".event-texte");
const eventCardsContainer = document.querySelector(".event-cards-container");
const eventButton = document.querySelector(".event-button");

function startPage() {
    const params = new URLSearchParams(document.location.search);
    console.log(params.get("event"));
    
    //if (params.get("event") === "mariage") {
        //eventTitle.textContent = events["mariage"][0];
    //}
};

startPage();