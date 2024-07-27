import React from 'react'

function Contador({text,event,className}) {
  return (
    <div className=''>

        <button onClick={event} className={className}>{text}</button>

    </div>
  )
};

export default Contador