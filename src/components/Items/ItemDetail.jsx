import React from 'react'
import '../../css/ItemDetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({Item}) => {
  
  return(
    <>
          <div className="row card-detail d-flex align-items-center">
            <img className="image-product col-lg-5 col-md-5 col-sm-5 col-12" src={Item.image} alt="Imagen del producto"/>
            <div className="col-lg-5 col-md-5 col-sm-5 col-12">
              <h2>{Item.code} - {Item.name}</h2>
              <p className="description">{Item.description}</p>
              <h2>$ {Item.price}</h2>
              <ItemCount stock={Item.stock}/>
            </div>
          </div>
    </>
  )
}

export default ItemDetail