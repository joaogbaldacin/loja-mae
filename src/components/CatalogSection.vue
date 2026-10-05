<script setup>
import { ref, computed } from 'vue'
import { MessageCircle, Sparkles, Box, Ruler, CheckCircle2, Tag, ShoppingBag } from 'lucide-vue-next'
import { getWhatsAppUrl } from '@/config/storeInfo'

const selectedCategory = ref('Todos')

const categories = [
  'Todos',
  'Casamento & Padrinhos',
  'Caixas Organizadoras',
  'Presentes & Lembranças',
  'Kits Especiais'
]

const products = [
  {
    id: 1,
    name: 'Caixa Padrinhos Luxo Entalhada',
    category: 'Casamento & Padrinhos',
    description: 'Perfeita para convite de padrinhos de casamento com gravação personalizada de nomes, datas e monogramas.',
    price: 'R$ 129,00',
    dimensions: '25x20x10 cm',
    image: '/catalog-wedding.jpg',
    badge: 'Mais Vendido'
  },
  {
    id: 2,
    name: 'Caixa Organizadora Rustic Walnut',
    category: 'Caixas Organizadoras',
    description: 'Caixa organizadora em madeira nobre com fecho artesanal em latão e encaixe rabo de andorinha.',
    price: 'R$ 145,00',
    dimensions: '30x22x12 cm',
    image: '/hero-box.jpg',
    badge: 'Edição Limitada'
  },
  {
    id: 3,
    name: 'Porta-Joias com Fecho de Bronze',
    category: 'Presentes & Lembranças',
    description: 'Porta-joias artesanal aveludado internamente, ideal para presentear em datas especiais e bodas.',
    price: 'R$ 98,00',
    dimensions: '20x15x8 cm',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    badge: 'Sofisticado'
  },
  {
    id: 4,
    name: 'Kit Vinho & Taças Personalizado',
    category: 'Kits Especiais',
    description: 'Estojo em madeira nobre com nichos para garrafa de vinho, taças e acessórios de degustação.',
    price: 'R$ 210,00',
    dimensions: '36x26x14 cm',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    badge: 'Kit Premium'
  },
  {
    id: 5,
    name: 'Caixa Baú de Memórias de Casamento',
    category: 'Casamento & Padrinhos',
    description: 'Baú de madeira trabalhada para guardar álbum de fotos, votos de casamentos e recordações inesquecíveis.',
    price: 'R$ 185,00',
    dimensions: '35x25x15 cm',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    badge: 'Memória'
  },
  {
    id: 6,
    name: 'Caixa Organizadora para Chás & Temperos',
    category: 'Caixas Organizadoras',
    description: 'Divisórias internas removíveis em madeira maciça, ideal para sachês de chá e especiarias gourmet.',
    price: 'R$ 89,00',
    dimensions: '28x18x9 cm',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop',
    badge: 'Gourmet'
  },
  {
    id: 7,
    name: 'Kit Maternidade & Boas-Vindas',
    category: 'Kits Especiais',
    description: 'Caixa personalizada com nome do bebê gravado a laser, sapatinho e lembrancinhas decoradas.',
    price: 'Sob consulta',
    dimensions: '30x30x12 cm',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    badge: 'Personalizável'
  },
  {
    id: 8,
    name: 'Caixa Presente para Aniversário & Bodas',
    category: 'Presentes & Lembranças',
    description: 'Design sofisticado com fita de cetim e mensagem entalhada na tampa superior de madeira.',
    price: 'R$ 115,00',
    dimensions: '22x22x10 cm',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b072b7?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular'
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})

const openWhatsAppOrder = (productName) => {
  const message = `Olá! Gostaria de encomendar / saber mais detalhes sobre a peça: ${productName}.`
  const url = getWhatsAppUrl(message)
  window.open(url, '_blank')
}
</script>

<template>
  <section id="catalogo" class="py-16 lg:py-24 bg-brand-bg relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Nosso Catálogo</span>
        </div>

        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          Explore nossas criações em madeira
        </h2>

        <p class="text-sm sm:text-base text-brand-muted leading-relaxed">
          Cada peça é produzida com dedicação e pode ser personalizada com nomes, datas e acabamentos à sua escolha.
        </p>
      </div>

      <!-- Filtros de Categoria (Pills / Abas) -->
      <div class="flex items-center justify-center gap-2 flex-wrap mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
          :class="[
            selectedCategory === cat
              ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
              : 'bg-white text-brand-dark hover:bg-brand-secondary-light/40 border border-brand-secondary/30'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid de Produtos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="wood-card wood-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
        >
          <!-- Imagem e Badges -->
          <div class="relative overflow-hidden aspect-4/3 bg-brand-secondary-light/20">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60"></div>

            <!-- Tag da Categoria -->
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-brand-dark border border-brand-secondary/30 shadow-xs">
              {{ product.category }}
            </span>

            <!-- Badge Especial -->
            <span v-if="product.badge" class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary text-white shadow-xs">
              {{ product.badge }}
            </span>
          </div>

          <!-- Conteúdo do Card -->
          <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <!-- Título & Dimensões -->
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-serif font-bold text-slate-900 text-lg group-hover:text-brand-primary transition-colors leading-snug">
                  {{ product.name }}
                </h3>
              </div>

              <!-- Dimensões -->
              <div class="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                <Ruler class="w-3.5 h-3.5 text-brand-primary" />
                <span>{{ product.dimensions }}</span>
              </div>

              <!-- Descrição Curta -->
              <p class="text-xs text-brand-muted leading-relaxed line-clamp-2 pt-1">
                {{ product.description }}
              </p>
            </div>

            <!-- Preço & Botão de Ação -->
            <div class="pt-4 border-t border-brand-secondary/20 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs text-brand-muted font-medium">Valor estimado:</span>
                <span class="font-serif font-bold text-lg text-brand-primary font-mono">
                  {{ product.price }}
                </span>
              </div>

              <!-- Botão Encomendar pelo WhatsApp -->
              <button
                @click="openWhatsAppOrder(product.name)"
                class="w-full py-2.5 px-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-brand-accent/20 active:scale-95 cursor-pointer"
              >
                <MessageCircle class="w-4 h-4 fill-white" />
                <span>Encomendar no WhatsApp</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Rodapé do Catálogo / Personalização sob medida -->
      <div class="mt-16 p-8 rounded-3xl bg-white border border-brand-secondary/30 text-center space-y-4 shadow-md max-w-3xl mx-auto">
        <div class="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary mx-auto flex items-center justify-center">
          <Box class="w-6 h-6" />
        </div>
        <h3 class="font-serif font-bold text-xl text-brand-dark">Precisa de um tamanho ou projeto sob medida?</h3>
        <p class="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto">
          Além das peças do nosso catálogo, desenvolvemos caixas e organizadores em dimensões personalizadas de acordo com o seu projeto.
        </p>
        <button
          @click="openWhatsAppOrder('Projeto Sob Medida / Personalizado')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-dark text-white text-xs font-bold hover:bg-brand-primary transition-all duration-200 shadow-md cursor-pointer"
        >
          <MessageCircle class="w-4 h-4 text-brand-accent fill-brand-accent" />
          <span>Solicitar Orçamento Sob Medida</span>
        </button>
      </div>

    </div>
  </section>
</template>
