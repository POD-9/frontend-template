

const DeliveryDetails = ( props: any ) => {
    return (
        <div className='md:w-full w-full xl:pl-10 md:ml-6 ml-0 p-2 border-2 md:border-transparent rounded-lg border-gray-300'>
        <div className='w-full flex flex-col'>
          <h2 className='text-2xl font-extrabold mb-4'>Delivery to</h2>
          <span className='font-bold'>{props.details.name}</span>
          <span className='font-bold'>{props.details.address1}</span>
          <span className='font-bold'>{props.details.city}</span>
          <span className='font-bold'>{props.details.zip}</span>
          <span className='font-bold'>{props.details.country}</span>
          </div>
      </div>
);
}

export default DeliveryDetails;