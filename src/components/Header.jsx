import React from 'react'

const Header = (props) => {
  const {imagen} = props
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:'50px',
    

    }}>
      <img src={imagen} style={{width:600, height: 200, marginTop:60}}/>
    </div>

  )
}

export default Header
