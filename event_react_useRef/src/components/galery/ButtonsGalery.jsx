import React, { useState } from 'react'
import ButtonsImagen from './ButtonsImagen'
import Atanagildo from "../../../public/imgs/reyes/rey_atanagildo.png";
import Sisebuto from "../../../public/imgs/reyes/rey_sisebuto.png";
import Leogivildo from "../../../public/imgs/reyes/rey_leogivildo.png";
import Incognito from "../../../public/imgs/reyes/rey_incognito.png";
import ButtonsFuncion from '../eventos_onclisk_buttons/Utils/Buttonsfuncion.jsx/ButtonsFuncion';

function ButtonsGalery() {

    const [newImg,setNewImg]=useState(Incognito);
    const [newImg2,setNewImg2]=useState(Sisebuto);

    const handleClickImagen=()=>{
      setNewImg(newImg === Atanagildo ? Incognito : Atanagildo )

    }
    const handleClickImagen2=()=>{
      setNewImg2(newImg2 === Sisebuto ? Leogivildo : Sisebuto )

    }

  return (
    <>
    <div className='flex'>
        <ButtonsImagen imgSrc={newImg} ></ButtonsImagen>       
        <ButtonsImagen imgSrc={newImg2}> </ButtonsImagen>

    </div>
    <div className='flex gap-2'>
      
        <ButtonsFuncion msj={'Cambiar'} OnClick={handleClickImagen} className={'bg-red-300'} ></ButtonsFuncion> 
        <ButtonsFuncion msj={'Cambiar'} OnClick={handleClickImagen2} className={'bg-slate-400'}></ButtonsFuncion> 
    </div>
    </>
  )
}

export default ButtonsGalery