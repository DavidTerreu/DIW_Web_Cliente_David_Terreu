let IMGcategoria = document.querySelectorAll(".IMGcategoria");
let IMGgrande = document.querySelector(".IMGgrande");

function cambiarImagen(e){
    if(!e.target || e.target.tagName !== 'IMG') return;

    let clave = (e.target.alt || '').trim();

    const bigMap = {
        "Baguette": "./img/Descripcion-01-Baguette.jpg",
        "Hogaza": "./img/Descripcion-02-Hogaza.jpg",
        "Bollo Rústico": "./img/Descripcion-03-Bollo-Rustico.jpg",
        "Pan de molde con Cereales": "./img/Descripcion-04-Pan-Molde-Cereales.jpg",
        "Palmera chocolate": "./img/DescBollo-01-Napolitana-chocolate.jpg",
        "Croissant": "./img/DescBollo-02-Croissant.jpg",
        "Napolitana chocolate": "./img/DescBollo-03-Napolitana-Chocolate.jpg",
        "Galletas cookies": "./img/DescBollo-04-Galletas-Cookies.jpg",
        "Rollito Salchicha": "./img/DescSalados-01-Rollito-Salchicha.jpg",
        "Pizzeta": "./img/DescSalados-02-Pizzeta.jpg",
        "Canape Salado": "./img/DescSalados-03-Canape-Salado.jpg",
        "Empanada Pisto": "./img/DescSalados-04-Empanada-Pisto.jpg"
    };

    const thumbNormal = {
        "Baguette": "./img/Pan 01 Baguette.jpg",
        "Hogaza": "./img/Pan 02 Hogaza.jpg",
        "Bollo Rústico": "./img/Pan 03 Bollo Rústico.jpg",
        "Pan de molde con Cereales": "./img/Pan 04 Pan Molde Cereales.jpg",
        "Palmera chocolate": "./img/Bollo 01 Palmera Chocolate.jpg",
        "Croissant": "./img/Bollo 02 Croissant.jpg",
        "Napolitana chocolate": "./img/Bollo 03 Napolitanas chocolate.jpg",
        "Galletas cookies": "./img/Bollo 04 Galletas cookies.jpg",
        "Rollito Salchicha": "./img/Salado 01 Rollito Salchicha.jpg",
        "Pizzeta": "./img/Salado 02 Pizzeta.jpg",
        "Canape Salado": "./img/Salado 03 Canape Salado.jpg",
        "Empanada Pisto": "./img/Salado 04 Empanada Pisto.jpg"
    };

    const thumbOUT = {
        "Baguette": "./img/Pan 01 Baguette OUT.jpg",
        "Hogaza": "./img/Pan 02 Hogaza OUT.jpg",
        "Bollo Rústico": "./img/Pan 03 Bollo Rústico OUT.jpg",
        "Pan de molde con Cereales": "./img/Pan 04 Pan Molde Cereales OUT.jpg",
        "Palmera chocolate": "./img/Bollo 01 Palmera Chocolate OUT.jpg",
        "Croissant": "./img/Bollo 02 Croissant OUT.jpg",
        "Napolitana chocolate": "./img/Bollo 03 Napolitanas chocolate OUT.jpg",
        "Galletas cookies": "./img/Bollo 04 Galletas cookies OUT.jpg",
        "Rollito Salchicha": "./img/Salado 01 Rollito Salchicha OUT.jpg",
        "Pizzeta": "./img/Salado 02 Pizzeta OUT.jpg",
        "Canape Salado": "./img/Salado 03 Canape Salado OUT.jpg",
        "Empanada Pisto": "./img/Salado 04 Empanada Pisto OUT.jpg"
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