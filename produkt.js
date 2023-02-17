const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const produktURL = `https://moebelsite-f868.restdb.io/rest/moebler`;
//const imagePath = `https://moebelsite-f868.restdb.io/rest/moebler`;

function hentData(url) {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("h2").textContent = produkt.productdisplayname;
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#farve").textContent = produkt.basecolour;
  document.querySelector("#pris").textContent = produkt.price;
  document.querySelector("#type").textContent = produkt.articletype;
  document.querySelector("#billede").src = imagePath;
}

hentData(produktURL);
