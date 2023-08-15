import React from 'react'
import Card from './Card';
import InteriorImg from "../ASSETS/interior.jpeg"
import Construccion from "../ASSETS/foto2.jpeg"
import Cristaleria from "../ASSETS/CRISTALERIA.jpeg"
import Aberturas from "../ASSETS/Aberturas.jpeg"
import PostVenta from "../ASSETS/post venta.png"
import Contacto from "../ASSETS/contacto.png"



const cards = [
  {
    id:1,
    title:"Interior",
    imagen: InteriorImg,
    url: "../pages/Interior"
    
  },
  {
    id:2,
    title:"Construccion",
    imagen: Construccion,
    url: "../pages/Construccion"

  },
  {
    id:3,
    title:"Cristaleria",
    imagen: Cristaleria,
    url: "../pages/Cristaleria.js"
  },
  {
    id:4,
    title:"Aberturas",
    imagen: Aberturas,
    url: "../pages/Aberturas.js"
  },
  {
    id:5,
    title:"Post-Venta",
    imagen: PostVenta,
    url: "../pages/Post.js"
  },
  {
    id:5,
    title:"Contacto",
    imagen: Contacto,
    url: "../pages/Contacto.js"
  }
  
]

function Cards(){
  return (
    <div className='container'>
      <div className="row d-flex m-2 p-3 g-2 justify-content-center aling-items-center">
        {
          cards.map(card => (
            <div className="col-md-4" key={card.id}>
             <Card title={card.title} imageSource={card.imagen} url={card.url} />
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default Cards;
