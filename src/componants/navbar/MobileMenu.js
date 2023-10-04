import React from 'react'

function MobileMenu({ onClose }) {
  return (
    <div className=" md:hidden fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-700 opacity-70"></div>
      <div className="relative z-10 bg-white rounded-lg p-4">
        {/* Your content here */}
        <p>Hello, I'm the overlay!</p>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default MobileMenu