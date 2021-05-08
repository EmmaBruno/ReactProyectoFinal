import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/Items/ItemDetail.jsx'
import loader from '../assets/Spin.svg'

const ItemDetailContainer = () => {

  const [Item, setItem] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Joystick",
        "image" : "/images/joystick.jpg",
        "price" : 5000,
        "stock" : 5,
        "category" : "joysticks",
        "description" : "Joystick original PS5."
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Auricular",
        "image" : "/images/auricular.png",
        "price" : 2000,
        "stock" : 4,
        "category" : "auriculares",
        "description" : "Auricular gamer con RGB."
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Teclado",
        "image" : "/images/teclado.jpg",
        "price" : 4000,
        "stock" : 7,
        "category" : "teclados",
        "description" : "Teaclado RGB retroiluminado."
      }
    ]

    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000 )
    })
    getItems.then(prods => {
      const prod = prods.find(prod => prod.id == `${id}`)
      setItem(prod)
    },(rej)=>{
      console.log("rechazada-->",rej)
    })
    .catch(()=>{
      console.log("Se produjo un error")
    })
    .finally(()=>{
      console.log("El control ha finalizado")
    })
  },[id])

  console.log(Item)

  return ( 
    <>
      <div className="container-fluid">
      <div className="row justify-content-center">
          {Item && Item.id ? <ItemDetail Item={Item}/> : <img src={loader} className="loader" alt="Loading"/>}
      </div>
    </div>
    </>
  )
}

export default ItemDetailContainer