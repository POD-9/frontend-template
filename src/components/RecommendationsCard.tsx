import { Link } from 'react-router-dom'

const RecommendationsCard = () => {
  return (
    <>
      <div className={"items-stretch flex flex-row w-full  border-[#34aeeb] text-black py-3 px-5 border-2 flex gap-2 bg-[#34aeeb]" + 
            " items-center  sm:mt-0"}>
        <div className="flex justify-end lg:w-1/3 md:w-1/2 w-3/4">
          <div className={"bg-white text-[#f86338] lg:p-3 p-2 w-full border-2 font-extrabold border-transparent text-l"}>
            <h3 className="text-black text-xl">Things we think you'll love</h3>
          </div>
        </div>
        <div className="flex justify-end lg:w-1/6 md:w-1/5 w-1/4">
          <button name="viewDeal" className={"bg-[#f86338] text-white lg:p-3 p-2 w-full hover:bg-white hover:text-[#f86338] border-2 font-extrabold border-transparent hover:border-[#f86338] text-l"}>
          <Link to="/notdone"> View more → </Link>
          </button>
        </div>
      </div>
      <div className="bg-[#34aeeb] flex flex-row grid md:grid-cols-6 grid-cols-3 gap-1 justify-center p-2">
        <div className="flex bg-white justify-center">
          Product 1
        </div>
        <div className="flex bg-white justify-center">
          Product 2
        </div>
        <div className="flex bg-white justify-center">
          Product 3
        </div>
        <div className="flex bg-white justify-center">
          Product 4
        </div>
        <div className="flex bg-white justify-center">
          Product 5
        </div>
        <div className="flex bg-white justify-center">
          Product 6
        </div>
      </div>
    </>
  )
}

export default RecommendationsCard
