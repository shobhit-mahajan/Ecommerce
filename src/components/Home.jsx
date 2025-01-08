import React from 'react'

export const Home = () => {
  return (
               <div
               className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center w-11/12 mx-auto my-5"
               style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')`,
    height: "400px",
    backgroundSize: "cover", // Optional for better appearance
    backgroundPosition: "center", // Optional for centering the image
  }} >
               <div
                 className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                 style= {{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                 <div className="flex h-full items-center justify-center mx-8">
                   <div className="text-white">
                     <h2 className="mb-4 text-4xl font-semibold">Discover Amazing Product </h2>
                     <h4 className="mb-6 text-xl font-semibold"> one Stop place of Quality Product at lowest price</h4>
                     
                   </div>
                 </div>
               </div>
             </div>
  )
}
