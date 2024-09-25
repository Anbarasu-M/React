import ProductCard from "../components/productCard"
import {Fragment, useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"
// import React from "react";
export default function Home() {
  const [products,setProducts] = useState([])
  const [searchParams, setsearchParams] = useSearchParams()

  console.log(searchParams)
  useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then((res)=>res.json())
        .then((res) => setProducts(res.products))
  },[searchParams])
    return <Fragment>
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
              <div className="row">
                {products.map(product=><ProductCard product={product}/>)}
              </div>
            </section>
    </Fragment>
    }