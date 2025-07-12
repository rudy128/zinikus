/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'thriftyai.com',
                port: '',
                pathname: '/assets/images/logo.png'
            
            }
        ]
    }
};

export default nextConfig;
