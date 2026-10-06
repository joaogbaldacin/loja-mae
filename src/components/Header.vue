<script setup>
import { ref } from 'vue'
import { MessageCircle, Menu, X, Gift, Sparkles, MapPin } from 'lucide-vue-next'
import { getWhatsAppUrl, storeInfo } from '@/config/storeInfo'

const isOpen = ref(false)

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Depoimentos', href: '#depoimentos' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de saber mais sobre os presentes especiais da DoceEfeito.')
</script>

<template>
  <header class="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-secondary/30 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Lado Esquerdo: Logo / Nome da Loja -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/20 group-hover:bg-brand-primary-hover transition-all duration-300">
            <Gift class="w-6 h-6 group-hover:rotate-12 transition-transform duration-300 text-white" />
          </div>
          <div class="flex flex-col">
            <span class="font-serif font-bold text-xl text-brand-dark tracking-tight leading-tight">
              {{ storeInfo.storeName }}
            </span>
            <span class="text-[11px] font-medium text-brand-muted flex items-center gap-1">
              <Sparkles class="w-3 h-3 text-brand-primary" /> Presentes Especiais em {{ storeInfo.city }}
            </span>
          </div>
        </a>

        <!-- Centro/Direita: Menu Desktop -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="px-4 py-2 rounded-xl text-sm font-semibold text-brand-dark hover:text-brand-primary hover:bg-brand-secondary-light/60 transition-all duration-200"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Lado Direito: Botão WhatsApp Desktop -->
        <div class="hidden sm:flex items-center gap-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 shadow-md shadow-emerald-600/20 active:scale-95"
          >
            <MessageCircle class="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <!-- Botão Hambúrguer Mobile -->
        <div class="flex md:hidden items-center">
          <button
            @click="toggleMenu"
            type="button"
            class="p-2 rounded-xl text-brand-dark hover:bg-brand-secondary-light/60 focus:outline-none transition-colors"
            aria-label="Alternar Menu"
          >
            <Menu v-if="!isOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Gaveta do Menu Mobile -->
    <div 
      v-if="isOpen" 
      class="md:hidden border-t border-brand-secondary/30 bg-brand-bg/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
    >
      <a
        v-for="link in navLinks"
        :key="link.name"
        :href="link.href"
        @click="isOpen = false"
        class="block px-4 py-3 rounded-xl text-base font-semibold text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-200"
      >
        {{ link.name }}
      </a>

      <div class="pt-3 border-t border-brand-secondary/20">
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2.5 w-full px-5 py-3 rounded-xl text-sm font-bold bg-emerald-600 text-white shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle class="w-5 h-5 fill-white" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
</template>
