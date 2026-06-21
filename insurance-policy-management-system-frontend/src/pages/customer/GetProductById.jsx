import { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductById,
} from "../../api/productApi";

const GetProductById = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
        //call API to get all products and populate dropdown
      const data = await getAllProducts();

    //   console.log("All Products:", data);

      setProducts(data.content || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load products");
    }
  };

  const handleFetch = async () => {
    if (!selectedId) {
      alert("Please select a product");
      return;
    }

    try {
      setLoading(true);
//call API to get product details by id
      const data = await getProductById(selectedId);

    //   console.log("Product Details:", data);

      setProduct(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Get Product By Id
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <label className="block mb-2 font-semibold">
          Select Product
        </label>

        <select
          value={selectedId}
          onChange={(e) =>
            setSelectedId(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="">
            Select Product
          </option>

          {products.map((product) => (
            <option
              key={product.productId}
              value={product.productId}
            >
              {product.productName} (ID:
              {product.productId})
            </option>
          ))}
        </select>

        <button
          onClick={handleFetch}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Fetch Product
        </button>

      </div>

      {loading && (
        <p className="mt-4 text-blue-600">
          Loading Product...
        </p>
      )}

      {product && (
        <div className="bg-white rounded-xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Product Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <strong>Product ID:</strong>
              <p>{product.productId}</p>
            </div>

            <div>
              <strong>Product Name:</strong>
              <p>{product.productName}</p>
            </div>

            <div>
              <strong>Product Type:</strong>
              <p>{product.productType}</p>
            </div>

            <div>
              <strong>Status:</strong>
              <p>
                {product.active
                  ? "ACTIVE"
                  : "INACTIVE"}
              </p>
            </div>

            <div className="md:col-span-2">
              <strong>Description:</strong>
              <p>{product.description}</p>
            </div>

            <div>
              <strong>Created Date:</strong>
              <p>
                {product.createdDate
                  ? new Date(
                      product.createdDate
                    ).toLocaleString()
                  : "-"}
              </p>
            </div>

            <div>
              <strong>Updated Date:</strong>
              <p>
                {product.updatedDate
                  ? new Date(
                      product.updatedDate
                    ).toLocaleString()
                  : "-"}
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default GetProductById;