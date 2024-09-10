const ProductDetails = () => {
  return (
    <div className="px-20 py-10">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Nike Air"
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">Nike Air</h3>
            <span className="text-gray-500 mt-3">$125</span>
            <hr className="my-3" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus soluta explicabo aut culpa saepe alias? Exercitationem,
              quam facere. Consequuntur, maiores.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <h4 className="text-gray-700 text-sm capitalize font-bold">
                stock quantity :
              </h4>
              <span>20</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <h4 className="text-gray-700 text-sm capitalize font-bold">
                category :
              </h4>
              <span>Nike</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <h4 className="text-gray-700 text-sm capitalize font-bold">
                ratings :
              </h4>
              <span>5</span>
            </div>

            <div className="flex items-center mt-6">
              <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                Order Now
              </button>
              <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
