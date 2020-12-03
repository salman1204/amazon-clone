import React, { useEffect, useState } from 'react';
import './Orders.css'
import { useDataLayerValue } from "../../DataLayer";
import {db} from '../../firebaseConfig'
import Order from '../Order/Order';

const Orders = () => {
    const [{ basket, user }, dispatch] = useDataLayerValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=> {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map( doc=> ({
                       id: doc.id,
                       data: doc.data()  
                })) )
            ))
        }
        else {
            setOrders([]);
        }
    })
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__order">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    );
};

export default Orders;