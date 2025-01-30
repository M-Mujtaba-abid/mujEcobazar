import React from 'react'

const ThreCards = () => {
  return (
<div className="bg-[#E6E6E6] flex justify-center items-center py-10">
  <div className="flex flex-col lg:flex-row justify-center mx-auto items-center gap-6 w-full max-w-[1180px]">
    {/* Card 1 */}
    <div className="relative w-full max-w-[400px] lg:max-w-[536px] h-[300px] lg:h-[424px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/8a3f/3ac5/cfb7c4dbc3d5547d1dd9274c56b0615e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8aoT2m0Z9xeDVX3dDnVntOL65aVlAiMcSq~6l2a4ML-b3SiAeTMyM2eo1fQUtq0ts6DJftHbqNeNzEulM8YZ6hsOqzHOuQ3ppFHyDXq6CPAJaDJrajzO7P-gmx86qxdk0KxWzwspoO9bHa~D~BfFrdOlDfHkpSuU~tY8jqVFx534gMNmg1IptKK0lBLDHMeoGXAGMycsMgoFwskJ9mNIK1z5APGtMHc9ZN1XDt2mql6StnS44cPAk-q3~fPbDAPWrmpmF8td-sB3x80RW-9QDrEv1k6n~~~5jbHCK6a~CwzXmuesdoL2PpiLaloDpgpBf~NdKrl9wYyTKGDZxYTyg__"
        alt="Card 1"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST DEALS</h1>
        <h1 className="text-white text-2xl font-bold">Sales of the Month</h1>
        <button className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative w-full max-w-[400px] lg:max-w-[536px] h-[300px] lg:h-[424px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/cb41/c115/301293b498e73ed185cf4f7de364d73a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qz~RHs6vmhOCwBneLmdtWWwA3vZK-o4OH08EE9eb2LnZjxxsJvGtBPKCfMdCX~YQNaiw-mWjmvHevOkz0vrCezGT2dH2uMMG1JjF3dPYr7YsLxsbZrK0DtUEknYuGSdMoxfrqTjMVpUFjaHaGZAXdxka41x9o9kQJse1xpsEelTIKqMhsBushs7OQ4qoe1LxpWKK9TcbWtjCUdb3EcqytSkF6NhEOJ0Qhu4BAskcYIdbvXUcMtZ4boBlYb0yJxPTuDyV08XZ2aAd8vV1zX23vDYCX27Jl9Gmq-lpeLU5g0uoX8i3HIm0-~qAE6db3VCmQ3ImRrs0QDBpi6lYNyaUZQ__"
        alt="Card 2"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST FAT FREE</h1>
        <h1 className="text-white text-2xl font-bold">Low-Fat Meat</h1>
        <h1 className="text-white">Started at <span className="text-orange-400">$799.99</span></h1>
        <button className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative w-full max-w-[400px] lg:max-w-[536px] h-[300px] lg:h-[424px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/627d/e773/63d3144b88888de997dd16b7dda7316e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJMiMGAI-29C7OiZ8BzjjMayWld5eeRb-NxNNQViJtag2g7ekLqPm0lQmx57TFPeMCxsdZ7M~~d8IMrpFum3Lniq5lw3zWJLZxozwxiTMp0yQbJOvVDSOlVqAYr3nBtW5fJHhQrB2sLCsQWAM16ith9ewB1bLGBzKCw2iWwoIW8WXZZzIdG2w5GCRClz0dZkJNyTL5S7b5cqSoN59o1ZJ00rIDv4zK6io4gcYXhJoyuJNwax5~vHR-UnBynLGP3iUXBtfAaNg2WE69dXaqr8iqvlJsEZoGmb57dPNny5lKgG8DjHtd2j57wKGVRinjpMSI8WJW7xRUmhxLfsLQJI7g__"
        alt="Card 3"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-md p-4">
        <h1 className="text-white text-lg font-semibold">BEST FAT FREE</h1>
        <h1 className="text-white text-2xl font-bold">Low-Fat Meat</h1>
        <h1 className="text-white mt-2">Started at <span className="text-yellow-400 bg-black p-1 rounded-lg">$799.99</span></h1>
        <button className="mt-5 px-6 py-3 bg-white text-green-500 font-semibold rounded-full shadow-md flex items-center space-x-2 hover:bg-green-100">
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  </div>
</div>


)
}

export default ThreCards
{/* <div className="flex flex-col lg:flex-row  lg:justify-center items-center gap-4 p-4">
  <div className="bg-blue-500 text-white p-8 w-full lg:w-[30%] text-center rounded-md">Card 1</div>
  <div className="bg-red-500 text-white p-8 w-full lg:w-[30%] text-center rounded-md">Card 2</div>
  <div className="bg-green-500 text-white p-8 w-full lg:w-[30%] text-center rounded-md">Card 3</div>
</div> */}
