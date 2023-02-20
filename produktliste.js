const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = "https://moebelsite-f868.restdb.io/rest/moebler";

const options = {
  headers: {
    "x-apikey": "63ee4ec4478852088da68376",
  },
};

//document.querySelector("h2").textContent = kat;

async function getData() {
  const response = await fetch(url, options);
  const data = await response.json();
  data.forEach(showProduct);
  console.log(data);
}

getData();

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.navn;
  copy.querySelector(".farve").textContent = product.farve;
  copy.querySelector("#procent").textContent = product.tilbud;
  copy.querySelector(".price").textContent = product.pris + " DKK";
  copy.querySelector("img").src = "webp/" + product.billede;
  copy.querySelector("a").href = "produkt.html?id=" + product.id;
  copy.querySelector(".tilbud p span").textContent = Math.round(product.pris - (product.pris * product.tilbud) / 100);

  if (product.udsolgt) {
    copy.querySelector("article").classList.add("udsolgt");
  }
  if (product.tilbud) {
    copy.querySelector(".tilbud").classList.remove("gem");
  }

  document.querySelector("main").appendChild(copy);
}
("billeder/");
