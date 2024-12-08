// This is for client-side rendering, Next.js 13 or newer
'use client'

import Image from "next/image";

const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    discountPrice: "3.500.000",
    imageUrl: "/images/image 1.png",
    discount: "-30%",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    imageUrl: "/images/image 1.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 3.png",
    discount: "-50%",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500.000",
    imageUrl: "/images/image 4.png",
    isNew: true,
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: "1.500.000",
    imageUrl: "/images/image 5.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: "150.000",
    imageUrl: "/images/image 6.png",
    isNew: true,
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    discountPrice: "14.000.000",
    imageUrl: "/images/image 7.png",
    discount: "-50%",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    imageUrl: "/images/image 8.png",
    isNew: true,
  },
];

export default function ProductList() {
  // Function to filter products manually on the client side (without useState)
  const handleFilterNewProducts = () => {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach((product) => {
      if (product.classList.contains('new')) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl ml-[500px] mt-[30px] font-bold"> Our Products</h2>
      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className={`product border rounded-lg p-4 shadow-lg hover:shadow-xl transition ${product.isNew ? 'new' : ''}`}
          >
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover rounded-md"
              />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 text-sm rounded-md">
                  {product.discount}
                </div>
              )}
              {product.isNew && (
                <div className="w-[48px]  h-[48px]   mt-[24px]  px-2 py-3 bg-green-500 text-white text-sm rounded-full">
                  New
                </div>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">
                {product.discountPrice ? (
                  <>
                    <span className="line-through text-gray-500">
                      {product.discountPrice}
                    </span>{" "}
                    {product.price}
                  </>
                ) : (
                  product.price
                )}
              </span>
            </div>
            
          </div>
        ))}
      </div>
      <button className="w-[245px] h-[48px] mt-[80px] ml-[450px] text-[16px] border-[#B88E2F] bg-white text-[#B88E2F]">Show More</button>
    </div>
  );
}
