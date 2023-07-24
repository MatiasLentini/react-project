import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Link } from "react-router-dom";

import "./ItemListContainer.css"

// FIREBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
    const [productsData, setProducsData] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "Products"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducsData(docs);
        };
        getProducts();
    }, []);


    return (
        <div className="ItemListContainer">
            {productsData.map((data) => {
                return (
                    <Link className="Link"
                        to={`/product-detail/${data.id}`} key={data.id}>
                        <ItemList className="CardContainer" product={data} />
                    </Link>
                ); 
            })}
        </div>
    )
};

export default ItemListContainer;

