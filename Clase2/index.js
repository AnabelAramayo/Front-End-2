let inputUser;

do {
    inputUser = parseInt(prompt("¿Piedra (1), Papel (2) o Tijera (3)?"));
    console.log(inputUser);
} while (inputUser != 1 && inputUser != 2 && inputUser != 3);

let inputBoot = parseInt(Math.random() * 3 + 1);
console.log(inputUser);
console.log(inputBoot);

switch (inputUser) {
    case 1:
        if (inputBoot == 3) {
            alert("Ganaste");
            break;
        }
        if (inputBoot == 2) {
            alert("Perdiste");
            break;
        }
    case 2:
        if (inputBoot == 1) {
            alert("Ganaste");
            break;
        }
        if (inputBoot == 3) {
            alert("Perdiste");
            break;
        }
    case 3:
        if (inputBoot == 2) {
            alert("Ganaste");
            break;
        }
        if (inputBoot == 1) {
            alert("Perdiste");
            break;
        }
    default:
        alert("Empataron");
}

let list = [
    { nombre: "Emi", ciudad: "Buenos Aires" },
    { nombre: "Mica", ciudad: "Capital" }
];

console.table(list);
for (let item of list) {
    for (let prop in item) {
        console.log(prop + ": " + item[prop]);
    }
}


//hacer en tres funciones ganaste, perdiste, empataste
// function ganastePiedra() {
//         if (inputBoot == 3 && inputUser == 1) {
//             alert("Ganaste");
//         }
// }