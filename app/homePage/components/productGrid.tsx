
const ProductGrid = () => {
  return (
    <div className="px-20 py-10 h-200 space-y-8">
      <h4 className="text-2xl italic font-light">Accessories For Every Mood</h4>
      <div className="grid grid-cols-[2fr_1fr] gap-4 ">
       <div className="bg-pink-200 h-150 w-fullrounded-xl">
       </div> 
      <div className="grid grid-rows-2 gap-10">
        <div className="bg-blue-200 h-full w-full"></div>
        <div className="bg-green-200 h-full w-full"></div>
       </div>
      </div>
    </div>
  )
}

export default ProductGrid;
