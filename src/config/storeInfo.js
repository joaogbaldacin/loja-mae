export const storeInfo = {
  storeName: 'DoceEfeito - Presentes Especiais',
  phone: '(19) 98127-5404',
  formattedPhone: '(19) 98127-5404',
  whatsappNumber: '5519981275404',
  city: 'Marília / SP',
  instagramUrl: 'https://www.instagram.com/doceefeito.presentesespecias/',
  instagramHandle: '@doceefeito.presentesespecias',
  shippingNote: 'Enviamos para todo o Brasil e exterior',
  facebookUrl: 'https://www.instagram.com/doceefeito.presentesespecias/',
  operatingHours: {
    weekdays: 'Segunda a Sexta: 08h às 18h',
    saturday: 'Sábado: 08h às 12h'
  }
}

/**
 * Retorna a URL oficial do WhatsApp formatada com mensagem encodada.
 * @param {string} message - Mensagem pré-definida
 * @returns {string} URL no formato https://wa.me/NUMERO?text=MENSAGEM
 */
export const getWhatsAppUrl = (message = 'Olá! Gostaria de mais informações sobre os presentes especiais da DoceEfeito.') => {
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
}
