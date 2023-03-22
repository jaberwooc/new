import React from 'react'

function Materias({enviar}) {
  return (
    <div>
    <table className='content-table'><thead>
    <tr>
      <th>Clave</th>
      <th>Materia</th>
      <th>Calificacion</th>
      <th></th>
      <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td >ASX</td>
        <td>Matematicas</td>
        <td>10</td>
        <td><button onClick={()=> enviar}>Eliminar</button></td>
      </tr>       
      </tbody>
   
    </table> 
  </div>
  )
}

export default Materias
