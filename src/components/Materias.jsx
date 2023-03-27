import React from 'react'

function Materias({enviar,Materias}) {
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
      Materias.map((a,index)=>
      <tr key={index}>
        <td>{a.Clave}</td>
        <td>{a.Materia}</td>
        <td>{a.Hora}</td>
        <td>{a.Grupo}</td>
        <td><button onClick={()=>enviar(a.Clave,a.Hora)} disabled={a.desactivado}>Cargar</button></td>
      </tr>       
      ) }
      </tbody>
   
    </table> 
  </div>
  )
}

export default Materias
