window.onload = async function(){
    await kiirat();
}

async function kiirat() {
    const settings  = {
        method : "GET",
        headers: {
            "X-Master-Key" : "$2b$10$YoRVLVCaAKVRPoU5LhiEUOxXQxhAtCBH6lhyEIchIcbkN5RR86D4y",
            "Content-Type": "application/json"
        }
    }
    
    let response = await fetch("https://api.jsonbin.io/v3/b/640c7a95c0e7653a05861e82?meta=false", settings);
    const data = await response.json();
    document.getElementById("emberszam").innerHTML = data.members
    document.getElementById("eselyszam").innerHTML = data.entries

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