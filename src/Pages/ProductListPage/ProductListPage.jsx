import "./style.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Actions/productAction";
import Layout from "../../Components/Layout/Layout";

function ProductListPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const productByPrice = useSelector((state) => state.product.productByPrice);

  useEffect(() => {
    dispatch(getAllProduct(slug));
  }, [dispatch, slug]);

  if (!productByPrice) return;

  return (
    <Layout>
      {Object.keys(productByPrice).map((key, i) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <h3>
                {slug} Mobile {key}
              </h3>
              <button>View All</button>
            </div>
            <div style={{ display: "flex" }}>
              {productByPrice[key].map((product) => {
                console.log(product);
                return (
                  <div className="product">
                    <div className="imgProduct">
                      <img
                        src="https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70"
                        alt=""
                      />
                    </div>
                    <div className="detailsProduct">
                      <h5>{product.name}</h5>
                      <div>
                        <span>4.3</span>&nbsp;
                        <span>(3353)</span>
                      </div>
                      <div className="productPrice">5000</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}

export default ProductListPage;
