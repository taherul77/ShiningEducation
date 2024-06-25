export default function Banner({ img, heading }) {
    return (
      // Container div for the banner section with relative positioning and overflow hidden
      <div className="relative flex w-full items-center justify-center bg-no-repeat h-[90vh] overflow-hidden">
        {/* Background image */}
        <div
          style={{ "--image-url": `url(${img})` } } // Set background image dynamically using inline styles
          className="absolute inset-0 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat filter blur-[3px]" // Background image styling with blur effect
        ></div>
        {/* Content */}
        <div className="relative text-white md:px-10 lg:px-48 lg:py-20">
          <div className="flex justify-center text-center items-center">
            {/* Heading */}
            <h3 className="uppercase font-bold text-3xl md:text-4xl lg:text-8xl lg:mb-5 text-nowrap">
              {heading}
            </h3>
          </div>
        </div>
      </div>
    );
  }