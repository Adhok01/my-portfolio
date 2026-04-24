import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Adhokshaja Nagarhalli — AI Product & Analytics',
  description: 'Portfolio of Adhokshaja Nagarhalli — MBA Marketing, MS Data Science, AI Product Management, Market Research, Data Analytics.',
  keywords: ['AI Product Management', 'Market Research', 'Data Analytics', 'MBA', 'Portfolio'],
  openGraph: {
    title: 'Adhokshaja Nagarhalli',
    description: 'AI Product Management · Market Research · Data Analytics',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className="noise">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
