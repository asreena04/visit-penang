import React from 'react';

const shopping = [
    {
        image: 'Shopping2.jpg',
        title: 'Gurney Plaza, Georgetown',
        description: 'A nine-storey shopping complex with two levels of basement',
        link: 'https://gurneyplaza.com.my/',
    },
    {
        image: 'Shopping4.jpg',
        title: '1st Avenue Mall, Georgetown',
        description: 'A large mall located in Penang with a food court that is very close to the Komtar Building.',
        link: 'https://www.1st-avenuepenang.com.my/',
    },
    {
        image: 'Shopping5.jpg',
        title: 'Prangin Mall, Georgetown',
        description: 'A mall located in the heart of Georgetown with the main bus stop located in the mall',
        link: 'https://prangin-mall.com/',
    },
    {
        image: 'Shopping7.PNG',
        title: 'Queensbay Mall, Bayan Lepas',
        description: 'One of the finest shopping malls in Bayan Lepas located near the airport.',
        link: 'https://www.queensbaymallmalaysia.com/',
    },
    {
        image: 'Shopping8.PNG',
        title: 'Gurney Paragon Mall, Georgetown',
        description: 'A mixed-use complex with an office block and a nine-storey shopping mall forming the podium.',
        link: 'https://www.gurneyparagon.com/',
    },
];

const ShoppingPlace = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-8">Shopping Centre</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {shopping.map((shopping, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={shopping.image}
                                    alt={shopping.title}
                                    className="absolute inset-0 w-full h-full object-cover transform transition duration-300 hover:scale-110"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-4 flex-grow">
                                <h3 className="text-xl font-bold mb-2">{shopping.title}</h3>
                                <p className="text-gray-600">{shopping.description}</p>
                            </div>
                            {/* Button Section */}
                            <div className="p-4">
                                <button
                                    onClick={() => window.open(shopping.link, '_blank')}
                                    className="text-sm text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transform transition duration-300"
                                >
                                    View Official Website
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShoppingPlace;
