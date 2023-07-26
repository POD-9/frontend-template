import React, { useState, useEffect } from 'react';
import DeliveryForm from '../components/DeliveryForm';

const Delivery = (props: any) => {
    return (
        <>
          <DeliveryForm onSubmit={props.onSubmit} default={props.default}/>
        </>
    )
};

export default Delivery;