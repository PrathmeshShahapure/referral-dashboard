
const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-600 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm text-center sm:text-left">
          <span className="font-bold text-[#6e70f1]  text-base">Go Business</span>
          <span className="hidden sm:inline text-gray-400">|</span>
          <p>© 2024 Go Business. All rights reserved.</p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6 text-sm font-medium">
          <a 
            href="#about" 
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none rounded px-1"
          >
            About
          </a>
          <a 
            href="#privacy" 
            className="hover:text-blue-600 transition-colors duration-200 focus:outline-none rounded px-1"
          >
            Privacy
          </a>
        </nav>

      </div>
    </footer>
  )
}

export default Footer