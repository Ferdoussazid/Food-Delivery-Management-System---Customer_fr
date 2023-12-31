// components/Menu.js
import React from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
});

const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
});

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      price: "$12.99",
      image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/06/THUMB-LINK-2020-2-1200x675.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: "$14.99",
      image: "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Chicken Alfredo",
      price: "$16.99",
      image: "https://hips.hearstapps.com/hmg-prod/images/chicken-alfredo-index-64ee1026c82a9.jpg?crop=0.9994472084024323xw:1xh;center,top&resize=1200:*", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Vegetarian Sushi Roll",
      price: "$10.99",
      image: "https://foodwithfeeling.com/wp-content/uploads/2020/08/vegan-sushi-15.jpg", // Replace with actual image URL
    },
    {
      id: 5,
      name: "Grilled Salmon",
      price: "$18.99",
      image: "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg", // Replace with actual image URL
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      price: "$8.99",
      image: "https://www.cookingclassy.com/wp-content/uploads/2022/02/molten-lava-cake-17.jpg", // Replace with actual image URL
    },
  ];

  return (
    <>
    <Title page="Menu" />
      <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-md shadow-md">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <p className="text-gray-700">{item.price}</p>
        </div>
      ))}
    </div>
    </Layout>
    </>
  );
};

export default Menu;
