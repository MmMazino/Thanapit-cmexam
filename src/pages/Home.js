import axios from 'axios'
import React, { useState, useEffect, Component } from 'react'
import '../App.css';
import Table from './Components/Table';
import { httpClient } from './Components/HttpClient'
import { Container } from '@mui/material';


export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Component constructor");
  }
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Homepage />
          <UseMultiply e={10} />
        </Container>
      </div>
    )
  }
  componentWillMount() {
    console.log('Component Will MOUNT!')
  }
  componentDidMount() {
    console.log('Component Did MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component Will Recieve Props!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component Will UNMOUNT!')
  }
}

const Homepage = () => {
  const [data, setData] = useState({ products: [] })
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    httpClient.get('https://dummyjson.com/products').then(result => {
      setData(result.data);
    })
  }, []);

  const search = (data) => {
    if (query.length >= 1) {
      return data.filter((item) => item.title.toLowerCase().includes(query))
    }
    if (filter === "Price1000") {
      return data.filter((item) => item.price > 1000)
    }
    if (filter === "Rate") {
      return data.sort((a, b) => b.rating - a.rating)
    }
    else {
      return data
    }
  }

  return (
    <div>
      <div className="div-search">
        <input className="search" onChange={e => setQuery(e.target.value)} value={query}></input>
        <select className="search" onChange={e => setFilter(e.target.value)}>
          <option value="All">ทั้งหมด</option>
          <option value="Price1000">ราคามากว่า 1000</option>
          <option value="Priceperone">แสดงราคารวมต่อชิ้น</option>
          <option value="Rate">เรียงเรตติ้ง</option>
          <option value="Pricetotal">แสดงราคารวมทั้งหมด</option>
        </select>
      </div>
      <Table data={search(data.products)}/>
    </div>
  )
}

const UseMultiply = () => {
  const [value, setValue] = useState()
  const multiply = value * 10

  return (
    <div>
      <h3>Multiply</h3>
      <input value={value} onChange={e => setValue(e.target.value)}></input>
      <p>
        Value Multiply = {multiply}
      </p>
    </div>
  )
}

