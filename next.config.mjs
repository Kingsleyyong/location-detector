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
        NEXTAUTH_URL: 'http://localhost:3000',
        GOOGLE_CLIENT_ID:
            '735033680290-p9iidt281t3rnd2otl0sd87ouud4155h.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        FACEBOOK_CLIENT_ID: '464343849458242',
        FACEBOOOK_CLIENT_SECRET: '0acf2b470dcf4415f6f2a308e8559ac8',
        JWT_SECRET: 'zXQjKliaeLXIMX0vsi0nr1txl/Q+d7YE+xSVmbwW1UU=',
    },
}

export default withPWA({
    dest: 'public', // Destination directory for the PWA files
    disable: process.env.NODE_ENV === 'development' ? true : false, // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
})(nextConfig)
