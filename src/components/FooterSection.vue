<script setup>
import { ref } from 'vue'
import { 
  Sparkles, 
  Gift, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Instagram, 
  Plane, 
  Heart, 
  ChevronRight,
  ShieldCheck
} from 'lucide-vue-next'
import { storeInfo, getWhatsAppUrl } from '@/config/storeInfo'

const showTooltip = ref(false)

const quickLinks = [
  { name: 'Início', href: '#' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Depoimentos', href: '#depoimentos' },
]

const openWhatsApp = () => {
  const url = getWhatsAppUrl('Olá! Vim pelo site da DoceEfeito e gostaria de saber mais sobre os presentes especiais.')
  window.open(url, '_blank')
}
</script>

<template>
  <footer class="bg-brand-dark text-brand-bg relative pt-16 pb-12 border-t border-brand-secondary/30">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Grid de 4 Colunas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
        
        <!-- Coluna 1: Sobre a Loja (span 4) -->
        <div class="lg:col-span-4 space-y-4">
          <!-- Logo & Marca -->
          <a href="#" class="flex items-center gap-3 group">
            <div class="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/20">
              <Gift class="w-6 h-6 text-white" />
            </div>
            <div class="flex flex-col">
              <span class="font-serif font-bold text-xl text-white tracking-tight leading-tight">
                {{ storeInfo.storeName }}
              </span>
              <span class="text-[11px] font-medium text-brand-secondary/80 flex items-center gap-1">
                <MapPin class="w-3 h-3 text-brand-primary" /> {{ storeInfo.city }}
              </span>
            </div>
          </a>

          <!-- Descrição -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
            Ateliê especializado em Kits de Batizado, Caixas para Padrinhos, Maternidade, Primeira Bíblia e Caixas de Madeira Personalizadas em {{ storeInfo.city }}.
          </p>

          <!-- Badges de Qualidade & Envio -->
          <div class="flex flex-wrap items-center gap-2 pt-2 text-[11px]">
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-brand-secondary font-medium flex items-center gap-1">
              <Plane class="w-3 h-3 text-brand-primary" /> {{ storeInfo.shippingNote }}
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 font-medium flex items-center gap-1">
              <Sparkles class="w-3 h-3" /> Feito à Mão
            </span>
          </div>
        </div>

        <!-- Coluna 2: Links Rápidos (span 2) -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="font-serif font-bold text-sm text-brand-secondary uppercase tracking-wider">
            Navegação
          </h4>
          <ul class="space-y-2.5 text-xs text-slate-300">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                class="hover:text-brand-secondary transition-colors flex items-center gap-1.5 group"
              >
                <ChevronRight class="w-3 h-3 text-brand-primary group-hover:translate-x-1 transition-transform" />
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Horário & Atendimento (span 3) -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="font-serif font-bold text-sm text-brand-secondary uppercase tracking-wider">
            Atendimento
          </h4>
          <div class="space-y-3 text-xs text-slate-300">
            <div class="flex items-start gap-2.5">
              <Clock class="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <div>
                <span class="font-semibold text-white block">Horário de Atendimento:</span>
                <span class="text-slate-400 block mt-0.5">{{ storeInfo.operatingHours.weekdays }}</span>
                <span class="text-slate-400 block">{{ storeInfo.operatingHours.saturday }}</span>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <span class="text-brand-secondary font-semibold block mb-0.5">Entregas &amp; Prazos:</span>
              <p>{{ storeInfo.shippingNote }}. Produção sob medida para cada ocasião.</p>
            </div>
          </div>
        </div>

        <!-- Coluna 4: Contato & Localização (span 3) -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="font-serif font-bold text-sm text-brand-secondary uppercase tracking-wider">
            Contato &amp; Redes
          </h4>
          <div class="space-y-3 text-xs text-slate-300">
            <div class="flex items-center gap-2.5">
              <MapPin class="w-4 h-4 text-brand-primary shrink-0" />
              <span>{{ storeInfo.city }}</span>
            </div>

            <div class="flex items-center gap-2.5">
              <MessageCircle class="w-4 h-4 text-emerald-400 shrink-0" />
              <button 
                @click="openWhatsApp" 
                class="hover:text-emerald-400 transition-colors font-mono font-bold text-white text-xs cursor-pointer"
              >
                {{ storeInfo.phone }} (WhatsApp)
              </button>
            </div>

            <!-- Redes Sociais & Instagram Handle -->
            <div class="pt-3 space-y-2">
              <span class="text-[11px] font-semibold text-slate-400 block">Siga-nos no Instagram:</span>
              <a 
                :href="storeInfo.instagramUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-200 text-xs"
              >
                <Instagram class="w-4 h-4 text-rose-400" />
                <span class="font-medium">{{ storeInfo.instagramHandle }}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Faixa Inferior de Direitos Autorais -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div class="flex items-center gap-1.5">
          <span>© 2026 {{ storeInfo.storeName }}. Todos os direitos reservados.</span>
        </div>

        <div class="flex items-center gap-1 text-slate-400">
          <span>Feito com carinho em</span>
          <Heart class="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
          <span>{{ storeInfo.city }}</span>
        </div>
      </div>

    </div>

    <!-- BOTÃO FLUTUANTE DO WHATSAPP (Floating Widget) -->
    <div class="fixed bottom-6 right-6 z-50 flex items-center">
      <!-- Tooltip explicativo -->
      <div 
        v-if="showTooltip"
        class="mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xl border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-200"
      >
        <span>👋 Fale Conosco no WhatsApp ({{ storeInfo.phone }})</span>
      </div>

      <!-- Botão Circular WhatsApp -->
      <button
        @click="openWhatsApp"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
        class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-subtle cursor-pointer group"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle class="w-7 h-7 fill-white group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>

  </footer>
</template>

<style scoped>
@keyframes pulse-subtle {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  50% {
    box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
  }
}
.animate-pulse-subtle {
  animation: pulse-subtle 2.5s infinite;
}
</style>
