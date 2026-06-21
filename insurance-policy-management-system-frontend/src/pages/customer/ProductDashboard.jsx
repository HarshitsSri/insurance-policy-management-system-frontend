import { useNavigate } from "react-router-dom";

const ProductDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Product Module
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div
          onClick={() =>
            navigate("/customer/products/all")
          }
          className="bg-white p-6 rounded-xl shadow cursor-pointer"
        >
          <h2 className="text-xl font-bold">
            Get All Products
          </h2>
        </div>

        <div
          onClick={() =>
            navigate("/customer/products/by-id")
          }
          className="bg-white p-6 rounded-xl shadow cursor-pointer"
        >
          <h2 className="text-xl font-bold">
            Get Product By Id
          </h2>
        </div>

      </div>

    </div>
  );
};

export default ProductDashboard;