import menuIcon from '../assets/icons/hamburger-menu-svgrepo-com (1).svg'
import logoIcon from '../assets/icons/music-note-sketch-svgrepo-com.svg'

function Header() {
    return(
        <>
            {/* Header Section */}
            {/* style={{ backgroundColor: '#121217' 'dddde8' }} */}
            {/* This is React’s way to add inline CSS styles directly to an element. */}
            
            <header style={{backgroundColor: "#121217"}} className='w-full md:px-24 px-4 py-4 border-b-1 border-white/10'>
                <div className='max-w-7xl mx-auto flex items-center justify-between'>

                    {/* Logo */}
                    <div className="flex items-center space-x-2 text-2xl font-bold text-white cursor-pointer">
                        <img className='w-6 hover:text-shadow-[0_0_12px_#5719E5]' src={logoIcon} alt="Logo" />
                        <p style={{ color: "#5719E5", WebkitTextStroke: '.1px white'}} className='hover:text-shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out'>Streamrr</p>
                    </div>

                    {/* Hamburger Icon(Mobile Screens Only) */}
                    <div className='md:hidden'>
                        <button className='cursor-pointer hover:shadow-[0_0_12px_#5719E5] transition duration-300 ease-in-out' aria-label="Open menu">
                            <img className='w-8' src={menuIcon} alt="Menu"/>
                        </button>
                    </div>

                    {/* Navigation (Desktop Only) */}
                    <nav className='hidden md:flex items-center space-x-6'>
                        <a href="#" className='text-white glow-text'>Home</a>
                        <a href="#" className='text-white glow-text'>Features</a>
                        <a href="#" className='text-white glow-text'>Pricing</a>
                        <a href="#" className='text-white glow-text'>Support</a>

                        <button style={{backgroundColor: "#5719E5"}} className='text-white font-bold px-8 py-3 rounded-full hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_12px_#5719E5]'>Get Started</button>
                    </nav>

                </div>
            </header>
        </>
    );
}

export default Header