// importing icons
import BrandLogo from '../../public/images/Dealerz.svg'

const Footer = () => {
  return (
    <div className='p-10  bg-white flex justify-between items-center'>
      <div className='h-[360px] w-[360px] flex justify-center items-center bg-gray-300'>
        <img src={BrandLogo} alt="Branding" className='object-contain' />
      </div>
      <div className="flex flex-col w-full px-8">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
          <img src={BrandLogo}  alt="Branding" />
          <ul className='my-3'>
            <li className='font-extrabold my-3'>Privacy Policy</li>
            <li className='font-extrabold my-3'>Terms and Condition</li>
          </ul>
          </div>
          <div className="flex gap-4 justify-center items-start ">
            <span className='p-5 bg-[#F86338] text-white rounded-full font-serif w-16 h-16 text-xl text-center cursor-pointer'>Yt</span>
            <span className='p-5 bg-[#F86338] text-white rounded-full font-serif w-16 h-16 text-xl text-center cursor-pointer'>Fb</span>
            <span className='p-5 bg-[#F86338] text-white rounded-full font-serif w-16 h-16 text-xl text-center cursor-pointer'>Tw</span>
            <span className='p-5 bg-[#F86338] text-white rounded-full font-serif w-16 h-16 text-xl text-center cursor-pointer'>Ig</span>
          </div>
        </div>
        <div>
          <p className='font-extrabold'>@2020 TanahAir Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer