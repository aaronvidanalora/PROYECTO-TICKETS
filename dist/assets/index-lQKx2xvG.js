(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const i=[],b=[{codigo:"567812",fecha:"20/04/2023",aula:"L3",grupo:"DAW2",ordenador:"PC1",descripcion:"Problema con el software",alumno:"Carlos Pérez",estado:"pendiente"},{codigo:"789034",fecha:"22/04/2023",fechaResuelto:"23/04/2023",aula:"C2",grupo:"DIW1",ordenador:"PC2",descripcion:"No hay conexión a Internet",alumno:"Laura Gómez",estado:"resuelto"},{codigo:"456789",fecha:"25/04/2023",aula:"A4",grupo:"DIW2",ordenador:"PC4",descripcion:"Problema con la pantalla",alumno:"David López",estado:"pendiente"},{codigo:"987654",fecha:"28/04/2023",fechaResuelto:"12/12/2045",aula:"B5",grupo:"DAW1",ordenador:"PC5",descripcion:"No enciende la computadora",alumno:"Elena Ramírez",estado:"resuelto"}],c={template:`
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
  `,script:()=>{b.forEach(e=>{e.estado=="pendiente"?document.querySelector("#tablaPendiente").innerHTML+=`
        <tr>
          <td>${e.codigo}</td>
          <td>${e.fecha}</td>
          <td>${e.aula}</td>
          <td>${e.grupo}</td>
          <td>${e.ordenador}</td>
          <td>${e.descripcion}</td>
          <td>${e.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `:document.querySelector("#tablaResuelto").innerHTML+=`
        <tr>
          <td>${e.codigo}</td>
          <td>${e.fecha}</td>
          <td>${e.fechaResuelto}</td>
          <td>${e.aula}</td>
          <td>${e.grupo}</td>
          <td>${e.ordenador}</td>
          <td>${e.descripcion}</td>
          <td>${e.alumno}</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `})}},d={template:`
    <div class="container">
        <h1 class="mt-5 text-center">Registro</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
            <form action="" class="form border shadow-sm p-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input required id="nombre" type="text" class="form-control" />
                <label for="apellidos" class="form-label">Apellidos:</label>
                <input id="apellidos" type="text" class="form-control" />
                <label for="email" class="form-label">Email:</label>
                <input required id="email" type="text" class="form-control" />
                <label for="pass" class="form-label mt-3">Contraseña:</label>
                <input required minlength="6" id="pass" type="password" class="form-control" />
                <a class="btn btn-primary w-100 mt-3" id="enviar" href="#">Enviar</a>
            </form>
        </div>
    </div>
    `,script:()=>{document.querySelector("#enviar").addEventListener("click",e=>{e.preventDefault();const r=document.querySelector("#nombre").value.trim(),n=document.querySelector("#apellidos").value.trim(),a=document.querySelector("#email").value.trim(),t=document.querySelector("#pass").value.trim();if(!r||!n||!a||!t){alert("Por favor, completa todos los campos obligatorios.");return}const o={nombre:r,apellidos:n,email:a,password:t};let s=!1;if(i.forEach(u=>{u.email===a&&(s=!0)}),s)alert("Este correo ya ha sido usado");else{i.push(o);const u=JSON.stringify(i);localStorage.setItem("registroLocal",u),console.log(i),i?(alert("Tu usuario ha sido registrado correctamente"),document.querySelector("main").innerHTML=l.template,l.script()):alert("No se guardó correctamente en la base de datos")}})}},l={template:`
        <div class="container">
            <h1 class="mt-5 text-center">Inicia sesión</h1>
            <div class="m-5 mx-auto" style="max-width: 400px">
                <form action="" class="form border shadow-sm p-3">
                    <label for="email" class="form-label">Email:</label>
                    <input required id="email" type="email" class="form-control" />
                    <label for="pass" class="form-label mt-3">Contraseña:</label>
                    <input required minlength="6" id="pass" type="password" class="form-control" />
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">Recordar sesión</label>
                    </div>
                    <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                    <a class="btn btn-primary w-100 mt-3" id="inicioSesion" href="#">Iniciar sesión</a>
                </form>
                <a class="d-block mt-5 btn btn-secondary mx-auto" id="nuevo" href="#">¿Eres nuevo? Regístrate</a>
            </div>
        </div>
    `,script:()=>{document.querySelector("#inicioSesion").addEventListener("click",e=>{e.preventDefault();const r=document.querySelector("#email").value.trim(),n=document.querySelector("#pass").value.trim(),a=document.querySelector("#email").value;let t=null;i.forEach(o=>{o.email===r&&o.password===n&&(t=o)}),t?(alert("Inicio de sesión exitoso"),document.querySelector("main").innerHTML=c.template,c.script(),document.querySelector("#nombreUsuario").innerHTML=a,document.querySelector("#panel").classList.replace("d-none","d-inline-block"),document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block")):alert("Error en el inicio de sesión. Verifica tus credenciales.")}),document.querySelector("#nuevo").addEventListener("click",()=>{document.querySelector("main").innerHTML=d.template,d.script()}),document.querySelector("#cerrarSesion").addEventListener("click",()=>{document.querySelector("main").innerHTML=l.template,l.script(),document.querySelector("#panel").classList.add("d-none","d-inline-block"),document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none")})}},m={template:`
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
      <div>
        <button id="panel" class="btn btn-secondary ms-2 d-none">PANEL</button>
        <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
        <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
      </div>
      <div>
            <span id="nombreUsuario" class="d-none"></span>
            <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
        </div>
    </div>
  </nav>
    `,script:()=>{document.querySelector("#panel").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=c.template,c.script()}),document.querySelector("#login").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=l.template,l.script()}),document.querySelector("#registro").addEventListener("click",e=>{e.preventDefault(),document.querySelector("main").innerHTML=d.template,d.script()})}};document.querySelector("header").innerHTML=m.template;document.querySelector("main").innerHTML=d.template;m.script();c.script();
