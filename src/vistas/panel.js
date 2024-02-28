import { bd } from "../bd/bd";

export const panel = {
  template: // html
   `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      
      </tbody>
    </table>
  `,
  script: () => {
    bd.forEach(panel => {
      if(panel.estado == 'pendiente'){
        document.querySelector('#tablaPendiente').innerHTML += `
        <tr>
          <td>${panel.codigo}</td>
          <td>${panel.fecha}</td>
          <td>${panel.aula}</td>
          <td>${panel.grupo}</td>
          <td>${panel.ordenador}</td>
          <td>${panel.descripcion}</td>
          <td>${panel.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `;
      }else{
        document.querySelector('#tablaResuelto').innerHTML += `
        <tr>
          <td>${panel.codigo}</td>
          <td>${panel.fecha}</td>
          <td>${panel.fechaResuelto}</td>
          <td>${panel.aula}</td>
          <td>${panel.grupo}</td>
          <td>${panel.ordenador}</td>
          <td>${panel.descripcion}</td>
          <td>${panel.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `;
      }
      
    });
  },
};
