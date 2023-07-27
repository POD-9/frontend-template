import { Link } from 'react-router-dom'

const DiscoverNewCard = () => {
  return (
    <>
      <div className={"items-stretch flex flex-row w-full  border-[#f86338] text-black py-3 px-5 border-2 flex gap-2 bg-[#f86338]" + 
            " items-center  sm:mt-0"}>
        <div className="flex justify-end lg:w-1/3 md:w-1/2 w-3/4">
          <div className={"bg-white lg:p-3 p-2 w-full border-2 font-extrabold border-[#34aeeb] text-l"}>
            <h3 className="text-[#34aeeb] text-xl">Discover new products</h3>
          </div>
        </div>
        <div className="flex justify-end lg:w-1/6 md:w-1/5 w-1/4">
          <button name="viewDeal" className={"bg-[#34aeeb] border-[#34aeeb] text-white lg:p-3 p-2 w-full hover:bg-white hover:text-[#f86338] border-2 font-extrabold hover:border-[#34aeeb] text-l"}>
          <Link to="/notdone"> Categories → </Link>
          </button>
        </div>
      </div>
      <div className="bg-[#f86338] text-white flex flex-row grid md:grid-cols-4 grid-cols-2 gap-1 justify-center p-2">
        <div className="flex bg-[#34aeeb] justify-center">
          Category 1
        </div>
        <div className="flex bg-[#34aeeb] justify-center">
          Category 2
        </div>
        <div className="flex bg-[#34aeeb] justify-center">
          Category 3
        </div>
        <div className="flex bg-[#34aeeb] justify-center">
          Category 4
        </div>
      </div>
    </>
  )
}

export default DiscoverNewCard;
