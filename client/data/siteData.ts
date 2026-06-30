export const siteData = {
  navbar: {
    logoOnly: false,
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Productos', href: '/productos' },
      { label: 'Servicios', href: '/servicios' },
      { label: 'Carrito', href: '/carrito', showCartCount: true },
      { label: 'Contacto', href: '/contacto' },
    ],
    ctaText: 'Ver carrito',
  },

  footer: {
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '/' },
          { label: 'Productos', href: '/productos' },
          { label: 'Servicios', href: '/servicios' },
          { label: 'Carrito', href: '/carrito' },
          { label: 'Contacto', href: '/contacto' },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: 'creacionessasa-cart',
    showDeliveryModal: false,
  },
}

export const content = {
  home: {
    hero: {
      badge: 'Creaciones Sasa',
      title: 'Productos hechos a mano',
      highlightedText: 'con dedicación y amor',
      subtitle:
        'Creaciones únicas y personalizadas. Perfectas para regalar o decorar tu hogar.',
      primaryButtonText: 'Ver productos',
      primaryButtonLink: '/productos',
      secondaryButtonText: 'Contactar',
      secondaryButtonLink: '/contacto',
    },
    featuredTitle: 'Colección',
    featuredSubtitle: 'Nuestros productos más recientes',
    categoriesTitle: 'Categorías',
    categoriesSubtitle: 'Explorá por tipo de producto',
    cta: {
      title: '¿Tenés un pedido especial?',
      subtitle: 'Hacemos creaciones personalizadas para cualquier ocasión. Escribinos y lo charlamos.',
      buttonText: 'Consultar presupuesto',
      buttonLink: '/contacto',
    },
  },

  products: {
    badge: 'Catálogo',
    title: 'Nuestros productos',
    subtitle: 'Encontrá lo que buscás',
    noResults: 'No hay productos que coincidan con tu búsqueda.',
    clearFilters: 'Limpiar filtros',
  },

  productDetail: {
    backTo: 'Volver al catálogo',
    categoryLabel: 'Categoría',
    tagsLabel: 'Etiquetas',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    relatedTitle: 'También te puede gustar',
  },

  cart: {
    title: 'Tu pedido',
    emptyTitle: 'Tu pedido está vacío',
    emptyMessage: 'Elegí tus productos favoritos para armar el pedido que querés.',
    browseProducts: 'Ver productos',
    itemCount: '{count} producto(s)',
    subtotal: 'Subtotal',
    total: 'Total',
    requestQuote: 'Encargar por WhatsApp',
    removeItem: 'Eliminar',
    clearCart: 'Vaciar carrito',
    continueShopping: 'Seguir eligiendo',
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    subtitle:
      '¿Tenés alguna pregunta o querés un pedido personalizado? Escribinos y te respondemos a la brevedad.',
    infoTitle: 'Encontranos',
  },

  notFound: {
    title: '404',
    subtitle: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscás no existe o fue movida.',
    buttonText: 'Volver al inicio',
    buttonLink: '/',
  },

  services: {
    badge: 'Servicios',
    title: 'Nuestros servicios',
    subtitle: 'Lo que ofrecemos',
    noResults: 'No hay servicios disponibles en este momento.',
  },

  serviceDetail: {
    backTo: 'Volver a servicios',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    requestWhatsApp: 'Pedir por WhatsApp',
    duration: 'Duración estimada',
  },
}
