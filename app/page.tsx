import Allproducts from "./components/Allproducts";
import NewestProducts from "./components/newestProducts";

export default function Home() {
  return (
    <>
      <section className="w-max-7xl px-4 md:px-8 mx-auto mb-10">
        <div className="mx-auto text-center text-4xl sm:text-5xl font-extrabold">
          <h1>Find a product you are looking for</h1>
          <h1 className="text-primary mt-2"> and Sell yours</h1>
          <p className="sm:text-base text-sm font-medium text-muted-foreground mt-5 w-4/5 mx-auto">
            Selling an item is a breeze. Just snap a photo, add a product name,
            description, and price.
          </p>
        </div>
        <div className="mt-14 space-y-3">
          <h1 className="font-bold text-xl sm:text-2xl">Newest Products</h1>
          <NewestProducts />
        </div>
        <div className="mt-14 space-y-3">
          <h1 className="font-bold text-xl sm:text-2xl">All products</h1>
          <Allproducts />
        </div>
      </section>
      <footer className="bg-primary h-[150px] text-center text-primary-foreground flex justify-center items-center">
        <p className="text-sm">Footer links and more...</p>
      </footer>
    </>
  );
}
