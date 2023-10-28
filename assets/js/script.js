let dataJSON = null;

window.onload = async function(){
    document.getElementById(`content1`).style.display = 'none';
    document.getElementById(`content2`).style.display = 'none';
    await kiirat();
}

async function kiirat() {
    const settings  = {
        method : "GET",
        headers: {
            "X-Master-Key" : "$2a$10$pF9rmIPkQ9KRLGjzi3BeVOkbKo7SWanrN65adJAWrO2GqGLlmWaki",
            "Content-Type": "application/json"
        }
    }
    
    let response = await fetch("https://api.jsonbin.io/v3/b/653ccd3512a5d37659919c3b?meta=false", settings);
    const data = await response.json();
    dataJSON = data;
    document.getElementById("emberszam").innerHTML = data.members
    document.getElementById("eselyszam").innerHTML = data.entries
    document.getElementById("time").innerHTML = data.updated

    const tabla = document.getElementById("main")
    const tabla2 = document.getElementById("korabbi")
    
    for (const key in data.data) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        td1.innerHTML = data.data[key].name
        td2.innerHTML = data.data[key].entry

        tr.appendChild(td1)
        tr.appendChild(td2)

        tabla.appendChild(tr)
    }
    
    for (const key in data.older) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td1.innerHTML = data.older[key].date
        td2.innerHTML = data.older[key].name
        td3.innerHTML = data.older[key].entry

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tabla2.appendChild(tr)
    }
}

function toggleContent(divNumber) {
    const contentDiv = document.getElementById(`content${divNumber}`);
    const contentTitle = document.getElementById(`boxtitle${divNumber}`);

    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
        contentTitle.innerHTML = contentTitle.innerHTML.split(" ▶")[0]
        contentTitle.innerHTML = contentTitle.innerHTML += " ▼"
    } else {
        contentDiv.style.display = 'none';
        contentTitle.innerHTML = contentTitle.innerHTML.split(" ▼")[0]
        contentTitle.innerHTML = contentTitle.innerHTML += " ▶"
    }
} 

function kereses() {
    tablatorles()
    tablafejlec()

    const searchvalue = document.getElementById("searchbar").value.trim().toLowerCase();

    if (searchvalue == "") {
        tablafeltoltes();
    } else {
        const tabla = document.getElementById("main")

        for (const key in dataJSON.data) {
            if (dataJSON.data[key].name.trim().toLowerCase().includes(searchvalue)) {
                let tr = document.createElement("tr")
                let td1 = document.createElement("td")
                let td2 = document.createElement("td")
        
                td1.innerHTML = dataJSON.data[key].name
                td2.innerHTML = dataJSON.data[key].entry
        
                tr.appendChild(td1)
                tr.appendChild(td2)
        
                tabla.appendChild(tr)
            }
        }
    }
}

function tablatorles() {
    let elements = document.getElementById('main');
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
}
function tablafejlec() {
    const tabla = document.getElementById('main');
    const trelem = document.createElement("tr")

    const th1elem = document.createElement("th")
    th1elem.innerHTML = "Ember neve"
    trelem.appendChild(th1elem)

    const th2elem = document.createElement("th")
    th2elem.innerHTML = "Esélyek száma"
    trelem.appendChild(th2elem)

    tabla.appendChild(trelem)
}
function tablafeltoltes() {
    const tabla = document.getElementById("main")

    for (const key in dataJSON.data) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        td1.innerHTML = dataJSON.data[key].name
        td2.innerHTML = dataJSON.data[key].entry

        tr.appendChild(td1)
        tr.appendChild(td2)

        tabla.appendChild(tr)
    }
}
