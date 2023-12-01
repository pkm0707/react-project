import { Addcolor } from './make-the-route/Addcolor';
import './App.css';
import { ProductList} from './make-the-route/ProductList';
import {Routes,Route,Link, Navigate} from "react-router-dom"
import { Home } from './make-the-route/Home';
import { ProfileLike } from './make-the-route/Profilelike';
import { ProductDetails } from './make-the-route/ProductDetails';
import { useState } from 'react';
import { initproduct } from './make-the-route/ProductList';
import { Notfound } from './make-the-route/Notfound';
import { AddProduct } from './make-the-route/Addproduct';
function App() {
  // lifting the state up => lifted from child to parent
  const[productList,setProductList]=useState(initproduct)
  return (
    <div className="App">
      <nav>
        <ul style={{listStyleType:"none",display:"inline-block"}}>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/products'>Product List</Link></li>
          <li><Link to ='/products/add'>Add Product</Link></li>
          <li><Link to ='/add-color'>Add Color</Link></li>
          <li><Link to ='/profile'>Profiles</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList productList={productList}/>}/>
        <Route path="/products/:productid" element={<ProductDetails productList={productList}/>}/>
        <Route path="/products/add" element={<AddProduct productList={productList} setProductList={setProductList}/>}/>
        <Route path="/items" element={<Navigate replace to="./products"/>}/>
        <Route path="/add-color" element={<Addcolor/>}/>
        <Route path="/profile" element={<ProfileLike/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}
export default App;
