<script setup>
import { 
  Lightbulb, 
  Palette, 
  Hammer, 
  Package, 
  Star, 
  Sparkles, 
  Quote, 
  Heart,
  CheckCircle2,
  MapPin
} from 'lucide-vue-next'

const steps = [
  {
    step: 'Etapa 1',
    title: 'Escolha o modelo ou inspiração no catálogo',
    description: 'Navegue pelas nossas opções de Kits de Batizado, Caixas para Padrinhos, Maternidade, Primeira Bíblia e Eventos.',
    icon: Lightbulb,
    badge: 'Passo 1'
  },
  {
    step: 'Etapa 2',
    title: 'Clique em "Consultar Prazo" para falar direto no WhatsApp',
    description: 'Ao clicar no botão do produto, você é direcionado automaticamente para o nosso atendimento no WhatsApp com o item selecionado.',
    icon: MessageCircle,
    badge: 'Passo 2'
  },
  {
    step: 'Etapa 3',
    title: 'Combine os detalhes e finalize seu pedido',
    description: 'Defina nomes, monogramas, cores e confirme o prazo de confecção e frete para envio em todo o Brasil e exterior.',
    icon: Palette,
    badge: 'Passo 3'
  }
]

const reviews = [
  {
    id: 1,
    name: 'Camila & Gustavo',
    occasion: 'Caixas para Padrinhos de Casamento',
    city: 'Marília - SP',
    text: 'Encomendamos 12 caixas personalizadas para o convite dos nossos padrinhos. O acabamento da madeira é impecável, o cheirinho de óleo natural e a gravação dos nomes ficou simplesmente perfeita! Todos os padrinhos amaram.',
    rating: 5,
    avatarBg: 'bg-brand-primary text-white'
  },
  {
    id: 2,
    name: 'Juliana Medeiros',
    occasion: 'Presente de Aniversário de Bodas',
    city: 'Bauru - SP',
    text: 'Pedi um baú de memórias para o aniversário de bodas dos meus pais. A atenção nos detalhes, o fecho em bronze e a pontualidade na entrega superaram minhas expectativas. Super recomendo o trabalho do ateliê!',
    rating: 5,
    avatarBg: 'bg-amber-800 text-white'
  },
  {
    id: 3,
    name: 'Ricardo Silveira',
    occasion: 'Organizadores de Maquiagem & Joias',
    city: 'São Paulo - SP',
    text: 'Comprei uma caixa organizadora grande com divisórias internas para presentear minha esposa. A qualidade da madeira nobre e o toque aveludado interno são de altíssimo nível. Compra 100% segura!',
    rating: 5,
    avatarBg: 'bg-emerald-800 text-white'
  }
]
</script>

<template>
  <div class="space-y-16 py-16 lg:py-24">
    
    <!-- PARTE 1: Como Funciona o Pedido Personalizado -->
    <section id="como-funciona" class="bg-white py-16 rounded-3xl border border-brand-secondary/30 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Cabeçalho Parte 1 -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5" />
            <span>Passo a Passo</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Como encomendar sua caixa personalizada
          </h2>

          <p class="text-sm sm:text-base text-brand-muted leading-relaxed">
            Do primeiro contato via WhatsApp até a entrega final, garantimos uma experiência transparente e sob medida.
          </p>
        </div>

        <!-- Grid de 3 Passos -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div
            v-for="(item, index) in steps"
            :key="item.step"
            class="wood-card rounded-2xl p-6 relative flex flex-col justify-between hover:border-brand-primary hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <!-- Número da Etapa & Ícone -->
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-brand-bg text-brand-primary border border-brand-secondary/30 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 shadow-xs">
                  <component :is="item.icon" class="w-6 h-6" />
                </div>
                <span class="font-serif font-bold text-2xl text-brand-secondary">
                  0{{ index + 1 }}
                </span>
              </div>

              <!-- Título & Descrição -->
              <h3 class="font-serif font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-primary transition-colors">
                {{ item.title }}
              </h3>

              <p class="text-xs text-brand-muted leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <!-- Footer Card Badge -->
            <div class="mt-6 pt-4 border-t border-brand-secondary/20 flex items-center gap-1.5 text-[11px] font-bold text-brand-primary">
              <CheckCircle2 class="w-3.5 h-3.5 text-brand-accent" />
              <span>Etapa Simplificada</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- PARTE 2: Depoimentos de Clientes -->
    <section id="depoimentos" class="bg-brand-bg py-16 rounded-3xl border border-brand-secondary/30 relative overflow-hidden">
      <!-- Decoração de Fundo -->
      <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Cabeçalho Parte 2 -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Heart class="w-3.5 h-3.5 text-brand-primary fill-brand-primary/20" />
            <span>Depoimentos</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Clientes satisfeitos e memórias eternizadas
          </h2>

          <p class="text-sm sm:text-base text-brand-muted leading-relaxed">
            Confira a opinião de quem já encomendou peças artesanais exclusivas no nosso ateliê.
          </p>
        </div>

        <!-- Grid de Depoimentos (3 Cards) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="review in reviews"
            :key="review.id"
            class="wood-card rounded-2xl p-7 flex flex-col justify-between space-y-6 shadow-md hover:border-brand-primary transition-all duration-300 relative group"
          >
            <!-- Ícone de Aspas Sutil no Canto -->
            <Quote class="w-8 h-8 text-brand-secondary/40 absolute top-5 right-5 group-hover:text-brand-primary/30 transition-colors" />

            <div class="space-y-4">
              <!-- Avaliação 5 Estrelas -->
              <div class="flex items-center gap-1">
                <Star 
                  v-for="i in review.rating" 
                  :key="i" 
                  class="w-4 h-4 text-amber-500 fill-amber-500" 
                />
                <span class="text-xs font-bold text-brand-dark ml-1.5 font-mono">5.0 / 5.0</span>
              </div>

              <!-- Texto do Depoimento -->
              <p class="text-xs sm:text-sm text-brand-dark leading-relaxed italic">
                "{{ review.text }}"
              </p>
            </div>

            <!-- Dados do Cliente & Ocasião -->
            <div class="pt-4 border-t border-brand-secondary/20 flex items-center gap-3">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm shadow-xs"
                :class="review.avatarBg"
              >
                {{ review.name.charAt(0) }}
              </div>

              <div class="flex-grow">
                <h4 class="font-serif font-bold text-brand-dark text-sm">
                  {{ review.name }}
                </h4>
                <div class="flex items-center justify-between text-[11px] text-brand-muted mt-0.5">
                  <span class="font-semibold text-brand-primary">{{ review.occasion }}</span>
                  <span class="flex items-center gap-0.5 font-mono text-[10px]">
                    <MapPin class="w-3 h-3 text-brand-muted" /> {{ review.city }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>
