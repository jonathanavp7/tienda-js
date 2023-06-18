// Clase molde
class Weapon {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen   
    }
}

// Variables globales
const equipamento = [];

// Creacion de objetos
const pistolas = new Weapon ("Pistolas", 80, '<img src="./img/pistola.png" alt="">');
const escopetas = new Weapon ("Escopetas", 200, '<img src="./img/escopeta.png" alt="">');
const semiAutomaticas = new Weapon ("Semi-automáticas", 350, '<img src="./img/semi.png" alt="" width="300px" height="240px">');
const rifles = new Weapon ("Rifles", 500, '<img src="./img/rifle.png" alt="">');
const granadas = new Weapon ("Granadas", 50, '<img src="./img/granada.png" alt="">');
const kevlar = new Weapon ("Kevlar", 85, '<img src="./img/kevlar.png" alt="">');

// Dinero
let dinero = 1000;
let dinero2 = 1000;

// Elementos
let items = document.querySelectorAll("#menu li");
let images = document.querySelectorAll("#images img");

const elementoDinero = document.querySelector("#dinero");
elementoDinero.innerText = dinero;

const elementoEquipamento = document.querySelector("#equipamento");

const elementoDinero2 = document.querySelector("#dinero2");
elementoDinero2.innerText = dinero2;

// Funciones regulares
function showImage(imageId) {
    images.forEach(image => image.style.display = 'none');
    let image = document.querySelector("#" + imageId);
    image.style.display = 'block';
}

items.forEach((item, index) => {
    item.addEventListener('mouseover', function() {
      showImage('image' + (index + 1));
    });
});

function comprar(Weapon) {
    if (dinero - Weapon.precio < 0) {
        alert("Dinero insuficiente");
        return;
    }
    equipamento.push(Weapon);
    dinero = dinero - Weapon.precio;
    dinero2 = dinero2 - Weapon.precio;
    renderizar();
}

function vender(indice) {
    const Weapon = equipamento[indice];
    dinero = dinero + Weapon.precio;
    dinero2 = dinero2 + Weapon.precio;
    equipamento.splice(indice, 1);
    renderizar();
}

// Funcion para actualizar HTML
function renderizar() {
    elementoEquipamento.innerHTML = "";
    for (const weapon of equipamento) {
        let indexWeapon = equipamento.indexOf(weapon);
        let elementoWeapon = `
        <div class="weapon" onclick="vender(${indexWeapon})">
            ${weapon.nombre}
        </div>`;
    elementoEquipamento.innerHTML += elementoWeapon;
    }
    elementoDinero.innerText = dinero;
    elementoDinero2.innerText = dinero2;
}