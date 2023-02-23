const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const produktURL = `https://moebelsite-f868.restdb.io/rest/moebler/${id}`;

const options = {
  headers: {
    "x-apikey": "63ee4ec4478852088da68376",
  },
};

function hentData(url) {
  fetch(url, options)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log("produkt", produkt);
  document.querySelector(".produkt_navn").textContent = produkt.navn;
  document.querySelector(".colour").textContent = produkt.farve;
  document.querySelector(".produkt_maal").textContent = produkt.produktmaal;
  document.querySelector(".madeOf").textContent = produkt.materiale;
  document.querySelector(".price").textContent = produkt.pris + ",-";
  document.querySelector(".produktFoto").src = `webp/${produkt.billede}`;
}

hentData(produktURL);
