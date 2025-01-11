import React from 'react';

const groceries = [
    {
        image: 'Groceries1.jpg',
        title: 'Village Grocer, Penang',
        description: 'A supermarket with an amazing array of premium produce, freshly baked breaks and pastries, and specialty items to meet all your gourmet needs',
        link: 'https://www.google.com/maps/search/village+grocer+penang/@5.3916325,100.2414545,11z?entry=s&sa=X',
    },
    {
        image: 'Groceries2.PNG',
        title: 'Lotus\'s, Penang',
        description: 'A large supermarket for you to shop for groceries that even have their own brand product sold at cheaper prices',
        link: 'https://www.google.com/maps/search/lotus%27s+penang/@5.3800003,100.272798,12z?entry=ttu',
    },
    {
        image: 'Groceries3.jpg',
        title: 'Jaya Grocer, Penang',
        description: 'A grocery store that provide freshest produce and high quality products, be it local seasonal fruits and vegetables, organic and exotic produce, high quality meats products as well as premium goods all over the world',
        link: 'https://www.google.com/maps/place/Jaya+Grocer/data=!4m2!3m1!1s0x0:0xd52195a39c6dac61?sa=X&ved=1t:2428&ictx=111&cshid=1736557696344685',
    },
    {
        image: 'Groceries4.PNG',
        title: 'Hero Market, Penang',
        description: 'A grocery store that offers quality merchandise at bargain prices that allows you to buy everyday groceries, fresh produce, and fresh foods under one roof and in a hygienic and clean environment.',
        link: 'https://www.google.com/maps/place/HeroMarket+All+Seasons+Place/data=!4m2!3m1!1s0x0:0x2680950726e7bbfe?sa=X&ved=1t:2428&ictx=111',
    },
    {
        image: 'Groceries5.jpg',
        title: 'AEON Supermarket, Bayan Lepas',
        description: 'A grocery store that allow you to enjoy a vast assortment of products located in one of the famous shopping complex, Queensbay Mall to fulfill the all-in-one experience.',
        link: 'https://www.google.com/maps/place/AEON+Queensbay/@5.3322821,100.3041361,17z/data=!3m1!4b1!4m6!3m5!1s0x31cdb5e902455cc1:0xad0ec7ea32785d6d!8m2!3d5.3322768!4d100.3067164!16s%2Fg%2F1hc193gf_?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D',
    },
];

const GroceriesPlace = () => {
  return (
    <div>
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-8">Groceries Store</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {groceries.map((groceries, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={groceries.image}
                                    alt={groceries.title}
                                    className="absolute inset-0 w-full h-full object-cover transform transition duration-300 hover:scale-110"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="p-4 flex-grow">
                                <h3 className="text-xl font-bold mb-2">{groceries.title}</h3>
                                <p className="text-gray-600">{groceries.description}</p>
                            </div>
                            {/* Button Section */}
                            <div className="p-4">
                                <button
                                    onClick={() => window.open(groceries.link, '_blank')}
                                    className="text-sm text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transform transition duration-300"
                                >
                                    View Location
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroceriesPlace
