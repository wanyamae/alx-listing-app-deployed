import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md">
                { /* Logo or brand name */}
            <div className="flex items-center space-x-2">
                <Image 
                src="/assets/logo.png" 
                alt="Logo"
                height={40}
                width={40}
                className="h-10 w-10 object-contain"/>
            </div>

            {/* Accomodatin Types*/}
            {/* Accommodation Types */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-6 text-gray-600">
                    <li><Link href="/rooms" className="hover:text-blue-600">Rooms</Link></li>
                    <li><Link href="/mansion" className="hover:text-blue-600">Mansion</Link></li>
                    <li><Link href="/countryside" className="hover:text-blue-600">Countryside</Link></li>
                </ul>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 mx-8 max-w-md">
                <input
                    type="text"
                    placeholder="Search accommodations..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
                <Link href="/signin" className="px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50">Sign In</Link>
                <Link href="/signup" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Sign Up</Link>
                <Link href="/booking" className="px-4 py-2 rounded-lg bg-fuchsia-500 text-white hover:bg-lime-400">Bookings</Link>
            </div>
        </header>
    )
}

export default Header;