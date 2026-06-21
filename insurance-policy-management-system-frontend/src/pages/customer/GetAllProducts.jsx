import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";

const GetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();

      console.log("Products Response:", data);

      setProducts(data.content || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-xl font-semibold">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full border-collapse">

          <thead className="bg-slate-200">

            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Product Name</th>
              <th className="p-3 border">Product Type</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Created Date</th>
              <th className="p-3 border">Updated Date</th>
            </tr>

          </thead>

          <tbody>

            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.productId}
                  className="hover:bg-gray-100"
                >
                  <td className="p-3 border text-center">
                    {product.productId}
                  </td>

                  <td className="p-3 border">
                    {product.productName}
                  </td>

                  <td className="p-3 border">
                    {product.productType}
                  </td>

                  <td className="p-3 border">
                    {product.description}
                  </td>

                  <td className="p-3 border text-center">
                    {product.active ? (
                      <span className="text-green-600 font-semibold">
                        ACTIVE
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        INACTIVE
                      </span>
                    )}
                  </td>

                  <td className="p-3 border">
                    {product.createdDate
                      ? new Date(
                          product.createdDate
                        ).toLocaleString()
                      : "-"}
                  </td>

                  <td className="p-3 border">
                    {product.updatedDate
                      ? new Date(
                          product.updatedDate
                        ).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-5"
                >
                  No Products Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default GetAllProducts;