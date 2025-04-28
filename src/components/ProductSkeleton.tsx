
const ProductSkeleton = () => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white flex flex-col h-full animate-pulse">
      <div className="p-4 flex-1 flex flex-col">
        <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-200 mb-2 rounded"></div>
        <div className="w-full h-5 bg-gray-200 mb-2 rounded"></div>
        <div className="w-full h-5 bg-gray-200 mb-2 rounded"></div>
        <div className="w-1/4 h-6 bg-gray-200 mt-auto rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
