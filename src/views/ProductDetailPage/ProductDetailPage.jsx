import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "../../components/ItemDetail/ItemDetail.css"

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const ProductDetailPage = () => {
    const [ProductDetailData, setProductDetailData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getProductDetail = async () => {
            const q = query(collection(db, "Products"), where(documentId(), "==", id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductDetailData(docs);
        };
        getProductDetail();
    });

    return (
        <div className="ItemDetailContainer">
            {ProductDetailData.map((data) => {
                return <ItemDetail className="CardContainer" product={data} key={data.id} />
                    ;
            })}
        </div>
    )

};

export default ProductDetailPage;
