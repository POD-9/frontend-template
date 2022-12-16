// import images
import Construction from '../../public/images/Construction.svg'

const UnderWorks = () => {
  return (
    <div className='p-10 w-full flex justify-center items-center gap-10'>
      <h1 className='text-5xl font-extrabold'>Page is under development</h1>
      <img className='max-w-[500px] py-5' src={Construction} alt='Unavailable' />
    </div>
  )
}

export default UnderWorks
