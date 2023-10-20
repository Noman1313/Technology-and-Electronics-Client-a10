import { useLoaderData } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import AddedCard from "./AddedCard";


const Products = () => {

    const products = useLoaderData()
    console.log(products);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold my-5 text-center">New Product</h2>
            <div className="md:grid grid-cols-3 gap-5">
                {
                    products.map(product => <AddedCard key={product._id} product={product}></AddedCard>)
                }
            </div>
        </div>
    );
};

export default Products;