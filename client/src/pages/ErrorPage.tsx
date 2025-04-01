import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="bg-black text-white dark:text-white">
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-[#F99115]">404</h1>
          <p className="text-2xl font-medium mt-4 text-white">Oops! Page not found</p>
          <p className="mt-4 mb-8 text-white">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="px-6 py-3 bg-gray-700 text-white font-bold font-semibold rounded-full hover:bg-[#6b573f] transition duration-300 ease-in-out "
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage