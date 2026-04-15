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
});