/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '**',
            },
        ],
    },
    swcMinify: true, 
    webpack(config) {
        return config;
    },
};

export default nextConfig;
