import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/Items/ItemList.jsx'
import '../css/ItemListContainer.css'
import loader from '../assets/Spin.svg'

const ItemListContainer = () => {
  const [arrayItems, setArrayItems] = useState([])
  const {category} = useParams()
  let itemsToShow = []

  useEffect(()=>{
    const products = [
      {
        "id" : 1,
        "code" : "P0001",
        "name" : "Joystick",
        "image" : "/images/joystick.jpg",
        "price" : 5000,
        "stock" : 5,
        "category" : "joystick"
      },{
        "id" : 2,
        "code" : "P0002",
        "name" : "Auricular",
        "image" : "/images/auricular.png",
        "price" : 2000,
        "stock" : 4,
        "category" : "auricular"
      },{
        "id" : 3,
        "code" : "P0003",
        "name" : "Teclado",
        "image" : "/images/teclado.jpg",
        "price" : 4000,
        "stock" : 7,
        "category" : "teclado"
      }
    ]
  
    const lists = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000 )
    })
    lists.then((res) => {
      setArrayItems(res)
    },(rej)=>{
      console.log("rechazada-->",rej)
    })
    .catch(()=>{
      console.log("Se produjo un error")
    })
    .finally(()=>{
      console.log("El control ha finalizado")
    })
  },[])

    if (category) {
      itemsToShow = arrayItems.filter(i => i.category === `${category}`)
    } else {
      itemsToShow = arrayItems
    }


  return ( 
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div>
          <h1 className="title">NUESTROS PRODUCTOS</h1> 
            <h2>Te invitamos a conocer nuestro catálogo de productos.<br/>Las mejores marcas y con garantía por 12 meses.</h2>
          </div>
        </div>
        <div className="row justify-content-center">
            {itemsToShow.length > 0 ? <ItemList products={itemsToShow}/> : <img src={loader} className="loader" alt="Loading"/>}
          </div>
        </div>
    </>
  )
}

export default ItemListContainer