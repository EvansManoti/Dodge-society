let page = 1;
let paginationElement = document.getElementById("pagination");
let paginationbtns=paginationElement.getElementsByTagName("button")
//console.log(paginationbtns)

paginationbtns[0].addEventListener('click', reverse);
function reverse(){
    console.log("reverse")
    if (page == 1){
        return;
    }
    page = page -1;
    pageNumberUpdate();
}
paginationbtns[1].addEventListener('click', drive);
function drive(){
    console.log("drive")
    page = page +1;
    pageNumberUpdate()
}

function pageNumberUpdate() {
    let span = paginationElement.getElementsByTagName("span")[0];
    //console.log(span);
    span.innerText = page;
}

function dispalyDodge(data) {
    let divElement = document.getElementById("all-vehicle");
    let dodge =""
    for(let i = 0; i < json.length; i++){
        let dodge = data[i];
        console.log(dodge);
        dodge=
        dodge + 
        `
        <div class="a-vehicle">
        <img 
        src="${dodge.image_url}">
        <div>
        <p>Name:<span>${dodge.name}</span></p>
        </div>
     </div>
        `
    }
    divElement.innerHTML = dodge
}

function getDodge(){
      fetch("http://localhost:3000/dodge",{
        method:'GET',
      })
        .then(response => response.data ())
        .then(data =>{
            let li = `<tr><th>Name</th><th>Horsepower</th><th>Engine</th><th>Torque</th><th>Gearbox</th><th>Cost</th><th>Image</th></tr>`;

            json.forEach(dodge => {
                li += `<tr>
                    <td>${dodge.name}</td>
                    <td>${dodge.horsepower}</td>
                    <td>${dodge.engine}</td>
                    <td>${dodge.torque}</td>
                    <td>${dodge.gearbox}</td>
                    <td>${dodge.cost}</td>
                    <td>${dodge.image}</td>
                </tr>`;
            });
            document.getElementById("dodge")
            console.log(data)
            dispalyDodge(data.data);
        });
}