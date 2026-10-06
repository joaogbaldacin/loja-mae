<script setup>
import { ref, computed } from 'vue'
import { MessageCircle, Sparkles, Box, Ruler, CheckCircle2, Tag, ShoppingBag, Heart, X, Info } from 'lucide-vue-next'
import { getWhatsAppUrl } from '@/config/storeInfo'

const selectedCategory = ref('Todos')
const activeProductModal = ref(null)

const categories = [
  'Todos',
  'Kits de Batizado',
  'Caixas para Padrinhos & Revelação',
  'Maternidade & Primeira Bíblia',
  'Caixas Toilette & Eventos',
  'Lembrancinhas & Terços'
]

const products = [
  {
    id: 1,
    name: 'Kit Batizado Luxo Espírito Santo',
    category: 'Kits de Batizado',
    description: 'Caixa artesanal personalizada com monograma, toalha bordada em renda guipir, vela decorada e mini terço de pérolas.',
    price: 'R$ 189,00',
    dimensions: '25x25x10 cm',
    image: '/catalog-wedding.jpg',
    badge: 'Kit Batizado'
  },
  {
    id: 2,
    name: 'Caixa Convite Padrinhos de Batismo & Casamento',
    category: 'Caixas para Padrinhos & Revelação',
    description: 'Caixa em madeira nobre personalizada com iniciais gravadas a laser, mensagem na tampa interna e berço aveludado.',
    price: 'R$ 139,00',
    dimensions: '25x20x10 cm',
    image: '/hero-box.jpg',
    badge: 'Mais Vendido'
  },
  {
    id: 3,
    name: 'Caixa Revelação "Você vai ser Vovó / Madrinha"',
    category: 'Caixas para Padrinhos & Revelação',
    description: 'Caixa delicada para revelar a gravidez com sapatinho de tricô, frasco com cheirinho e plaquinha gravada em madeira.',
    price: 'R$ 119,00',
    dimensions: '20x15x8 cm',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    badge: 'Emocionante'
  },
  {
    id: 4,
    name: 'Primeira Bíblia Sagrada Personalizada',
    category: 'Maternidade & Primeira Bíblia',
    description: 'Bíblia Sagrada revestida em linho nude com gravação dourada do nome da criança. Presente inesquecível para batizado.',
    price: 'R$ 135,00',
    dimensions: '22x15x4 cm',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    badge: 'Inesquecível'
  },
  {
    id: 5,
    name: 'Kit Maternidade & Boas-Vindas do Bebê',
    category: 'Maternidade & Primeira Bíblia',
    description: 'Caixa de memórias da maternidade para guardar a pulseirinha do hospital, o umbiguinho e lembranças do nascimento.',
    price: 'R$ 165,00',
    dimensions: '30x30x12 cm',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    badge: 'Memória'
  },
  {
    id: 6,
    name: 'Caixa Toilette Casamento & Eventos Luxo',
    category: 'Caixas Toilette & Eventos',
    description: 'Caixa organizadora grande com divisórias sob medida para kit toilette de banheiro em recepções e casamentos.',
    price: 'R$ 215,00',
    dimensions: '36x26x14 cm',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    badge: 'Eventos'
  },
  {
    id: 7,
    name: 'Lembrancinha Mini Terço em Caixinha',
    category: 'Lembrancinhas & Terços',
    description: 'Mini terço em pérolas acondicionando em caixinha delicada gravada com nome e data. Mínimo de 10 unidades.',
    price: 'R$ 28,00 / un',
    dimensions: '8x8x4 cm',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop',
    badge: 'Lembrancinhas'
  },
  {
    id: 8,
    name: 'Garrafinha de Água Benta & Marcador',
    category: 'Lembrancinhas & Terços',
    description: 'Frasco de vidro decorado com fita de cetim e laço acompanhado de mini oração recortada a laser.',
    price: 'R$ 35,00 / un',
    dimensions: 'Frasco 100ml',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b072b7?q=80&w=800&auto=format&fit=crop',
    badge: 'Exclusivo'
  }
]

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return products
  }
  return products.filter(p => p.category === selectedCategory.value)
})

const openWhatsAppOrder = (productName) => {
  const message = `Olá! Gostaria de consultar o prazo e encomendar a peça: ${productName}.`
  const url = getWhatsAppUrl(message)
  window.open(url, '_blank')
}

const openModal = (product) => {
  activeProductModal.value = product
}

const closeModal = () => {
  activeProductModal.value = null
}
</script>

<template>
  <section id="catalogo" class="py-16 lg:py-24 bg-brand-bg relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5 text-brand-primary" />
          <span>Catálogo DoceEfeito</span>
        </div>

        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          Explore nossos presentes artesanais
        </h2>

        <p class="text-sm sm:text-base text-brand-muted leading-relaxed">
          Cada peça é produzida com dedicação e pode ser personalizada com nomes, monogramas e mensagens gravadas sob medida.
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
              : 'bg-white text-brand-dark hover:bg-brand-secondary-light/60 border border-brand-secondary/40'
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
          <div 
            @click="openModal(product)" 
            class="relative overflow-hidden aspect-4/3 bg-brand-secondary-light/30 cursor-pointer"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60"></div>

            <!-- Tag da Categoria -->
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-brand-dark border border-brand-secondary/40 shadow-2xs max-w-[180px] truncate">
              {{ product.category }}
            </span>

            <!-- Badge Especial -->
            <span v-if="product.badge" class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary text-white shadow-2xs">
              {{ product.badge }}
            </span>
          </div>

          <!-- Conteúdo do Card -->
          <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <!-- Título & Dimensões -->
              <div class="flex items-start justify-between gap-2">
                <h3 
                  @click="openModal(product)"
                  class="font-serif font-bold text-brand-dark text-base group-hover:text-brand-primary transition-colors leading-snug cursor-pointer"
                >
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

              <!-- Aviso de Produção Artesanal nos Cards -->
              <div class="p-2.5 rounded-xl bg-brand-bg border border-brand-secondary/40 text-[11px] text-brand-muted font-medium leading-tight flex items-start gap-1.5 mt-2">
                <Sparkles class="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                <span>Produção 100% artesanal e personalizada. Prazo de confecção e envio combinados diretamente via WhatsApp.</span>
              </div>
            </div>

            <!-- Preço & Botão de Ação -->
            <div class="pt-4 border-t border-brand-secondary/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs text-brand-muted font-medium">Valor estimado:</span>
                <span class="font-serif font-bold text-base text-brand-primary font-mono">
                  {{ product.price }}
                </span>
              </div>

              <!-- Botão Principal: Consultar Prazo e Encomendar -->
              <button
                @click="openWhatsAppOrder(product.name)"
                class="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer"
              >
                <MessageCircle class="w-4 h-4 fill-white" />
                <span>Consultar Prazo e Encomendar</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Rodapé do Catálogo / Personalização sob medida -->
      <div class="mt-16 p-8 rounded-3xl bg-white border border-brand-secondary/40 text-center space-y-4 shadow-md max-w-3xl mx-auto">
        <div class="w-12 h-12 rounded-2xl bg-brand-primary/15 text-brand-primary mx-auto flex items-center justify-center">
          <Box class="w-6 h-6" />
        </div>
        <h3 class="font-serif font-bold text-xl text-brand-dark">Deseja um projeto de presente totalmente sob medida?</h3>
        <p class="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
          Além das opções do catálogo, criamos caixas, kits de batizado e lembranças de acordo com suas referências, temas e nomes dos homenageados.
        </p>
        <button
          @click="openWhatsAppOrder('Projeto Personalizado Sob Medida')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all duration-200 shadow-md cursor-pointer"
        >
          <MessageCircle class="w-4 h-4 fill-white" />
          <span>Consultar Prazo e Encomendar Sob Medida</span>
        </button>
      </div>

    </div>

    <!-- MODAL DE DETALHES DO PRODUTO -->
    <div 
      v-if="activeProductModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-secondary/40 relative animate-in zoom-in-95 duration-200">
        <!-- Botão Fechar Modal -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand-dark flex items-center justify-center shadow-md transition-all cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>

        <!-- Imagem do Produto no Modal -->
        <div class="relative h-64 bg-brand-secondary-light/30">
          <img 
            :src="activeProductModal.image" 
            :alt="activeProductModal.name" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
          <span class="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-brand-dark shadow-2xs">
            {{ activeProductModal.category }}
          </span>
        </div>

        <!-- Conteúdo do Modal -->
        <div class="p-6 space-y-4">
          <div>
            <h3 class="font-serif text-xl font-bold text-brand-dark">
              {{ activeProductModal.name }}
            </h3>
            <div class="flex items-center justify-between mt-1 text-xs text-brand-muted">
              <span class="flex items-center gap-1 font-medium">
                <Ruler class="w-3.5 h-3.5 text-brand-primary" /> {{ activeProductModal.dimensions }}
              </span>
              <span class="font-serif font-bold text-brand-primary font-mono text-base">
                {{ activeProductModal.price }}
              </span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-brand-muted leading-relaxed">
            {{ activeProductModal.description }}
          </p>

          <!-- Aviso de Produção Artesanal no Modal -->
          <div class="p-3.5 rounded-2xl bg-brand-bg border border-brand-secondary/50 text-xs text-brand-dark leading-relaxed font-medium flex items-start gap-2.5">
            <Sparkles class="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <span>✨ Produção 100% artesanal e personalizada. Prazo de confecção e envio combinados diretamente via WhatsApp.</span>
          </div>

          <!-- Botão no Modal: Consultar Prazo e Encomendar -->
          <div class="pt-2">
            <button
              @click="openWhatsAppOrder(activeProductModal.name)"
              class="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 cursor-pointer"
            >
              <MessageCircle class="w-5 h-5 fill-white" />
              <span>Consultar Prazo e Encomendar</span>
            </button>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
