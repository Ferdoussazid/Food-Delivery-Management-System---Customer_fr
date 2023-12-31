import Link from "next/link";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
});

const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Title page="Home" />
      <Layout>
        <div className="mx-auto max-w-4xl p-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Welcome to Crave Crafter</h1>
            <p className="text-gray-700 mt-2">
              Your go-to destination for delightful and crafted food experiences.
            </p>
          </div>

          <div className="bg-neutral text-white p-10 mb-8 rounded-md">
            <p className="text-lg">
              Explore our diverse menu crafted with passion and precision, bringing you the finest
              dishes from around the world. Order now and embark on a culinary journey with Crave
              Crafter.
            </p>
          </div>

          {/* Sliding Pictures Section */}
          <div className="relative overflow-hidden rounded-md">
            <div className="carousel">
              {/* Replace the URLs with your own image URLs */}
              <img
                className="w-full h-64 object-cover transition-transform transform scale-100 hover:scale-105"
                src="https://placekitten.com/800/400"
                alt="Food Image 1"
              />
              <img
                className="w-full h-64 object-cover transition-transform transform scale-100 hover:scale-105"
                src="https://placekitten.com/800/401"
                alt="Food Image 2"
              />
              <img
                className="w-full h-64 object-cover transition-transform transform scale-100 hover:scale-105"
                src="https://placekitten.com/800/402"
                alt="Food Image 3"
              />
              {/* Add more images as needed */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <p className="text-lg">
              Ready to experience culinary excellence? Explore our menu and place your order now.
            </p>
            <Link href="/menu">
              <span className="text-blue-500 hover:underline">View Menu</span>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
