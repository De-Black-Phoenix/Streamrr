import instagramIcon from '../assets/icons/instagram-svgrepo-com1.svg'
import xIcon from '../assets/icons/twitter-svgrepo-com1.svg'
import tiktokIcon from '../assets/icons/tiktok-svgrepo-com1.svg'

function Footer(){
    return(
        <>
            <footer className='border-t border-white/10 backdrop-blur bg-[#121217] text-white px-4 md:px-8 lg:px-16 py-12'>
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
                    {/* Top Links */}
                    <div className=" text-center flex flex-col gap-4 justify-center md:flex-row md:gap-20 text-sm font-medium mb-6">
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Contact</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:drop-shadow-[0_0_6px_#5719E5] transition duration-300"><img src={instagramIcon} alt="Instagram"  className="w-8 h-8" /></a>
                        <a href="#" className="hover:drop-shadow-[0_0_6px_#5719E5] transition duration-300"><img src={xIcon} alt="X"  className="w-8 h-8" /></a>
                        <a href="#" className="hover:drop-shadow-[0_0_6px_#5719E5] transition duration-300"><img src={tiktokIcon} alt="Tiktok"  className="w-8 h-8" /></a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400 text-center mt-4">©2025 Streamrr. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer