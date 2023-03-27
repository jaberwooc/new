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
      Materias:[{"Clave":"ACD","Materia":"INGLES","Hora":"7","Grupo":"7ab","desactivado":false},
      {"Clave":"ACD","Materia":"INGLES","Hora":"8","Grupo":"7ab","desactivado":false},
      {"Clave":"ACD1","Materia":"INGLES","Hora":"7","Grupo":"7ab","desactivado":false},
      {"Clave":"ACD2","Materia":"INGLES","Hora":"7","Grupo":"7ab","desactivado":false}],
      lista:[],

      
    };

  };
  

   
  enviar=(id,Hora)=>{
    let temporal = this.state.Materias;
    const temp =  this.state.lista.filter((a)=>a.Clave===id)
    const temp2 =  this.state.Materias.filter((a)=>a.Clave===id && a.Hora===Hora)
    this.setState({
      ...this.state,
      Materias: [...temporal,{"Clave":"ACD","Materia":"INGLES","Hora":"7","Grupo":"7ab","desactivado":true}],
  });
  console.log(temp.Clave )


    if(temp.Clave !== id){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'agregado',
        showConfirmButton: false,
        timer: 1500
      })
      let temporal = this.state.lista;
      this.setState({
        ...this.state,
        lista: [...temporal,...temp2],
    });
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Materia ya cargada en otro grupo',
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
    
      });
    
      }
  


  


  render() {
    return (
      <>
          <Header imagen='	https://danielasanchez.github.io/EjercicioSemana7/static/media/logo.b5ce533abe2cfd32691b.jpg' />
          <div className='final'>

        
          <Materias Materias={this.state.Materias} enviar={this.enviar} desactivado={this.state.desactivado}/>
          <div className='tabla'>
          <Tabla lista={this.state.lista} eliminar={this.eliminar} modificar={this.modificar}/>       
          </div>





          </div>
  
           
           
  
         
  
  
      </>
    )
  }
}


export default App
