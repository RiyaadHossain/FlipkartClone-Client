import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../Actions/productAction";
import Layout from "../../Components/Layout/Layout";

function ProductListPage() {

    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getAllProduct())
    }, [dispatch]);
    
  return <Layout>ProductListPage</Layout>;
}

export default ProductListPage;
