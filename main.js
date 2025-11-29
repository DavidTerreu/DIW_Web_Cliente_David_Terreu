let IMGcategoria = document.querySelectorAll(".IMGcategoria");
let IMGgrande = document.querySelector(".IMGgrande");

function cambiarImagen(e){
    if(!e.target || e.target.tagName !== 'IMG') return;

    let clave = (e.target.alt || '').trim();

    const bigMap = {
        "Baguette": "./img/Descripcion-01-Baguette.jpg",
        "Hogaza": "./img/Descripcion-02-Hogaza.jpg",
        "Bollo Rústico": "./img/Descripcion-03-Bollo-Rustico.jpg",
        "Pan de molde con Cereales": "./img/Descripcion-04-Pan-Molde-Cereales.jpg"
    };

    const thumbNormal = {
        "Baguette": "./img/Pan 01 Baguette.jpg",
        "Hogaza": "./img/Pan 02 Hogaza.jpg",
        "Bollo Rústico": "./img/Pan 03 Bollo Rústico.jpg",
        "Pan de molde con Cereales": "./img/Pan 04 Pan Molde Cereales.jpg"
    };

    const thumbOUT = {
        "Baguette": "./img/Pan 01 Baguette OUT.jpg",
        "Hogaza": "./img/Pan 02 Hogaza OUT.jpg",
        "Bollo Rústico": "./img/Pan 03 Bollo Rústico OUT.jpg",
        "Pan de molde con Cereales": "./img/Pan 04 Pan Molde Cereales OUT.jpg"
    };

    if(bigMap[clave]){
        IMGgrande.src = bigMap[clave];
    }

    IMGcategoria.forEach(img => {
        const alt = (img.alt || '').trim();
        if(alt === clave && thumbNormal[alt]){
            img.src = thumbNormal[alt];
        } else if(thumbOUT[alt]){
            img.src = thumbOUT[alt];
        }
    });
}

IMGcategoria.forEach(img => img.addEventListener("click", cambiarImagen));