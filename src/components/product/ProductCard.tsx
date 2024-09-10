import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1500274869470-1cf3be073d1c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="card-text text-red-500">$99.99</p>
        <div className="card-actions justify-center">
          <button onClick={() => navigate(`2`)} className="btn btn-primary">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
