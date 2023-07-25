import { ColorRing } from 'react-loader-spinner'

const HomeCard = () => {
  return (
    <>
      <div className='h-screen w-full grid place-items-center bg-white'>
        <ColorRing
          visible={true}
          height='140'
          width='140'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </>
  )
}

export default HomeCard
