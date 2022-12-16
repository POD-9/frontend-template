// import images
import Construction from '../../public/images/Construction.svg'

const UnderWorks = () => {
  return (
    <div className='w-full flex sm:justify-center sm:items-center sm:flex-row flex-col-reverse gap-10 py-10'>
      <h1 className='xl:text-5xl lg:text-4xl text-3xl font-extrabold text-center'>Page is under development</h1>
      <img className='xl:max-h-[500px] lg:max-h-[400px] max-h-[300px] py-5' src={Construction} alt='Unavailable' />
    </div>
  )
}

export default UnderWorks
