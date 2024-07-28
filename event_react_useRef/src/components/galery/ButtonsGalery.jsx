import React, { useState } from 'react'
import ButtonsImagen from './ButtonsImagen'
import Atanagildo from "../../../public/imgs/reyes/rey_atanagildo.png";
import Sisebuto from "../../../public/imgs/reyes/rey_sisebuto.png";
import Ervigio from "../../../public/imgs/reyes/rey_ervigio.png";
import Recesvinto from "../../../public/imgs/reyes/rey_recesvinto.png";
import Teodorico from "../../../public/imgs/reyes/rey_teodorico.png";
import Ataulfo from "../../../public/imgs/reyes/rey_ataulfo.png";
import Leogivildo from "../../../public/imgs/reyes/rey_leogivildo.png";
import Incognito from "../../../public/imgs/reyes/rey_incognito.png";
import ButtonsFuncion from '../eventos_onclisk_buttons/Utils/Buttonsfuncion.jsx/ButtonsFuncion';

function ButtonsGalery() {

    const [newImg,setNewImg]=useState(Incognito);
    const [newImg2,setNewImg2]=useState(Sisebuto);
    const [total,setTotal]=useState(0);

  

    const reyes=[
      {
        nombre:"Atanagildo",
        color:"darkolivegreen",
        precio:178
      },{
        nombre:"Ervigio",
        color:"crimson",
        precio:169
      },{
        nombre:"Ataúlfo",
        color:"peru",
        precio:81
      },{
        nombre:"Leogivildo",
        color:"darkmagenta",
        precio:126
      },{
        nombre:"Recesvinto",
        color:"royalblue",
        precio:141
      },{
        nombre:"Sisebuto",
        color:"teal",
        precio:69
      }
    ]

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
    <div className='flex  gap-4'>
      
        <ButtonsFuncion msj={'Cambiar'} OnClick={handleClickImagen} className={'bg-red-300'} ></ButtonsFuncion> 
        <ButtonsFuncion msj={'Cambiar'} OnClick={handleClickImagen2} className={'bg-slate-400'}></ButtonsFuncion> 
    </div>
    <div>
      <h1> El valor de la cena  a pagar  es: {total}€</h1>
    </div>

    <div className='flex flex-wrap'>
      <ButtonsImagen imgSrc={Ervigio} color={reyes[1].color} nombre={reyes[1].nombre} precio={reyes[1].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      <ButtonsImagen imgSrc={Recesvinto} color={reyes[4].color} nombre={reyes[4].nombre} precio={reyes[4].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      <ButtonsImagen imgSrc={Ataulfo} color={reyes[2].color} nombre={reyes[2].nombre} precio={reyes[2].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      <ButtonsImagen imgSrc={Sisebuto} color={reyes[5].color} nombre={reyes[5].nombre} precio={reyes[5].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      <ButtonsImagen imgSrc={Atanagildo} color={reyes[0].color} nombre={reyes[0].nombre} precio={reyes[0].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      <ButtonsImagen imgSrc={Leogivildo} color={reyes[3].color} nombre={reyes[3].nombre} precio={reyes[3].precio}  setTotal={setTotal} className={'style0'}> </ButtonsImagen>
      

    </div>
    </>
  )
}

export default ButtonsGalery