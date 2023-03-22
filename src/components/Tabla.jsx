import React from 'react'

const Tabla=({lista,eliminar,modificar})=> {
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

      {
      lista.map((a,index)=>
      <tr key={index}>
        <td>{a.Clave}</td>
        <td>{a.Materia}</td>
        <td>{a.Calificacion}</td>
        <td><button onClick={()=>eliminar(a.Clave)}>Eliminar</button></td>
        <td><button onClick={()=>modificar(a.Clave)}>Modificar</button></td>
      </tr>       
      ) }
      </tbody>
   
    </table> 
  </div>
  )
}

export default Tabla
