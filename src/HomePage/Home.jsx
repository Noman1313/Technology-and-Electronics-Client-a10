import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HomeCard from "./HomeCard";

const Home = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                {
                    loadedData.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;