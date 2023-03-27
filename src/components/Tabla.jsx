import React from 'react'

const Tabla=({lista,eliminar})=> {
  return (
    <div>
    <table className='content-table'><thead>
    <tr>
    <th>Clave</th>
      <th>Materia</th>
      <th>Hora</th>
      <th>Grupo</th>
      <th></th>
      </tr>
      </thead>
      <tbody>

      {
      lista.map((a,index)=>
      <tr key={index}>
        <td>{a.Clave}</td>
        <td>{a.Materia}</td>
        <td>{a.Hora}</td>
        <td>{a.Grupo}</td>
        <td><button onClick={()=>eliminar(a.Clave)}>Eliminar</button></td>
      </tr>       
      ) }
      </tbody>
   
    </table> 
  </div>
  )
}

export default Tabla
