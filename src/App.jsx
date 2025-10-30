import React from "react";
import image from './assets/1.png'; 
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import bg from './assets/bg.jpg'
import og from './assets/image.png'

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div 
        className="relative px-6 py-8 max-w-7xl mx-auto rounded-b-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',  }}
      >
       
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
   
        <div className="relative z-10">
            
      
          <header className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <span className="text-lg font-bold">FloraVision.</span>
            </div>
            
            <nav className="hidden md:flex space-x-6 text-gray-300 text-sm font-medium">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#plants" className="hover:text-white">Plants Type</a>
              <a href="#store" className="hover:text-white">Store</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            
            <div className="flex space-x-4 items-center text-gray-300">
              <button aria-label="Search" className="hover:text-white">🔍</button>
              <button aria-label="User Profile" className="hover:text-white hidden md:block">👤</button>
              <button aria-label="Open Menu" className="hover:text-white text-2xl">☰</button>
            </div>
          </header>
          
         
          <section className="relative flex flex-col md:flex-row justify-between items-start mb-16 space-y-8 md:space-y-0 h-[500px]">
            
            
            <div className="max-w-xl z-10 p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm"> 
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Earth’s Exhale</h1>
              <p className="text-gray-300 mb-6">
                Earth's Exhale symbolizes the purity and vitality of the Earth’s natural environment and its successful role in sustaining life.
              </p>
              <button className="bg-green-500 hover:bg-green-600 rounded-md px-6 py-2 text-white font-semibold mr-4">
                Buy Now
              </button>
              <button className="inline-flex items-center text-green-400 hover:underline focus:outline-none">
                ▶ Live Demo
              </button>
              
              <div className="flex items-center mt-8 bg-gray-800 rounded-lg px-4 py-3 max-w-max">
                <img
                  src={og} 
                  alt="Hanaa starrbl"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Hanaa starrbl</p>
                  <p className="text-gray-400 text-xs">
                    I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="bg-gray-800 rounded-2xl p-4 w-72 flex flex-col items-center space-y-2 shadow-lg z-10 md:absolute md:top-0 md:right-0">
              <img
                src={image}
                alt="Aglaonema plant"
                className="w-32 h-32 object-contain"
              />
              <div className="text-center">
                <h3 className="mb-1 font-semibold text-sm">Indoor Plant</h3>
                <h2 className="text-lg font-bold mb-1">Aglaonema plant</h2>
                <div className="flex justify-center space-x-3 mt-2 text-gray-400 text-sm mb-2">
                  <span>⭐ 4.8</span>
                  <span>|</span>
                  <span>200+ Sold</span>
                </div>
                <button className="bg-green-500 hover:bg-green-600 rounded-md px-4 py-1 text-white font-semibold text-sm">
                  Buy Now
                </button>
                <span className="block text-right text-green-500 mt-2"> &gt; </span>
              </div>
            </div>
            
          </section>

         <section className="mt-8 md:mt-20 pb-16"> 
            <h2 className="text-center text-white text-2xl font-semibold mb-10 border-b-2 border-green-500 inline-block px-4 pb-1 mx-auto">
              Our Trendy plants
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-10">
              
              <div className="bg-gray-800/80 rounded-3xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 max-w-lg mx-auto backdrop-blur-sm">
                <img
                  src={image2} 
                  alt="Plant on desk"
                  className="rounded-lg w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <h3 className="font-semibold mb-2">For Your Desks Decorations</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    I sincerely adorn a beautiful desk decoration plant in my workspace, and it has made such a positive difference!
                  </p>
                  <p className="font-bold mb-4">Rs. 599/-</p>
                  <div className="flex items-center">
                    <button className="bg-green-500 hover:bg-green-600 rounded-md px-4 py-1 text-white font-semibold mr-3 text-sm">
                      Explore
                    </button>
                    <button aria-label="Add to cart" className="text-green-300 hover:text-green-400">
                      <span className="text-lg">📦</span> 
                    </button>
                  </div>
                </div>
              </div>

            
              <div className="bg-gray-800/80 rounded-3xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 max-w-lg mx-auto backdrop-blur-sm">
                <img
                  src={image3} 
                  alt="Plant on desk right"
                  className="rounded-lg w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="text-left">
                  <h3 className="font-semibold mb-2">For Your Desks Decorations</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    The greenery adds a touch of nature and serenity to my desk, making it feel more soothing and calming.
                  </p>
                  <p className="font-bold mb-4">Rs. 399/-</p>
                  <div className="flex items-center">
                    <button className="bg-green-500 hover:bg-green-600 rounded-md px-4 py-1 text-white font-semibold mr-3 text-sm">
                      Explore
                    </button>
                    <button aria-label="Add to cart" className="text-green-300 hover:text-green-400">
                      <span className="text-lg">📦</span> 
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </div> 
      </div> 
      

      <div className="px-6 py-8 max-w-7xl mx-auto">
        <section className="mt-8 md:mt-12"> 
          <h2 className="text-center text-white text-2xl font-semibold mb-10 border-b-2 border-green-500 inline-block px-4 pb-1 mx-auto">
            Our Top Selling Plants
          </h2>
          
          <div className="flex justify-center items-start gap-16 flex-wrap">
            <div className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg shadow-xl">
              <img src={image} alt="Plant 1" className="w-32 h-32 object-cover rounded-lg"/>
              <p className="font-semibold mt-2">Aglaonema</p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg shadow-xl">
              <img src={image2} alt="Plant 2" className="w-32 h-32 object-cover rounded-lg"/>
              <p className="font-semibold mt-2">Ficus Plant</p>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg shadow-xl">
              <img src={image4} alt="Plant 3" className="w-32 h-32 object-cover rounded-lg"/>
              <p className="font-semibold mt-2">Cactus</p>
            </div>
          </div>
        </section>
      </div>
    </div> 
  );
};

export default App;