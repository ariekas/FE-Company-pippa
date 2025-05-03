export default function Navbar() {
    return (
        <div className="p-3 flex items-center justify-between shadow-md border-b border-blue-100">
            <div className="text-gray-700">
                <h1 className="text-lg font-light flex gap-1">Lorem <p className="text-[#0052DA] text-xl font-bold">Ipsun</p>.</h1>
            </div>
            <div className="items-center flex gap-5 font-light text-gray-700 text-lg">
                <a href="#" className="relative hover:text-[#0052DA] transition-colors duration-300 py-2 group">
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0052DA] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
                <a href="#" className="relative hover:text-[#0052DA] transition-colors duration-300 py-2 group">
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0052DA] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
                <a href="#" className="relative hover:text-[#0052DA] transition-colors duration-300 py-2 group">
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0052DA] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
                <a href="#" className="relative hover:text-[#0052DA] transition-colors duration-300 py-2 group">
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0052DA] group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
            </div>
            <div>
                <button className="bg-[#0052DA] text-white py-1.5 px-5 rounded-full">Login</button>
            </div>
        </div>
    )
}