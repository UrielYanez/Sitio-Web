// Esperamos a que el HTML termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los enlaces de las pestañas y los contenedores de contenido
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Recorremos cada enlace para agregarle el evento de "click"
    tabLinks.forEach(link => {
        link.addEventListener('click', (evento) => {
            // Evitamos que la página salte hacia arriba al hacer clic en el enlace "#"
            evento.preventDefault(); 

            // 1. Limpiamos el estado activo de TODOS los enlaces y contenidos
            tabLinks.forEach(item => item.classList.remove('activo'));
            tabContents.forEach(content => content.classList.remove('activo'));

            // 2. Le agregamos la clase "activo" al enlace específico que el usuario clickeó
            link.classList.add('activo');

            // 3. Obtenemos el ID de la sección objetivo desde el atributo data-target
            const targetId = link.getAttribute('data-target');
            
            // 4. Mostramos el contenedor correspondiente agregándole la clase "activo"
            document.getElementById(targetId).classList.add('activo');
        });
    });

    // --- LÓGICA DE LOS CARRUSELES AUTOMÁTICOS ---
    // Seleccionamos todos los contenedores que NO tienen la clase 'unica'
    const carruseles = document.querySelectorAll('.contenedor-imagen:not(.unica)');

    carruseles.forEach(carrusel => {
        const imagenes = carrusel.querySelectorAll('img');
        if (imagenes.length <= 1) return; // Si no hay más de 1 imagen, no hace nada

        let indiceActual = 0;

        // Intervalo para cambiar de imagen cada 3 segundos (3000ms)
        setInterval(() => {
            // 1. Ocultamos la imagen actual
            imagenes[indiceActual].classList.remove('activa');
            
            // 2. Calculamos la siguiente (si llega al final, regresa a 0)
            indiceActual = (indiceActual + 1) % imagenes.length;
            
            // 3. Mostramos la nueva imagen
            imagenes[indiceActual].classList.add('activa');
        }, 3000); 
    });
});