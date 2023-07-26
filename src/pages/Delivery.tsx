import React, { useState, useEffect } from 'react';
import AddressForm from '../components/AddressForm';

const Delivery = (props: any) => {
    return (
        <>
          <AddressForm onSubmit={props.onSubmit} default={props.default} id="delivery-form" />
        </>
    )
};

export default Delivery;