import musicIcon from '../assets/icons/music-note-sketch-svgrepo-com.svg'
import fansIcon from '../assets/icons/people-svgrepo-com (1).svg'
import growthIcon from '../assets/icons/growth-report-graph-svgrepo-com.svg'
import promoteIcon from '../assets/icons/speaker-ui-svgrepo-com.svg'

function HowItWorks(){
    return(
        <>
            <section className='w-full bg-[#121217] text-white px-4 md:px-8 lg:px-16 py-12 sm:py-16'>
                <div className='max-w-7xl mx-auto space-y-6'>
                    <h2 className='text-3xl font-black md:text-4xl'>How <span style={{ color: "#5719E5", WebkitTextStroke: '.5px white'}} className=''>Steamrr</span> Works</h2>
                    <p className='text-gray-300 max-w-3xl'>Streamr provides a comprehensive suite of tools to help artists manage their music, engage with fans, and grow their careers. From uploading your latest tracks to tracking your performance, Streamr has you covered.</p>

                    {/* Cards */}
                    <div className='grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4'>

                        {/* Card_1 */}
                        <div className='glassmorph hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out sm:hover:scale-[1.03]'>
                            <img src={musicIcon} className='w-26 h-26 mb-4' alt="Music" />
                            <h3 className='font-bold text-lg mb-2'>Share your music</h3>
                            <p className='text-gray-300 text-sm'>Easily upload and share your music with a global audience.</p>
                        </div>

                        {/* Card_2 */}
                        <div className='glassmorph hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out  sm:hover:scale-[1.03]'>
                            <img src={fansIcon} className='w-26 h-26 mb-4' alt="Fans" />
                            <h3 className='font-bold text-lg mb-2'>Engage with Fans</h3>
                            <p className='text-gray-300 text-sm'>Connect with your fans through comments, messages, and live streams.</p>
                        </div>

                        {/* Card_3 */}
                        <div className='glassmorph hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out  sm:hover:scale-[1.03]'>
                            <img src={growthIcon} className='w-26 h-26 mb-4' alt="Growth" />
                            <h3 className='font-bold text-lg mb-2'>Track your Growth</h3>
                            <p className='text-gray-300 text-sm'>Monitor your performance with detailed analytics and insights</p>
                        </div>

                        {/* Card_4 */}
                        <div className='glassmorph hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out  sm:hover:scale-[1.03]'>
                            <img src={promoteIcon} className='w-26 h-26 mb-4' alt="Promote" />
                            <h3 className='font-bold text-lg mb-2'>Promote your Brand</h3>
                            <p className='text-gray-300 text-sm'>Promote your music and brand with integrated marketing tools.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default HowItWorks