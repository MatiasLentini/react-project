import React, { useState } from "react";

import "./checkoutPage.css"
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

import TextField from "@mui/material/TextField";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const styles = {
    containerShop: {
        textAlign: "center",
        paddingTop: 20,
    },
};

const initialState = {
    name: "",
    lastName: "",
};

const CheckoutPage = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchasesCollection"), {
            values,
        });
        setPurchaseID(docRef.id);
        setValues(initialState);
    };

    return (
        <div style={styles.containerShop}>
            <h1 style={{ color: "black" }}>Shop</h1>
            <form className="FormContainer" onSubmit={onSubmit}>
                <TextField
                    placeholder="Name"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Last Name"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Cell Phone Number"
                    style={{ margin: 10, width: 400 }}
                    name="cellphone number"
                    value={values.cellPhoneNumber}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Email"
                    style={{ margin: 10, width: 400 }}
                    name="email address"
                    value={values.email}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Confirm Email"
                    style={{ margin: 10, width: 400 }}
                    name="confirm email"
                    value={values.emailConfirm}
                    onChange={handleOnChange}
                />
                <button className="btnASendAction" type="submit">
                    SEND
                </button>
            </form>
            {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
        </div>
    );
};

export default CheckoutPage;
