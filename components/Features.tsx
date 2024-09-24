import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div
      className="my-20 pt-10 px-4 md:px-20 w-full flex flex-col items-center justify-center text-center"
      id="features"
    >
      {/* Key Features Section */}
      <div className="flex items-center justify-center bg-sec-col border border-gray-500 rounded-full px-4 py-2">
        <Image
          src="/KeyFeatures.svg"
          width={15}
          height={15}
          alt="versatile icon"
          className="mr-2"
        />
        <div>Key Features</div>
      </div>

      {/* Section Title */}
      <h1 className="my-6 text-xl md:text-2xl lg:text-4xl font-bold">
        Everything you are looking for
      </h1>

      {/* Features Grid */}
      <div className="grid grid-flow-row gap-6 p-4 md:p-10 w-full max-w-7xl">
        {/* Row 1 */}
        <div className="grid grid-flow-row md:grid-flow-col gap-4 md:grid-cols-12">
          {/* Refactor Feature */}
          <div className="border rounded-lg p-4 col-span-12 md:col-span-7 bg-gradient-to-br from-[#f8f9fa] to-[#ebedfc] flex flex-col justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Refactor.svg"
                  width={25}
                  height={25}
                  alt="Refactor icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Sustainable Protein Source
              </h1>
            </div>
            {/* <video className="w-full h-auto" autoPlay loop muted>
              <source src="/Refactor.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <p className="text-gray-300">PlaceHolder for video</p>
            </div>
          </div>

          {/* Navigate Codebases Feature */}
          <div className="border rounded-lg p-4 col-span-12 md:col-span-5 flex flex-col justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Navigate.svg"
                  width={25}
                  height={25}
                  alt="Navigate icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                High Nutritional Value
              </h1>
            </div>
            {/* <video className="w-full h-auto" autoPlay loop muted>
              <source src="/nav.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <p className="text-gray-300">PlaceHolder for video</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-flow-row md:grid-flow-col gap-4">
          {/* Create Web Apps Feature */}
          <div className="border rounded-lg p-4 flex flex-col justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image src="web.svg" width={25} height={25} alt="web icon" />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Advanced Fermentation Technology
              </h1>
            </div>
            {/* <video className="w-full h-auto" autoPlay loop muted>
              <source src="/web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <p className="text-gray-300">PlaceHolder for video</p>
            </div>
          </div>

          {/* Write Commits Feature */}
          <div className="border rounded-lg p-4 flex flex-col justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Commit.svg"
                  width={25}
                  height={25}
                  alt="commit icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Waste Reduction
              </h1>
            </div>
            {/* <Image
              src="/commit.png"
              width={525}
              height={525}
              alt="commit preview"
            /> */}
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <p className="text-gray-300">PlaceHolder for video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
