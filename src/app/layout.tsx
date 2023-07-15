import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NEXUS WEAR',
    description: 'ON-CHAIN STREETWEAR',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="max-w-7xl mx-auto p-12 xl:px-0">
                    <div className="space-x-4 text-center">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/catalog">Catalog</Link>
                    </div>
                </div>

                <>{children}</>

                <div className="max-w-7xl mx-auto p-12 xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <p>Nexus is a streetwear brand inspired by Crypto, built on the blockchain.</p>
                        <p></p>
                        <p className="md:text-right">NEXUS WEAR &copy; Est. {new Date().getFullYear()}</p>
                    </div>
                </div>

            </body>
        </html>
    )
}
