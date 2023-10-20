import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import { useEffect, useState } from "react";


const CardDetails = () => {

    

    const [card, setCard] = useState({})
    const {photo, description} = card || {}

    const { _id } = useParams()
    const intId = parseInt(_id)

    const cards = useLoaderData()
    console.log(cards);

    useEffect(() => {
        const findCard = cards?.find(card => card.id == intId)
        setCard(findCard)
    }, [intId, cards])

    return (
        <div>
            <Navbar></Navbar>
            <div className=" flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className=" h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={photo}
                        alt="img-blur-shadow"
                        
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UI/UX Review Check
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Read More
                    </button>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <img src={photo} alt="" className="my-5 " />
            </div>
            <p className="text-xl font-semibold max-w-5xl mx-auto mb-5">{description}</p> */}
        </div>
    );
};

export default CardDetails;