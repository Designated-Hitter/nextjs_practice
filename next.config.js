/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "/form",
                
            }
        ]
    }
}

module.exports = nextConfig
