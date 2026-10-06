<script setup>
import { Gift, Palette, Heart, Sparkles, CheckCircle2, Award } from 'lucide-vue-next'
import { storeInfo } from '@/config/storeInfo'

const highlights = [
  {
    title: 'Feito à Mão sob Medida',
    description: 'Cada detalhe é cuidadosamente produzido com materiais nobres e acabamento tátil impecável.',
    icon: Gift,
    badge: 'Artesanal'
  },
  {
    title: 'Personalização Exclusiva',
    description: 'Nomes, monogramas, datas e mensagens gravadas sob medida para cada cliente.',
    icon: Palette,
    badge: 'Exclusivo'
  },
  {
    title: 'Presente Afetivo',
    description: 'Ideal para marcar batizados, maternidade, convite de padrinhos e momentos especiais.',
    icon: Heart,
    badge: 'Com Memória'
  }
]
</script>

<template>
  <section id="sobre" class="py-16 lg:py-24 bg-white border-y border-brand-secondary/30 relative overflow-hidden">
    <!-- Decoração sutil de fundo -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Coluna Esquerda: Imagem do Ateliê / Processo Produtivo -->
        <div class="lg:col-span-5 relative">
          <div class="relative group">
            
            <!-- Glow/Moldura Decorativa -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-brand-primary/30 to-brand-accent-rose/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Imagem Principal -->
            <div class="relative wood-card rounded-3xl overflow-hidden shadow-xl border border-brand-secondary/40">
              <img
                src="/about-workshop.jpg"
                alt="Processo de confecção artesanal de presentes especiais"
                class="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <!-- Overlay sutil -->
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>

              <!-- Badge sobre a imagem -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-secondary/40 shadow-lg flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-serif font-bold text-lg">
                  <Gift class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-serif font-bold text-sm text-brand-dark">Confecção 100% Artesanal</h4>
                  <p class="text-xs text-brand-muted">Feito com amor e carinho em {{ storeInfo.city }}</p>
                </div>
              </div>
            </div>

            <!-- Card de Experiência Flutuante -->
            <div class="hidden sm:flex absolute -top-5 -right-5 bg-brand-dark text-white p-4 rounded-2xl shadow-xl border border-brand-secondary/40 items-center gap-3">
              <Award class="w-8 h-8 text-brand-primary" />
              <div>
                <span class="block font-serif font-bold text-base text-brand-secondary">Presentes Especiais</span>
                <span class="text-[11px] text-slate-300">Garantia de Encanto</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Coluna Direita: História & Texto -->
        <div class="lg:col-span-7 space-y-6 text-brand-dark">
          
          <!-- Subtítulo em Destaque -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5 text-brand-primary" />
            <span>Sobre a DoceEfeito</span>
          </div>

          <!-- Título Marcante -->
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight">
            Criando presentes e memórias afetivas para <span class="text-brand-primary italic">momentos inesquecíveis</span>.
          </h2>

          <!-- Parágrafos de História e Paixão -->
          <div class="space-y-4 text-brand-muted text-sm sm:text-base leading-relaxed">
            <p>
              A <strong>DoceEfeito - Presentes Especiais</strong> nasceu do sonho de transformar momentos marcantes da vida — como batizados, nascimento de bebês, celebrações de padrinhos e bodas — em lembranças tangíveis que emocionam e duram para sempre.
            </p>
            <p>
              Cada kit de batizado, caixa de mdf/madeira personalizada, primeira Bíblia bordada e caixa toilette para eventos é planejado nos mínimos detalhes. Cuidamos das cores, tecidos, laços e gravações personalizadas para que cada presente tenha o efeito doce de um carinho sincero.
            </p>
          </div>

          <!-- 3 Bloco de Diferenciais / Destaques -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div 
              v-for="item in highlights" 
              :key="item.title"
              class="p-4 rounded-2xl bg-brand-bg border border-brand-secondary/30 hover:border-brand-primary hover:shadow-md transition-all duration-300 group"
            >
              <div class="w-10 h-10 rounded-xl bg-white text-brand-primary border border-brand-secondary/30 flex items-center justify-center mb-3 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <h3 class="font-serif font-bold text-brand-dark text-sm mb-1 group-hover:text-brand-primary transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-xs text-brand-muted leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
