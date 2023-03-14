document.addEventListener("DOMContentLoaded", function() {
    const equiposGrid = document.querySelector('.equipos-grid');
    const equiposInfo = document.querySelector('.equipos-info');
    const equiposItems = document.querySelectorAll('.equipos-item');
  
    equiposItems.forEach(item => {
      item.addEventListener('click', () => {
        const nombre = item.dataset.nombre;
        const precio = item.dataset.precio;
        const descripcion = item.dataset.descripcion;
  
        equiposGrid.style.display = 'none';
        equiposInfo.style.display = 'table';
  
        const tbody = equiposInfo.querySelector('tbody');
        tbody.innerHTML = `
          <tr>
            <td>${nombre}</td>
            <td>${descripcion}</td>
            <td>${precio}</td>
          </tr>
        `;
      });
    });
  
    const volverBtn = document.querySelector('#volver-btn');
  
  });
  