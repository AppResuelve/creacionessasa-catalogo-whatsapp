const BASE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://creacionessasa.com.ar'

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}

export const baseMetadata = {
  title: {
    default: 'Creaciones Sasa',
    template: `%s — Creaciones Sasa`,
  },
  description: 'Productos hechos a mano con dedicación',
  icons: [{ url: '/logotipo.png' }],
  openGraph: {
    siteName: 'Creaciones Sasa',
    images: [`${BASE_URL}/og-image.jpg`],
  },
}

export function productMetadata(product: any) {
  const desc = stripHtml(product?.description || '').substring(0, 155)
  return {
    title: product?.name,
    description: desc,
    alternates: { canonical: `${BASE_URL}/productos/${product?.slug}` },
    openGraph: {
      title: product?.name,
      description: desc,
      images: product?.images?.[0] ? [product.images[0]] : undefined,
      url: `${BASE_URL}/productos/${product?.slug}`,
    },
  }
}
