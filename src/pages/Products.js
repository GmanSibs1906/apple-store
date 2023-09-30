import React, { useState, useEffect } from 'react';
import Product from "../componants/products/Product";
import Bag from "../componants/products/Bag";
import LeftSideBar from "../componants/products/LeftSideBar";
import { useParams } from "react-router-dom";
import { productsData } from "../assets/data/productData";

function Products() {

  // get category from url params
  const { category } = useParams();

  // asaign product object from params data in useEffect
  const [products, setProducts] = useState([]);

  // map through products data looking at category to display matching category products
  useEffect(() => {
  const matchingProducts = productsData.filter((item) => item.category === category);
  setProducts(matchingProducts);
}, [category]);

  // if other page clicked call fake store api and display data from electronics category
  useEffect(() => {
   if (category === "electronics") {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
}
  }, [category]);

  return (
    <div className=" w-full h-full bg-[#f1f1f1] flex relative ">
      {/* left icon bar with icons */}
      <LeftSideBar />

      {/* center with search and products */}
      <div className=" m-[100px] flex flex-col max-w-[70%]  ">
        <div className="flex w-full items-center justify-center h-[100px] p-[10px] mb-[30px]">
          {/* search */}
          <div className="flex flex-col justify-start p-[8px] w-[380px]">
            <p className=" pl-[3px] text-[#454545] text-[12px] ">Search Item</p>
            <input
              type="text"
              className="flex h-[35px] rounded-md text-[13px] py-[5px] px-[10px]"
              placeholder=" iPhone 15... "
            />
          </div>
        </div>

        {/* products */}
        <div className="flex w-full flex-wrap justify-evenly ">
       {
        products.map((product)=>
        <Product  key={product.id} id={product.id} title={product.title} image={product.image} model={product.model} price={product.price}/>
        )
       }
          
        </div>
      </div>

      {/* right side with cart products */}
      <Bag />
    </div>
  );
}

export default Products;
