import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { httpClient } from './Components/HttpClient'
import { Container } from '@mui/material';
import '../App.css';

const Detail = () => {
  const params = useParams()
  const productid = params.productid
  const [data, setData] = useState({})
  const img = data.images

  useEffect(() => {
    httpClient.get(`https://dummyjson.com/products/${productid}`).then(result => {
      setData(result.data);
    })
  }, []);

  return (
    <Container maxWidth="lg">
      <h1 className="text-center">Detail about product {productid}</h1>
      <div className='text-center mx-auto'>
        {data.images ? <img src={data.images[0]} width={150} height={150}></img>:null}
      </div>
      <h1 className="text-center">Title: {data.title}</h1>
      <h2 className="text-center">Price: {data.price}</h2>
      <h3 className="text-center">Stock: {data.stock}</h3>
    </Container>
  )
}

export default Detail