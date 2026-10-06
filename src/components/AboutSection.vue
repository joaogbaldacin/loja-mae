<script setup>
import { Gift, Palette, Heart, Sparkles, CheckCircle2, Award } from 'lucide-vue-next'
import { storeInfo } from '@/config/storeInfo'

const highlights = [
  {
    title: 'Cuidado Artesanal',
    description: 'Peças feitas à mão com acabamento impecável, linho delicado e laços finos.',
    icon: Gift,
    badge: 'Feito à Mão'
  },
  {
    title: 'Monogramas Exclusivos',
    description: 'Bordados personalizados e gravações sob medida com os nomes dos homenageados.',
    icon: Palette,
    badge: 'Exclusivo'
  },
  {
    title: 'Momentos Especiais',
    description: 'Kits encantadores idealizados para batizados, caixas de padrinhos e maternidade.',
    icon: Heart,
    badge: 'Com Amor'
  }
]
</script>

<template>
  <section id="sobre" class="py-16 lg:py-24 bg-white border-y border-brand-secondary/30 relative overflow-hidden">
    <!-- Decoração sutil de fundo -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Coluna Esquerda: Imagem do Ateliê / Simone Baldacin -->
        <div class="lg:col-span-5 relative">
          <div class="relative group">
            
            <!-- Glow/Moldura Decorativa -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-brand-primary/30 to-brand-accent-rose/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Imagem Principal -->
            <div class="relative wood-card rounded-3xl overflow-hidden shadow-xl border border-brand-secondary/40">
              <img
                src="/about-workshop.jpg"
                alt="Ateliê de Artesanato Simone Baldacin - DoceEfeito"
                class="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <!-- Overlay sutil -->
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>

              <!-- Badge sobre a imagem -->
              <div class="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-secondary/40 shadow-lg flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                  <Gift class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="font-serif font-bold text-sm text-brand-dark">Ateliê Simone Baldacin</h4>
                  <p class="text-xs text-brand-muted">Artesanato afetivo e sob medida em {{ storeInfo.city }}</p>
                </div>
              </div>
            </div>

            <!-- Card de Experiência Flutuante -->
            <div class="hidden sm:flex absolute -top-5 -right-5 bg-brand-dark text-white p-4 rounded-2xl shadow-xl border border-brand-secondary/40 items-center gap-3">
              <Award class="w-8 h-8 text-brand-primary" />
              <div>
                <span class="block font-serif font-bold text-base text-brand-secondary">Carinho &amp; Dedicação</span>
                <span class="text-[11px] text-slate-300">Tradição em Marília/SP</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Coluna Direita: História de Simone Baldacin & Ateliê -->
        <div class="lg:col-span-7 space-y-6 text-brand-dark">
          
          <!-- Subtítulo em Destaque -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5 text-brand-primary" />
            <span>Nossa História &amp; Alma Artesanal</span>
          </div>

          <!-- Título Marcante -->
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight tracking-tight">
            A história por trás do ateliê de artesanato de <span class="text-brand-primary italic">Simone Baldacin</span>
          </h2>

          <!-- Parágrafos da História de Simone Baldacin -->
          <div class="space-y-4 text-brand-muted text-sm sm:text-base leading-relaxed">
            <p>
              A <strong>DoceEfeito - Presentes Especiais</strong> é fruto do talento e da paixão de <strong>Simone Baldacin</strong> pelo artesanato fino em Marília/SP. Cada criação carrega sua dedicação em transformar momentos únicos — como batizados, casamentos e a chegada da maternidade — em memórias inesquecíveis.
            </p>
            <p>
              Com um olhar minucioso para os detalhes, Simone combina tecidos de linho, laços de cetim delicados, bordados personalizados e monogramas gravados sob medida. Da montagem dos kits de batismo ao acabamento das caixas para padrinhos, cada presente é produzido manualmente com extremo afeto e elegância.
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
