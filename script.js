let products = [
  {
    "itemID": 1001,
    "name": "Apfel",
    "price": 0.89,
    "info": "Ein knackiger roter Apfel mit süß-säuerlichem Geschmack.",
    "available": true,
    "quantity": 15
  },
  {
    "itemID": 1002,
    "name": "Banane",
    "price": 1.29,
    "info": "Reife Banane mit weicher Textur und süßem Aroma.",
    "available": true,
    "quantity": 20
  },
  {
    "itemID": 1003,
    "name": "Orange",
    "price": 1.49,
    "info": "Saftige Orange mit intensiv fruchtigem Geschmack.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1004,
    "name": "Birne",
    "price": 1.19,
    "info": "Süße, saftige Birne mit weichem Fruchtfleisch.",
    "available": true,
    "quantity": 10
  },
  {
    "itemID": 1005,
    "name": "Trauben",
    "price": 2.99,
    "info": "Kleine, kernlose Weintrauben mit süßem Geschmack.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1006,
    "name": "Erdbeeren",
    "price": 3.49,
    "info": "Frische Erdbeeren mit intensivem Aroma.",
    "available": true,
    "quantity": 25
  },
  {
    "itemID": 1007,
    "name": "Ananas",
    "price": 2.99,
    "info": "Süße, exotische Ananas mit saftigem Fruchtfleisch.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1008,
    "name": "Mango",
    "price": 2.79,
    "info": "Reife Mango mit süßem, tropischem Geschmack.",
    "available": true,
    "quantity": 12
  },
  {
    "itemID": 1009,
    "name": "Kiwi",
    "price": 1.09,
    "info": "Grüne Kiwi mit frischer, leicht säuerlicher Note.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1010,
    "name": "Zitrone",
    "price": 0.99,
    "info": "Gelbe Zitrone mit erfrischend saurem Geschmack.",
    "available": true,
    "quantity": 18
  },
  {
    "itemID": 1011,
    "name": "Pfirsich",
    "price": 1.89,
    "info": "Saftiger Pfirsich mit weichem, süßem Fruchtfleisch.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1012,
    "name": "Kirschen",
    "price": 4.99,
    "info": "Frische, rote Kirschen mit süßem Aroma.",
    "available": true,
    "quantity": 30
  },
  {
    "itemID": 1013,
    "name": "Melone",
    "price": 3.99,
    "info": "Saftige Melone mit fruchtig-süßem Geschmack.",
    "available": true,
    "quantity": 8
  },
  {
    "itemID": 1014,
    "name": "Granatapfel",
    "price": 2.49,
    "info": "Roter Granatapfel mit knackigen, saftigen Kernen.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1015,
    "name": "Feige",
    "price": 1.99,
    "info": "Süße, weiche Feige mit aromatischem Geschmack.",
    "available": true,
    "quantity": 6
  },
  {
    "itemID": 1016,
    "name": "Passionsfrucht",
    "price": 2.69,
    "info": "Exotische Passionsfrucht mit intensivem Aroma.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1017,
    "name": "Brombeeren",
    "price": 3.79,
    "info": "Dunkle Brombeeren mit süß-säuerlichem Geschmack.",
    "available": true,
    "quantity": 14
  },
  {
    "itemID": 1018,
    "name": "Himbeeren",
    "price": 3.99,
    "info": "Aromatische Himbeeren mit feiner Textur.",
    "available": false,
    "quantity": 0
  },
  {
    "itemID": 1019,
    "name": "Dattel",
    "price": 2.89,
    "info": "Süße, getrocknete Datteln mit weicher Konsistenz.",
    "available": true,
    "quantity": 9
  },
  {
    "itemID": 1020,
    "name": "Johannisbeeren",
    "price": 2.79,
    "info": "Kleine, säuerliche Johannisbeeren mit frischem Geschmack.",
    "available": true,
    "quantity": 22
  }
]

let cart = [];

const productDisplay = document.getElementById("product-display");
const warenkorbDisplay = document.getElementById("warenkorb-display");
const summe = document.getElementById("summe");

function kalkulation() {
    let sum = cart.reduce((acc, curr) => acc + curr.price, 0);
    summe.innerHTML = sum;
}

function updateProducts() {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productElement = document.createElement("li");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <h4 class="art-no">${product.itemID}</h4>
            <img src="https://placehold.co/128" alt="Bild von einem ${product.name}" />
            <p><b>${product.price}</b> Euro</p>
            <p>${product.info}</p>
            <button id="${product.itemID}">Produkt hinzufügen</button>
        `;
        productDisplay.appendChild(productElement);
    }
}

function updateWarenkorb() {
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const productElement = document.createElement("li");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <h4 class="art-no">${product.itemID}</h4>
            <img src="https://placehold.co/128" alt="Bild von einem ${product.name}" />
            <p><b>${product.price}</b> Euro</p>
            <p>${product.info}</p>
            <button id="${product.itemID}">Entfernen</button>
        `;
        warenkorbDisplay.appendChild(productElement);
    }
    kalkulation();
}

function addProduct(productID) {
    warenkorbDisplay.innerHTML = "";
    
    let addedProduct = [];
    addedProduct = products.filter( function (product) {
        return product.itemID == productID;
    });
    console.log(addedProduct);
    cart.push(addedProduct[0]);

    console.log("warenkorb", cart);

    updateWarenkorb();
    
}

function removeProduct(productID) {
    warenkorbDisplay.innerHTML = "";
    console.log("Produkt entfernt: " + productID);
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].itemID == productID) {
            cart.splice(i, 1);
        }
    }
    updateWarenkorb();
    
}

// backtick notation
// string = "hallo, " + "welt"; // "hallo, welt"
// string = `hallo, ${"welt"};` // "hallo, welt"

productDisplay.addEventListener("click", function(event) {
    if(event.target.tagName === "BUTTON") {
        event.stopPropagation();
        addProduct(event.target.id);
    }
});

warenkorbDisplay.addEventListener("click", function(event) {
    if(event.target.tagName === "BUTTON") {
        event.stopPropagation();

        removeProduct(event.target.id);
    }

});

updateProducts();

// Kalkulation
// jedesmal wenn ein Produkt dem Warenkorb hinzugefügt oder von ihm entfernt wird, dann geht durch das Array cart. und summiert die Werte die sich hinter dem Key "price" befinden.
