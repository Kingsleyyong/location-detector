import withPWA from 'next-pwa'
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true, // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
    },
    env: {
        GOOGLE_API_KEY: 'AIzaSyAQYN3xWOmqJiy14qqhipBSRAVFZa9cLeo',
    },
}

export default withPWA({
    dest: 'public', // Destination directory for the PWA files
    disable: process.env.NODE_ENV === 'development' ? true : false, // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
})(nextConfig)
