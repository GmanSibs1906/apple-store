import React, { useState, useEffect } from "react";
import Bag from "../componants/products/Bag";
import LeftSideBar from "../componants/products/LeftSideBar";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import RelatedProducts from "../componants/products/RelatedProducts";
import { productsData } from "../assets/data/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

function Product() {

  const dispatch = useDispatch();

  // get id from url params
  const { id } = useParams();

  // convert id from string to number
  const numId = parseInt(id);

  // store product to be displayed
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [apiProducts, setApiProducts] = useState([]);

  // get category from product
  const category = product.category;

  // capture product to be displayed
 useEffect(() => {
  const fetchData = async () => {
    if (numId < 100) {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/electronics");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiProducts(data);
        const productToDisplay = data.find((item) => item.id === numId);
        setProduct(productToDisplay);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      const productToDisplay = productsData.find(
        (product) => product.id === numId
      );
      setProduct(productToDisplay);
    }
  };

  fetchData();
}, [numId, apiProducts]);



// caputure similar products
  useEffect(() => {
    const similarProduct = productsData.filter(
      (product) => product.category === category
    );
    setRelatedProducts(similarProduct);
  }, [id, category]);

  // distructure rating object to access rate and count
  const { rating } = product;

  return (
    <div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex relative ">
      {/* left icon bar with icons */}
      <LeftSideBar />
      <div className="flex flex-col max-w-[70%] ml-[110px] pt-[30px] px-[20px] ">
        <Link to={`/products/${product.category}`}>
          <div className="flex justify-start items-center">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[12px] ml-[5px] "
            />
            <span className="ml-[10px] text-[12px]">{product.category}</span>
          </div>
        </Link>
        {/* middle */}
        <div className="flex w-[68vw] mt-[20px] ">
          {/* relaled */}
          <div className="flex flex-col w-[100px] items-center ">
            Related
            <div className="flex flex-col w-[100px] items-center">
              {relatedProducts.slice(0, 3).map((item) => (
                <RelatedProducts
                  key={item.id}
                  id={item.id}
                  image={item.image}
                />
              ))}
            </div>
          </div>
          {/* main product details */}
          <div className="flex w-[60vw]  ">
            <div className="flex items-center justify-center bg-white w-[280px] h-[355px] rounded-[15px]">
              <img
                src={product.image}
                alt=""
                className="w-[220px] object-contain"
              />
            </div>
            <div className="flex flex-col w-[35vw] ml-auto mt-[5px] ">
              <h1 className="text-[35px] font-semibold"> {product.title} </h1>
              <h3 className="text-[25px] text-[#7e7e7e]">{product.model}</h3>
              <div className="flex items-center my-[15px]">
                {rating && (
                  <>
                    {[...Array(Math.round(rating.rate))].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-[17px] mr-[5px]"
                      />
                    ))}
                  </>
                )}
                <span className="flex ml-[10px]">
                  {rating ? rating.rate : null}
                </span>
                <span className="flex ml-[30px]">
                  Ratings: {rating ? rating.count : null}
                </span>
              </div>
              <div className="text-[25px] font-semibold">R{product.price}</div>
              <p className="my-[20px]">{product.description}</p>
              <div className="flex w-full justify-end">
                <button className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-black rounded-[9px] ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
              dispatch(addToCart(product));
            }}
                  >
                    <path
                      d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z"
                      fill="white"
                    />
                  </svg>
                  <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
                    Add to Bag
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[100%] justify-center ">
          <hr className="border border-[#454545] w-[800vw] mt-[60px] mb-[30px]" />
        </div>
        <div className="flex w-[100%] flex-col">
          <h3 className="text-[18px] underline">About Project</h3>
          <p className="my-[20px] text-[14px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {/* right side with cart products */}
      <Bag />
    </div>
  );
}

export default Product;
