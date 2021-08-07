document
  .getElementById("formRegistros")
  .addEventListener("submit", guardarRegistros);
  // HTMLFormElement.reset();

function guardarRegistros(e) {
  let dpi = document.getElementById("dpi").value;
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let codigo_empleado = document.getElementById("codigo_empleado").value;
  let puesto = document.getElementById("puesto").value;
  let salario = document.getElementById("salario").value

  const alumno = {
    dpi,
    nombre,
    direccion,
    telefono,
    email,
    codigo_empleado,
    puesto,
    salario
  };

  if (localStorage.getItem("alumnos") === null) {
    let alumnos = [];
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  } else {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }

  mostrarRegistros();
  document.getElementById('formRegistros').reset();
  document.getElementById('inputP').reset();
  e.preventDefault();
}

function mostrarRegistros() {
  let alumnos = JSON.parse(localStorage.getItem("alumnos"));
  let alumnoView = document.getElementById('Alumnos');
  alumnoView.innerHTML = '';
  
  for(let i = 0; i < alumnos.length; i++){
      let dpi = alumnos[i].dpi;
      let nombre = alumnos[i].nombre;
      let direccion = alumnos[i].direccion;
      let telefono = alumnos[i].telefono;
      let email = alumnos[i].email;
      let codigo_empleado = alumnos[i].codigo_empleado;
      let puesto = alumnos[i].puesto;
      let salario = alumnos[i].salario;

      alumnoView.innerHTML += `<div class="card mb-3">
      
        <div class="card-body">
        <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">DPI</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Codigo Empleado</th>
                <th scope="col">Puesto</th>
                <th scope="col">Salario</th>
                <th scope="col">Opcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${dpi}</td>
                <td>${nombre}</td>
                <td>${direccion}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>${codigo_empleado}</td>
                <td>${puesto}</td>
                <td>${salario}</td>
                <td class="opcion">
                  <div class="container-btn">
                    <a href="#" onclick="eliminarRegistro('${dpi}')" class="btn-1">Eliminar</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;
  }
};

function eliminarRegistro(dpi){
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].dpi == dpi){
            alumnos.splice(i, 1);
        }
    }
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
    mostrarRegistros();
}

mostrarRegistros();