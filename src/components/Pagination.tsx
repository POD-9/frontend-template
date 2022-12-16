
const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }: { productsPerPage:number, totalProducts:number, paginate:any, currentPage:number } ) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    
    <div className="flex w-full mt-6 items-center gap-4">
      {pageNumbers.map((number) => (
        <button className={`font-extrabold text-xl px-2 border border-[#F86338] rounded-lg cursor-pointer text-[#F86338] hover:bg-[#F86338] hover:text-white active:bg-[#F86338] ${number==currentPage ? 'bg-[#F86338] text-white':null}`} key={number} onClick={() => paginate(number)}>
          
            {number}
          
        </button>
      ))}
    </div>
  
  )
}

export default Pagination