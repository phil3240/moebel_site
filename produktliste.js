const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = "https://moebelsite-f868.restdb.io/rest/moebler";

const options = {
    headers: {
        `x-apikey`: "63ee4ec4478852088da68376"
    }
};

//document.querySelector("h2").textContent = kat;


async function getData() {
  const response = await fetch(url, options);
  const data = await response.json();
  data.forEach(showProduct);
}
getData();

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.navn;
  copy.querySelector("#procent").textContent = product.tilbud;
  copy.querySelector(".price").textContent = product.pris;
  //copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("a").href = "produkt.html?id=" + product.id;
  copy.querySelector(".discounted p span").textContent = Math.round(product.pris - (product.pris * product.tilbud) / 100);

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }

  document.querySelector("main").appendChild(copy);
}
