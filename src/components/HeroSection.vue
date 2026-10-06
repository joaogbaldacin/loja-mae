<script setup>
import { MessageCircle, ArrowRight, Sparkles, Star, ShieldCheck, Heart, Plane, MapPin, Award } from 'lucide-vue-next'
import { getWhatsAppUrl, storeInfo } from '@/config/storeInfo'

const scrollToCatalog = () => {
  const el = document.getElementById('catalogo')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const whatsappUrl = getWhatsAppUrl('Olá! Vim pelo site da DoceEfeito e gostaria de solicitar um orçamento de presente personalizado.')
</script>

<template>
  <section class="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-brand-bg via-brand-secondary-light/30 to-brand-bg">
    <!-- Subtle Background Glow / Texture Accent -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -right-24 w-96 h-96 bg-brand-accent-rose/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Coluna Esquerda: Conteúdo & Ações -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          <!-- Badge no Topo -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles class="w-4 h-4 text-brand-primary animate-pulse" />
            <span>✨ DoceEfeito - Presentes Especiais</span>
          </div>

          <!-- Título Principal -->
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
            Presentes afetivos feitos à mão para <span class="text-brand-primary italic">eternizar momentos especiais</span>
          </h1>

          <!-- Subtítulo -->
          <p class="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
            Cada caixa, bíblia e kit de batismo é produzido artesanalmente no nosso ateliê em Marília/SP, cuidando de cada laço e detalhe com todo o carinho.
          </p>

          <!-- Botões de Ação -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
            <!-- Botão Principal: Conhecer as nossas Peças -->
            <button
              @click="scrollToCatalog"
              class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary-hover transition-all duration-200 shadow-lg shadow-brand-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Conhecer as nossas Peças</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <!-- Botão Secundário: WhatsApp -->
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <MessageCircle class="w-5 h-5 fill-white" />
              <span>Falar direto no WhatsApp</span>
            </a>
          </div>

          <!-- Destaques de Confiança -->
          <div class="pt-6 border-t border-brand-secondary/40 flex flex-wrap justify-center lg:justify-start items-center gap-5 sm:gap-6 text-xs text-brand-dark font-medium">
            <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-brand-secondary/40 shadow-2xs">
              <Plane class="w-4 h-4 text-brand-primary shrink-0" />
              <span>Enviamos para todo o Brasil e exterior ✈️</span>
            </div>
            <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-brand-secondary/40 shadow-2xs">
              <Sparkles class="w-4 h-4 text-brand-primary shrink-0" />
              <span>Personalização Exclusiva com Nome/Monograma</span>
            </div>
            <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-brand-secondary/40 shadow-2xs">
              <MapPin class="w-4 h-4 text-brand-primary shrink-0" />
              <span>Atendimento via WhatsApp em Marília/SP</span>
            </div>
          </div>

        </div>

        <!-- Coluna Direita: Visual / Imagem & Card Flutuante -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-lg lg:max-w-none">
            
            <!-- Moldura Decorativa de Fundo -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent-rose rounded-3xl opacity-30 blur-xl"></div>

            <!-- Card/Imagem Principal -->
            <div class="relative wood-card rounded-3xl overflow-hidden p-3 shadow-2xl border border-brand-secondary/40 group">
              <img
                src="/hero-box.jpg"
                alt="Caixa Personalizada DoceEfeito"
                class="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />

              <!-- Overlay sutil de gradiente na imagem -->
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            <!-- Card Flutuante de Avaliação / Destaque -->
            <div class="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-secondary/40 shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-inner border border-amber-200">
                <Star class="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div class="flex items-center gap-1 text-xs font-bold text-brand-dark">
                  <span>✨ Feito à Mão sob Medida</span>
                </div>
                <p class="text-[11px] font-semibold text-brand-primary">
                  Kits de Batizado & Caixas Personalizadas
                </p>
              </div>
            </div>

            <!-- Badge Secundária Flutuante no Topo Direito -->
            <div class="absolute -top-4 -right-2 bg-brand-dark text-white px-4 py-2 rounded-xl border border-brand-secondary/30 shadow-lg text-xs font-serif font-bold flex items-center gap-1.5">
              <span>✈️ Brasil &amp; Exterior</span>
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
