import React from 'react'
import { useState  } from "react";
import Contador from './eventos_onclisk_buttons/Contador';

function Buttons() {
  const [count, setCount] = useState(0)

  const Aumentar=()=>{
    setCount(prev => prev +=1);
  }
  const Disminuir=()=>{
    setCount(prev => prev -=1)
  }

  return (

    <div>

        <h1 className="text-3xl font-bold text-blue-600">
            Hola, Tailwind CSS!
        </h1>
        <div className='flex'>
        <Contador event={Aumentar} count={count} text={'Aumentar'} className={'style'} ></Contador>
        <Contador event={Disminuir} count={count} text={'Disminuir'} className={'style1'} ></Contador>
        </div>
        <h1>{count}</h1>


        


    </div>
  )
}

export default Buttons