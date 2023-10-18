import PropTypes from 'prop-types';

const HomeCard = ({ data }) => {
    const { brand_image, brand_name, description, price } = data
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={brand_image}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-xl antialiased font-semibold leading-relaxed text-blue-gray-900">
                            {brand_name}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;

HomeCard.propTypes={
    data: PropTypes.object
}