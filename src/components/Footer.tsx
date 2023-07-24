// importing icons
import BrandLogo from '/images/BrandLogo.jpeg'

const Footer = () => {
  return (
    <div className='p-4 sm:10 bg-white flex justify-between items-center mt-3 border-[#F4F7F8]'>
      <div className='h-[300px] w-[300px]  justify-center items-center bg-gray-300 hidden lg:flex'>
        <img src={BrandLogo} alt="Branding" className='object-contain' />
      </div>
      <div className="flex flex-col w-full px-8">
        <div className="flex w-full justify-between sm:flex-row flex-col">
          <div className="flex flex-col align-center">
          <img className='max-w-[200px] m-auto' src={BrandLogo}  alt="Branding" />
          <ul className='my-3'>
            <li className='font-extrabold sm:my-3 my-2 text-center sm:text-left'>Privacy Policy</li>
            <li className='font-extrabold sm:my-3 text-center sm:text-left'>Terms and Conditions</li>
          </ul>
          </div>
          <div className="flex gap-4 justify-center items-start my-3 sm:my-0">
            <span className='lg:p-5 bg-[#F86338] text-white rounded-full font-serif lg:w-16 lg:h-16 p-2 w-10 h-10  text-basic text-center cursor-pointer lg:text-xl'>Yt</span>
            <span className='lg:p-5 bg-[#F86338] text-white rounded-full font-serif lg:w-16 lg:h-16 p-2 w-10 h-10  text-basic text-center cursor-pointer lg:text-xl'>Fb</span>
            <span className='lg:p-5 bg-[#F86338] text-white rounded-full font-serif lg:w-16 lg:h-16 p-2 w-10 h-10  text-basic text-center cursor-pointer lg:text-xl'>Tw</span>
            <span className='lg:p-5  bg-[#F86338] text-white rounded-full font-serif lg:w-16 lg:h-16 p-2 w-10 h-10 text-basic text-center cursor-pointer lg:text-xl'>Ig</span>
          </div>
        </div>
        <div>
          <p className='font-extrabold text-center sm:text-left'>Footer text</p>
        </div>
      </div>
    </div>
  )
}

export default Footer