import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillStarFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Testpage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limitPage = 12;

  useEffect(() => {
    // Fungsi untuk mengambil data produk
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=${limitPage}&page=${currentPage}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    // Fungsi untuk mengambil total jumlah produk
    const fetchTotalProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setTotalProducts(response.data.length);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchProducts();
    fetchTotalProducts();
  }, [currentPage]);

  return (
    <>
      <div className="bg-white -mt-8">
        <div className="mx-auto max-w-4xl px-4 py-16 ">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-2">
            {products.map((product) => (
              <div key={product.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg drop-shadow-lg bg-white xl:aspect-h-3 xl:aspect-w-3">
                  <div className="aspect-4/3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-36 object-cover object-center m-2 cursor-pointer hover:scale-110 transform transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <h3 className="mt-4 ml-3 text-sm text-gray-700 font-medium">
                    {product.title.substring(0, 20)}
                  </h3>
                  <p className="mt-1 ml-3 mb-2 text-lg font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                  <button className="text-gray-900 p-1 text-xs ml-2 mb-2 mr-1 border-2 border-gray-500">
                    Gratis Ongkir
                  </button>
                  <div className="flex ml-2 mb-5 text-orange-600">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <div className="ml-2 text-black text-sm">
                      {product.rating.count} terjual
                    </div>
                  </div>

                  <div className="flex justify-between mx-2">
                    <div className="flex items-center mb-3 ml-1">
                      <BiMap />
                      <p className="text-sm">Cikarang Utara</p>
                    </div>
                    <CiMenuKebab />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12 mb-3">
        <div className="join">
          {Array.from(
            { length: Math.ceil(totalProducts / limitPage) },
            (_, index) => (
              <button
                key={index + 1}
                className={`join-item btn ${
                  currentPage === index + 1 ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Testpage;
