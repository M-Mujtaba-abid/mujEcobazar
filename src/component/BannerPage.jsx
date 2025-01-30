import React from 'react';
import Delivery from '../assets/delivery-truck 1.png';
import Frame from '../assets/Frame.png'

const BannerPage = () => {
  const shippingData = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 2,
      title: 'Customer Support 24/7',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 3,
      title: '100% Secure Payment',
      description: 'Free Shipping on all your orders',
      img: Delivery
    },
    {
      id: 4,
      title: 'Money-back Guarantee',
      description: 'Free Shipping on all your orders',
      img: Delivery
    }
  ];

  return (
    <div className="bg-[#E6E6E6] p-3 lg:p-0 lg:pt-2">
      {/* Main Banner Section */}
      <div className="lg:flex flec-col justify-center items-center mx-auto lg:h-[600px] lg:w-[1200px] bg-gray-200">
        {/* Left Side: Large Image */}
        <div className="relative  lg:w-[800px] lg:h-[600px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/0c99/3fa1/e3446b7d29575d3d991b00a479103bab?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsS3x4Q7DCGymaLaiPs71iAsi1FwDFu4qG2UJKoJlkPrSzFSU61qx~G4WegapJb14MqjLg2LlhISrknT1EHBLgTsFMLpAGzNdOe1BwG1rXV-iseB6TFz~PdxAdMw6fZ4PQujuDTl3oP8nBc3~7Ka7FSQtA2skfhhSoSUFSGBsz44LX~oVIcONbkxGVWC6z96Feu5C~CiyweY4o5OHjAVyZYOwFTT2xZVzis3WXd6870GCa~U6adxfQgTigmb4njdhKiE2fV88zo6GBVnOfeaJ4AC0OR-DvJapqQy5j91IEsX70JYQSYLVIxSjh3VBwfLESyoavsxQ7uiYnHQ~KyX3A__"
            alt="Large Banner"
            className="lg:w-full lg:h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start  bg-black bg-opacity-40 rounded-lg">
            {/* <h1 className="text-4xl font-bold text-white text-center ms-20 ">Fresh & Healthy </h1>
            <h1 className="text-4xl font-bold text-white text-center ms-20">Organic Food</h1> */}
            <img className=' ms-12' src={Frame} alt="" />
          </div>
        </div>

        {/* Right Side: Two Smaller Images */}
        <div className="flex lg:flex-col gap-5 lg:gap-0 justify-between lg:pt-0 pt-4  lg:ml-8">
          {/* Top Image */}
          <div className="relative w-[350px] h-[288px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/1a38/ed3e/9aabb671cc35be935fcff80a3b3c0f69?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsd3aiQNvHJHH8xsQoJgJJBRtqigzOZUEdCfKJCDkiUFr58wyF8UsbEhWMh~krHwamJEzDP8OCQ1RLz4uixl5eAnKUhgpHYVKQAd9MGu24a-2mz-5On~HLQ3x5cQ6kdZ8GtNYXEvjCOwW1WwVT3dXgdBEW8opeUkszGwkj1Kiypj-DvcpwPl-YKBz5r7xlo60~i4C2f~dUph~AQNTN94B8HtNuvr1~-ULCkgoxWJDbmxY1dFb1yCo~GB2ZZPZ00ldPb0gf-ORlBelccWlSDflbLdD9fDaRrlhgqtZuxOf5GIuygxYLIyqKG0Spl~fRukuQl~Efgz5nRLGpHXjWqexg__"
              alt="Small Banner 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-semibold text-white text-center">Top Small Banner</h2>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative w-[350px] h-[288px] lg:mt-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/a463/4113/f6d6a27ca8a91430a85ffc7700edf9ab?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPBaHT70CBKQ4-XQE75NBJAUrR65MLsRGFOAr43GL5dTkMckwveL~5kg71nBmm4tUF-ci~8voziYeuFxcA9dDNm8lpWcvOl3Rx2uADdGRH4EPEMdzmJGJEAcF9~ZY4X2YvcYXtkB0hrfJYvxPNwv908m1MswkouhJkPNiiTzHv4YDXL9uBMInNMVYDB6TeMg9zA4creU8YbNqMCcHBW6siqIgzeB7NqVh1qCrQ2xgGNvYu6q~nJg7kzpOPSMSmQ8r1Q1h2hi6Qm2-oGt0Uh-Fpf-v8nLcJO-55i0q-lVF750P3hKPFgzN98BxpMhg5GUm1YCIFPUslB1CNPVu0-XZg__"
              alt="Small Banner 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-semibold text-white text-center">Bottom Small Banner</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Banner Box */}
      <div className="border bg-white sm:flex gap-16 mt-8 h-[250px] lg:h-[128px] items-center shadow shadow-black rounded-lg justify-center mx-auto w-full lg:w-[1185px] lg:flex block">
  {shippingData.map((item) => (
    <div key={item.id} className="flex lg:mt-0 lg:ms-0 mt-4 ms-10">
      <div className="ms-3 ">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="ms-3">
        <h1 className="text-l font-bold">{item.title}</h1>
        <p className="text-[10px]">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default BannerPage;
