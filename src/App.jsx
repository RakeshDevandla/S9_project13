import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.products.filter(
          (prod) => prod.price >= 10
        )
        setProducts(filteredProducts)
      })
      .catch((err) => console.error(err))
  }, [])

  const openImage = (url) => {
    window.open(url, "_blank")
  }

  return (
    <>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Rating</th>
            <th>Return Policy</th>
            <th>Shipping Info</th>
            <th>Thumbnail</th>
          </tr>
        </thead>

        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>{prod.price}</td>
              <td>{prod.rating}</td>
              <td>{prod.returnPolicy}</td>
              <td>{prod.shippingInformation}</td>
              <td>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  width="60"
                  style={{ cursor: "pointer" }}
                  onClick={() => openImage(prod.thumbnail)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
