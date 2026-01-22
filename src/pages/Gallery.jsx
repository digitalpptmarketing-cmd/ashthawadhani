import React from "react";

const images = [
    "env2.jpeg",
    "/g1.png",
    "/g2.png",
    "/g3.png",
    "/g4.png",
    "/g5.png",
    "/g6.png",
    "/g7.png",
    "/Slide1.png",
    "/Slide2.png",
    "/Slide3.png",
    "/Slide4.png",
    "/Slide 5.png",
    "env1.jpeg",
    
];

export default function Gallery() {
    return (
        <div className="w-full bg-gray-50 py-20">

        
            <div className="text-center mb-14">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Gallery
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Moments from our initiatives, community programs, and
                    impactful work across different regions.
                </p>
            </div>

            
            <div className="max-w-7xl mx-auto px-6
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {images.map((img, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl shadow-md bg-white"
                    >
                        <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-64 object-cover
                            hover:scale-110 transition duration-300"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
