import { Link } from 'react-router-dom'

const LoyaltyDealCard = () => {
  return (
    <>
    <Link to={`/notdone`}>
      <div className={"items-stretch flex flex-row w-full  border-[#F86338] text-black py-3 px-5 border-2 flex gap-2 bg-" + 
            "[#F86338] items-center  sm:mt-0"}>
        <div className="flex justify-end w-3/4">
          <div className={"bg-white text-[#34aeeb] lg:p-5 p-3 w-full border-2 font-extrabold border-transparent text-l"}>
            <h3 className="text-black text-xl">Generic deal for loyal customers</h3>
            <p>More details</p>
          </div>
        </div>
        <div className="flex justify-end w-1/4">
          <button name="viewDeal" className={"bg-[#34aeeb] text-white lg:p-5 p-3 w-full hover:bg-white hover:text-[#34aeeb] border-2 font-extrabold border-transparent hover:border-[#34aeeb] text-l"}>
            View deal →
          </button>
        </div>
      </div>
    </Link>
    </>

  )
}

export default LoyaltyDealCard;
