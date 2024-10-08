/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cuponstar-ar.s3.amazonaws.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'acdn.mitiendanube.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
