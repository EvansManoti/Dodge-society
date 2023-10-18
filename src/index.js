const dodgeData = {
    "dodge": [
        {
            "id": "1",
            "name": "Dodge Durango SRT Hellcat",
            "horsepower": "710",
            "engine": "6.2-liter V-8",
            "torque": "645 pound-feet",
            "gearbox": "8-speed automatic",
            "cost": "$80,995",
            "image": "https://editorial.pxcrush.net/carsales/general/editorial/dodge-durango-srt-hellcat-05.jpg?width=1024&height=683"
        },
        {
            "id": "2",
            "name": "Ram 1500 TRX",
            "horsepower": "702",
            "engine": "Hurricane twin-turbo 3.0-liter",
            "torque": "650 lb-ft",
            "gear_box": "8-speed automatic",
            "cost": "$84,850",
            "image": "https://di-uploads-pod32.dealerinspire.com/glenncdjroflouisville/uploads/2021/03/2021-Ram-1500-TRX-Exterior.jpg"
        },
        {
            "id": "3",
            "name": "Dodge Charger SRT Hellcat Widebody",
            "horsepower": "807",
            "engine": "SUPERCHARGED 6.2L HEMI",
            "torque": "707 pound-feet",
            "gear_box": "8-speed automatic",
            "cost": "$77,900",
            "image": "https://di-uploads-pod46.dealerinspire.com/unioncitycdjrfiat/uploads/2023/05/2023DodgeChargerSRTHellcatwidebody-exterior-01.jpg"
        },
        {
            "id": "4",
            "name": "Dodge Challenger SRT Hellcat",
            "horsepower": "797",
            "engine": "Supercharged 6.2L HEMIV8",
            "torque": "707 pound-feet",
            "gear_box": "8-speed automatic",
            "cost": "$70,590",
            "image": "https://www.autooutlet.cz/wp-content/uploads/2023/09/dsc03015.jpg"
        }
    ]
};

const vehicleList = document.getElementById("dodge-list");

dodgeData.dodge.forEach(vehicle => {
    const card = document.createElement("div");
    card.className = "vehicle-card";

    const image = document.createElement("img");
    image.src = vehicle.image;
    image.alt = vehicle.name;
    image.className = "vehicle-image";
    card.appendChild(image);

    const details = document.createElement("div");
    details.className = "vehicle-details";

    const name = document.createElement("p");
    name.textContent = vehicle.name;
    name.className = "vehicle-name";
    details.appendChild(name);

    const horsepower = document.createElement("p");
    horsepower.textContent = `Horsepower: ${vehicle.horsepower}`;
    details.appendChild(horsepower);

    const engine = document.createElement("p");
    engine.textContent = `Engine: ${vehicle.engine}`;
    details.appendChild(engine);

    const torque = document.createElement("p");
    torque.textContent = `Torque: ${vehicle.torque}`;
    details.appendChild(torque);

    const gearbox = document.createElement("p");
    gearbox.textContent = `Gearbox: ${vehicle.gearbox}`;
    details.appendChild(gearbox);

    const cost = document.createElement("p");
    cost.textContent = `Cost: ${vehicle.cost}`;
    cost.className = "vehicle-cost";
    details.appendChild(cost);

    card.appendChild(details);
    vehicleList.appendChild(card);
});


