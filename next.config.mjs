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
            },
            {
                protocol: 'http',
                hostname: 'www.afip.gob.ar',
                port: '',
                pathname: '/**'
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors:true
    }
};

export default nextConfig;
