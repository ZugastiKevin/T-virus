const forBackground = document.querySelector("#background");
const eventTitle = document.querySelector(".event-title");
const eventSubTitle = document.querySelector(".event-sub-title");
const eventTexte = document.querySelector(".event-texte");
const eventCardsContainer = document.querySelector(".event-cards-container");
const eventButton = document.querySelector(".event-button");

async function getData(finder) {
    try {
        const  reponse = await fetch('../../assets/json/event.json');
        if (!reponse.ok) {
            throw new Error("La réponse n'est pas OK");
        }
        let result = await reponse.json();
        return result[finder];
        
    } catch (error) {
        console.error("HAAAAAAAA: ", error);
        
    };
};

async function startPage() {
    const bigScreen = document.querySelector(".big-screen");
    const params = new URLSearchParams(document.location.search);
    const finder = params.get("event");

    forBackground.classList.add(`bg-event-${finder}`)

    const reponse = await getData(finder);
    
    eventTitle.textContent = reponse.title;
    eventSubTitle.textContent = reponse['sub-title'];
    eventTexte.textContent = reponse.texte;
    for (i = 0; i < reponse.img.length; i++) {
        const source = reponse.img[i].src;
        const div = document.createElement("div");
        div.classList.add("event-card");
        const img = document.createElement("img");
        img.setAttribute("src", reponse.img[i].src);
        img.setAttribute("alt", reponse.img[i].alt);
        eventCardsContainer.append(div);
        div.append(img);
        div.addEventListener("click", function() {
            bigScreen.style.display = "block";
            bigScreen.style.backgroundImage = `url(${source})`;
        });
        bigScreen.addEventListener("mouseout", function() {
            bigScreen.style.display = "none";
        });
    };
};

startPage();