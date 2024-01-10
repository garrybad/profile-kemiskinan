/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'kitabisa.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'asset.ayobantu.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'kitabisa.com',
                pathname: '**'
            },
        ]
    }
}

module.exports = nextConfig
