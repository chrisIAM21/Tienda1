const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');

const colorSeleccionado = producto.querySelector('#propiedad-color');

thumbs.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG'){
        // Obtenemos la ruta del thumb seleccionado
        const ubicacionImagen = e.target.src;
        console.log(ubicacionImagen);

        // Obtenemos el indice de el ultimo "/" de la cadena de texto (ubicacion)
        const lastIndex = ubicacionImagen.lastIndexOf('/');
        // Obtenemos el nombre de la imágen, en este metodo le dejamos el "/"
        const nombreImagen = ubicacionImagen.substring(lastIndex);
        console.log(nombreImagen);

        // Cambiamos la imagen principal
        productoImagen.src = `./img/tennis${nombreImagen}`;
        // const nombreImagen = ubicacionImagen.substring(lastIndex + 1);
        // productoImagen.src = `./img/tennis/${nombreImagen}`;
    }

});

colorSeleccionado.addEventListener('click', (e) => {
    let color;
    if (e.target.tagName === 'INPUT'){
        color = e.target.value;
    }
    productoImagen.src = `./img/tennis/${color}.jpg`;
})
