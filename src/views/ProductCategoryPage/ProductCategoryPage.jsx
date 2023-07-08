import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ItemList from "../../components/ItemList/itemList";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ProductCategory = () => {
  const [productByCategory, setProductByCategory] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "Products"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductByCategory(docs);
    };
    getProduct();
  }, [category]);

  return (
    <div className="ItemListContainer">
      {productByCategory.map((data) => {
        return <Link className="Link"
          to={`/product-detail/${data.id}`}><ItemList className="CardContainer" product={data} key={data.id} /></Link>
      })}
    </div>
  );
}

export default ProductCategory;