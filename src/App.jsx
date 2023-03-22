import React, { Component } from 'react'
import Header from './components/Header'
import Formu from './components/Materias' 
import Tabla from './components/Tabla'
import Swal from 'sweetalert2'
import Materias from './components/Materias'

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      obj:{
        Clave:"",
        Materia:"",
        Calificacion:"",
      },
      lista:[],
      desactivado:false


      
    };


  };
  
  guardar=(e)=>{
    
  this.setState({
    ...this.state,
    obj:{
      ...this.state.obj,
      [e.target.name]:e.target.value
    }

  });

  }
   
  enviar=(e)=>{
    e.preventDefault();
    const {Clave,Materia,Calificacion} = this.state.obj;
    const vacios = (Clave.length===0 && Materia.length===0 && Calificacion.length===0 )  
    if(!vacios){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
      let temporal = this.state.lista;

      if(this.state.desactivado===true){
        temporal= temporal.filter(a=>a.Clave!==Clave)
      }

      this.setState({
        ...this.state,
       lista: [...temporal,this.state.obj],
       obj:{
         Clave:"",
         Materia:"",
         Calificacion:"",
       },
       desactivado:false
 
   });
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }

   

 
  
    }
    eliminar=(id)=>{  
      const temp = this.state.lista.filter(e=> e.Clave!==id)
      
      this.setState({
           ...this.state,
          lista: temp,
          obj:{
            Clave:"",
            Materia:"",
            Calificacion:"",
          },
          desactivado:false

    
      });
    
      }
  
      modificar=(id)=>{  
        const temp = this.state.lista.find(e=> e.Clave===id)
        
        this.setState({
          ...this.state,
         obj:{
           Clave: temp.Clave,
           Materia: temp.Materia,
           Calificacion: temp.Calificacion
         },
         desactivado:true

   
     });
   
        }
    

  


  render() {
    return (
      <>
          <Header imagen='	https://danielasanchez.github.io/EjercicioSemana7/static/media/logo.b5ce533abe2cfd32691b.jpg' />
          <div className='final'>
            <form onSubmit={this.enviar}>

          <div className='formulario'>
            <div className='f'><label>Clave</label><input className='in' type='text' placeholder='Ingrese la clave'  onChange={this.guardar} value={this.state.obj.Clave} name="Clave" disabled={this.state.desactivado}/> </div> 
            <div className='f'><label>Materia</label><input  className='in' placeholder='Ingrese el nombre de la materia'onChange={this.guardar} value={this.state.obj.Materia} name="Materia"/></div>
            <div className='f'><label>Materia</label><input type="number" min="1" max="100"  className='in' placeholder='Ingrese la calificacion'onChange={this.guardar} value={this.state.obj.Calificacion} name="Calificacion"/>    </div>      
            <button style={{backgroundColor:"#0d6efd", color:"white",height:"40px",width:"70px",borderRadius:"5px",borderColor:"#0d6efd"}}>Enviar</button>
          </div>

            </form>
          <Materias enviar={this.enviar}/>
          <div className='tabla'>
          <Tabla lista={this.state.lista} eliminar={this.eliminar} modificar={this.modificar}/>       
          </div>





          </div>
  
           
           
  
         
  
  
      </>
    )
  }
}


export default App
