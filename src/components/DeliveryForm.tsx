import React, { useState, useEffect } from 'react';

const DeliveryForm = (props: any) => {
    return (
        <>
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" id="delivery-form" onSubmit={props.onSubmit}
    >
      <label className="block mb-6">
        <span className="text-gray-700">Your name</span><span className="text-red-500">*</span>
        <input
          name="name"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
          required
          defaultValue={props.default.name}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Address line 1</span><span className="text-red-500">*</span>
        <input
          name="address1"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          required
          defaultValue={props.default.address1}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Address line 2</span>
        <input
          name="address2"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          defaultValue={props.default.address2}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">City</span><span className="text-red-500">*</span>
        <input
          name="city"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          required
          defaultValue={props.default.city}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">State/Province</span>
        <input
          name="state"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          defaultValue={props.default.state}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Zip/Postal code</span><span className="text-red-500">*</span>
        <input
          name="zip"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          required
          defaultValue={props.default.zip}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Country</span><span className="text-red-500">*</span>
        <input
          name="country"
          type="text"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          required
          defaultValue={props.default.country}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Telephone</span><span className="text-red-500">*</span>
        <input
          name="telephone"
          type="tel"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder=""
          pattern="{[0-9]}{8,15}}"
          required
          defaultValue={props.default.telephone}
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700">Delivery information</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="floor/door lock code/etc."
          defaultValue={props.default.message}
        ></textarea>
      </label>
    </form>
  </div>

        </>
    )
};

export default DeliveryForm;