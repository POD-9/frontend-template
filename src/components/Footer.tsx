// importing icons
import BrandLogo from '../../public/images/Dealerz.svg'

const Footer = () => {
  return (
    <div className='p-4 sm:10 bg-white flex justify-between items-center'>
      <div className='h-[360px] w-[360px]  justify-center items-center bg-gray-300 hidden lg:flex'>
        <img src={BrandLogo} alt="Branding" className='object-contain' />
      </div>
      <div className="flex flex-col w-full px-8">
        <div className="flex w-full justify-between sm:flex-row flex-col">
          <div className="flex flex-col align-center">
          <img className='max-w-[200px] m-auto' src={BrandLogo}  alt="Branding" />
          <ul className='my-3'>
            <li className='font-extrabold my-3 text-center sm:text-left'>Privacy Policy</li>
            <li className='font-extrabold my-3 text-center sm:text-left'>Terms and Condition</li>
          </ul>
          </div>
          <div className="flex gap-4 justify-center items-start my-3 sm:my-0">
            <span className='sm:p-5 bg-[#F86338] text-white rounded-full font-serif sm:w-16 sm:h-16 p-4 w-14 h-14  text-xl text-center cursor-pointer'>Yt</span>
            <span className='sm:p-5 bg-[#F86338] text-white rounded-full font-serif sm:w-16 sm:h-16 p-4 w-14 h-14  text-xl text-center cursor-pointer'>Fb</span>
            <span className='sm:p-5 bg-[#F86338] text-white rounded-full font-serif sm:w-16 sm:h-16 p-4 w-14 h-14  text-xl text-center cursor-pointer'>Tw</span>
            <span className='sm:p-5  bg-[#F86338] text-white rounded-full font-serif sm:w-16 sm:h-16 p-4 w-14 h-14 text-xl text-center cursor-pointer'>Ig</span>
          </div>
        </div>
        <div>
          <p className='font-extrabold text-center sm:text-left'>@2020 TanahAir Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer