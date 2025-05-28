import heroImage from '../assets/images/bruno-cervera-dtqlaz4HyHw-unsplash.jpg'

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#313137" }} className="w-full text-white px-4 md:px-8 lg:px-16 py-10">
        <div className="relative w-full max-w-4xl md:max-w-7xl mx-auto flex flex-col justify-center items-center text-center gap-6 md:gap-10 p-10 rounded-xl overflow-hidden min-h-[500px] md:min-h-[600px]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0 rounded-xl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
            {/* Headline */}
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
              Connect with your <span style={{ color: "#5719E5", WebkitTextStroke: '.5px white'}} className=''>Audience</span>
            </h1>

            <p className="glassmorph text-base md:text-lg text-gray-300 max-w-xl mx-auto">
              <span className='font-bold'>Streamrr</span> is the platform for artists to connect with their fans and grow their audience. Share your music, engage with your community, and build your brand.
            </p>

            <button
              style={{ backgroundColor: "#5719E5" }}
              className="text-white font-bold px-10 py-3 rounded-full mt-4 hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
