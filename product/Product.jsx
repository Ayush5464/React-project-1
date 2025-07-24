import axios from "axios";
import "../product/Product.css";
import React, { useEffect, useState } from "react";

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await axios.get("https://fakestoreapi.com/products");
      setProductList(product.data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {productList.map((data) => (
          <div className="col-md-4 mb-4" key={data.id}>
            <div className="card product-card">
              <img src={data.image} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h6 className="card-title">Category: {data.category}</h6>
                <p className="card-text">{data.description.slice(0, 100)}...</p>
                <a href="#" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
