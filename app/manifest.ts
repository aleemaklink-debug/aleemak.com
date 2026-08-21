import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ALEEMAK — Business, Digital & Postal Solutions',
    short_name: 'ALEEMAK',
    description:
      'Business, Digital & Postal Solutions for small businesses and entrepreneurs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111110',
    theme_color: '#111110',
    icons: [
      {
        src: '/aleemak-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
