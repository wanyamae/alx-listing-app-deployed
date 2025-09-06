import Link from 'next/link';
const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-gray-100 shadow-inner">
            <div className="text-gray-600">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div>
            <nav className="flex space-x-4">
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
            </nav>
        </footer>
    )
}

export default Footer;