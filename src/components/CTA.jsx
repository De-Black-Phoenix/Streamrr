function CTA(){
    return(
        <>
            <section className="w-full bg-[#121217] text-center text-white px-4 md:px-8 lg:px-16 py-20 sm:py-24 md-py-50">
                <div className="max-w-2xl sm:w-3xl mx-auto flex flex-col items-center justify-center text-center gap-8 sm:gap-12">
                    <h2 className='text-3xl font-black md:text-4xl'>Ready to take your <span style={{ color: "#5719E5", WebkitTextStroke: '.5px white'}} className=''>Music Career</span> to the next level?</h2>
                    
                    <button
                        style={{ backgroundColor: "#5719E5" }}
                        className="text-white font-bold px-10 py-3 rounded-full hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out cursor-pointer"
                    >
                    Get Started
                    </button>
                </div>
            </section>
        </>
    );
}

export default CTA