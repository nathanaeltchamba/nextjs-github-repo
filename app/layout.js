import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nate\'s Github Repos',
  description: 'Web development repositories using Python, Javascript, Django, React , and more',
  keywords: 'css, html, web development, web design, javascript, react, next.js, tailwind, python django'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
      </body>
    </html>
  )
}
