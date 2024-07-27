import React from 'react'

function ButtonsFuncion({msj,OnClick,className}) {
    const  Props = {
        name:OnClick,
        texto:msj,
        className:className,

        

    }
  return (

    <div>
        <button className={Props.className} onClick={Props.name}>{Props.texto } </button>
    </div>
  )
}

export default ButtonsFuncion