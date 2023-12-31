import Link from "next/link";
import Layout from "./Layout/layout";
import Title from "./Layout/title";

export default function About() {
  return (
    <Layout>
      <Title page="About Us" />

      <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Food Journey</h1>
        <p className="text-gray-700 mb-4">
          At Delicious Delights, we believe that great food brings people together. Our mission
          is to deliver delightful and mouth-watering dishes right to your doorstep, ensuring
          that every meal is an experience to savor.
        </p>
        <p className="text-gray-700 mb-4">
          Our talented chefs carefully craft each dish using the finest ingredients, blending
          flavors to perfection. Whether you're craving a hearty meal, a healthy option, or a
          sweet treat, we have a diverse menu to satisfy every palate.
        </p>
        <p className="text-gray-700 mb-4">
          With our easy-to-use online platform, you can explore our menu, place orders, and enjoy
          the convenience of doorstep delivery. We are dedicated to providing a seamless and
          enjoyable dining experience for our valued customers.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing Delicious Delights. We look forward to serving you and making
          every meal a delightful moment.
        </p>

        <div className="flex justify-between mt-6">
          <Link href="/">Home</Link>
          <a href="/" className="text-blue-500 hover:underline">
            Visit Home
          </a>
        </div>
      </div>
    </Layout>
  );
}
