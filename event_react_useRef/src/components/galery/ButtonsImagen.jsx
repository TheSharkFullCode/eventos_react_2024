import React from 'react'

function ButtonsImagen({imgSrc,color,nombre,precio,setTotal,className}) {  

  const Props=[
    {
      name:nombre,
      color:color,
      className:'style',
      precio:precio,
      total:setTotal,
    },
    {
      name:nombre,
      color:color,
      className:'style',
      precio:precio,
      total:setTotal,
    },

  ];

  const Comprar=(event)=>{
    // alert('has hecho click')
    setTotal((prevTotal)=> prevTotal + precio )
    event.target.parentNode.style.display = 'none'
  }
  return (
    <>
    
    <div className='' style={{background:color}}>
        <img src={imgSrc}></img> 
        <span className={className}>{Props[0].name}</span> <br />
        <span className='text-[white]'>{Props[0].precio}€</span><br />
        <button className='bg-blue-300'   onClick={Comprar} >reservar</button>  
    </div>
   
    </>
  )
}

export default ButtonsImagen