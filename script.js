let myJson = [];

getData = () => {
    let txt = document.getElementById("search").value;

    fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=" + txt)
        .then(y => y.json())
        .then(y => display(y))

}

display = (data) => {

    for (const key in data) {
        if (key == "query") {
            for (const k in data[key]) {
                myJson = data[key][k];
            }
        }
    }

    document.getElementById("result").innerHTML = myJson.map((value) => {
        return ` <div class="item">
                <h3 id="title">${value.title}</h3>
    <p>${value.snippet}</p></div>`;
    }).join("");
}



function searchItems()
{
let item = document.getElementById("search").value
fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch="+ item)
        .then(function(value) {
            return value.json()
        }).then(function(value){

            displayInfo(value);
        })
}
function displayInfo(data)
{
    let result = data.query.search.map(function(va) {

        let {title,snippet} =va;
        return `<div class="item">
        <h3 id="title">${title}</h3>
<p>${snippet}</p></div>`
    })
    document.getElementById("result").innerHTML = result.join(" ");
}