<script setup>
import { MessageCircle, ArrowRight, Sparkles, Star, ShieldCheck, Heart, Award } from 'lucide-vue-next'
import { getWhatsAppUrl } from '@/config/storeInfo'

const scrollToCatalog = () => {
  const el = document.getElementById('catalogo')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site e gostaria de encomendar uma caixa personalizada.')
</script>

<template>
  <section class="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-brand-bg via-brand-secondary-light/20 to-brand-bg">
    <!-- Subtle Background Glow / Texture Accent -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -right-24 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Coluna Esquerda: Conteúdo & Ações -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <!-- Badge no Topo -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles class="w-4 h-4 text-brand-primary animate-pulse" />
            <span>✨ Caixas e Peças em Madeira Personalizadas</span>
          </div>

          <!-- Título Principal -->
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
            Artesanato feito à mão com <span class="text-brand-primary italic">amor &amp; elegância</span>
          </h1>

          <!-- Subtítulo -->
          <p class="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
            Produzimos peças sob medida para presentes inesquecíveis, casamentos, eventos corporativos e organização do lar com acabamento de alta marcenaria.
          </p>

          <!-- Botões de Ação -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
            <!-- Botão Principal: Ver Catálogo -->
            <button
              @click="scrollToCatalog"
              class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary-hover transition-all duration-200 shadow-lg shadow-brand-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Ver Catálogo</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <!-- Botão Secundário: WhatsApp -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-hover transition-all duration-200 shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <MessageCircle class="w-5 h-5 fill-white" />
              <span>Encomendar no WhatsApp</span>
            </a>
          </div>

          <!-- Mini Selos de Confiança -->
          <div class="pt-6 border-t border-brand-secondary/30 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-brand-muted font-medium">
            <div class="flex items-center gap-1.5">
              <ShieldCheck class="w-4 h-4 text-brand-primary" />
              <span>Madeira Sustentável</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Award class="w-4 h-4 text-brand-primary" />
              <span>Garantia de Qualidade</span>
            </div>
            <div class="flex items-center gap-1.5">
              <Heart class="w-4 h-4 text-brand-primary" />
              <span>Entalhe Exclusivo</span>
            </div>
          </div>

        </div>

        <!-- Coluna Direita: Visual / Imagem & Card Flutuante -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-lg lg:max-w-none">
            
            <!-- Moldura Decorativa de Fundo -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-3xl opacity-20 blur-xl"></div>

            <!-- Card/Imagem Principal -->
            <div class="relative wood-card rounded-3xl overflow-hidden p-3 shadow-2xl border border-brand-secondary/40 group">
              <img
                src="/hero-box.jpg"
                alt="Caixa de Madeira Artesanal"
                class="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />

              <!-- Overlay sutil de gradiente na imagem -->
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            <!-- Card Flutuante de Avaliação / Destaque -->
            <div class="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-secondary/40 shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shadow-inner">
                <Star class="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div class="flex items-center gap-1 text-xs font-bold text-brand-dark">
                  <span>⭐ 100% Personalizado</span>
                </div>
                <p class="text-[11px] font-semibold text-brand-primary">
                  Feito à Mão pelo Artesão
                </p>
              </div>
            </div>

            <!-- Badge Secundária Flutuante no Topo Direito -->
            <div class="absolute -top-4 -right-2 bg-brand-dark text-brand-bg px-4 py-2 rounded-xl border border-brand-secondary/30 shadow-lg text-xs font-serif font-bold">
              📦 Entrega para todo Brasil
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>
