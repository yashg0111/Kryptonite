

// PRICE

var baseurl = "https://api.coinranking.com/v2/coins"
var proxyurl = "https://cors-anywhere.herokuapp.com/"
var apikey = "coinranking2b80758f0d9dfca054bf993ff3b792ee8cdb47f5a0149e99"


fetch(`${proxyurl}${baseurl}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-My-Custom-Header': `${apikey}`,
        'Access-Control-Allow-Origin': "*"
    }
}).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json.data)
            let coinsdata = json.data.coins;


            if (coinsdata.length > 0) {
                var cryptoCoin = "";
            }



            coinsdata.forEach((coin) => {
                cryptoCoin += "<tr>";
                cryptoCoin += `<td> ${coin.name}</td>`;
                var price = Math.round((coin.price) * 1000) / 1000;
                cryptoCoin += `<td> $ ${thousands_separators(price)}</td>`;
                cryptoCoin += `<td> ${coin.symbol}</td>`; "<tr>";

            });

            //For Loop Ends
            document.getElementById("data").innerHTML = cryptoCoin;
        })
    }
}).catch((error) => {
    console.log(error)
})



function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}










// NEWS API
// e116adabb6ee4615ba399849146cd5ad


// https://newsapi.org/v2/top-headlines?q=Crypto&apiKey=e116adabb6ee4615ba399849146cd5ad



// Initialize the news api parameters
let q = 'Crypto';
let apiKey = 'e116adabb6ee4615ba399849146cd5ad'
let source = 'cnn'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request &from=2021-10-20
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()



// coinranking2b80758f0d9dfca054bf993ff3b792ee8cdb47f5a0149e99




// if (coin.price > 999) {
//     var price = Math.round((coin.price) * 1000) / 1000;
//     cryptoCoin += `<td> ${thousands_separators(price)}</td>`;
// }
// else {
//     cryptoCoin += `<td> ${Math.round((coin.price) * 1000) / 1000}</td>`;
// }










