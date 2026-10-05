export const storeInfo = {
  storeName: 'Ateliê de Caixas Personalizadas',
  city: 'Marília - SP',
  whatsappNumber: '5519981275404',
  formattedPhone: '(19) 98127-5404',
  instagramUrl: 'https://instagram.com/',
  facebookUrl: 'https://facebook.com/',
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
export const getWhatsAppUrl = (message = 'Olá! Gostaria de mais informações sobre as caixas personalizadas.') => {
  return `https://wa.me/${storeInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
}
