<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { 
  TreeDeciduous, 
  LayoutDashboard, 
  Sparkles, 
  Info, 
  Menu, 
  X,
  MessageCircle,
  Hammer
} from 'lucide-vue-next'
import { getWhatsAppUrl, storeInfo } from '@/config/storeInfo'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Catálogo & Início', path: '/', icon: TreeDeciduous },
  { name: 'Painel do Artesão', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Galeria de Ícones', path: '/icons', icon: Sparkles },
  { name: 'Sobre a Oficina', path: '/about', icon: Info },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de fazer uma encomenda no ateliê.')
</script>

<template>
  <nav class="sticky top-0 z-50 wood-glass border-b border-brand-secondary/30 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand / Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center shadow-md shadow-brand-primary/20 group-hover:bg-brand-primary-hover transition-colors">
            <Hammer class="w-6 h-6 text-brand-bg group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div class="flex flex-col">
            <span class="font-serif font-bold text-xl text-brand-dark tracking-tight leading-tight">
              {{ storeInfo.storeName }}
            </span>
            <span class="text-xs font-medium text-brand-muted flex items-center gap-1">
              <TreeDeciduous class="w-3.5 h-3.5 text-brand-accent" /> Artesanato Fino em {{ storeInfo.city }}
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1.5 bg-brand-secondary-light/40 p-1.5 rounded-2xl border border-brand-secondary/20">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2"
            :class="[
              route.path === item.path 
                ? 'bg-brand-primary text-white shadow-sm font-semibold' 
                : 'text-brand-dark hover:text-brand-primary hover:bg-white/60'
            ]"
          >
            <component :is="item.icon" class="w-4.5 h-4.5" />
            {{ item.name }}
          </router-link>
        </div>

        <!-- Action Badge / WhatsApp Button -->
        <div class="flex items-center gap-3">
          <a 
            :href="whatsappUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors shadow-md shadow-brand-accent/20"
          >
            <MessageCircle class="w-4 h-4 fill-white" />
            <span>Fazer Encomenda</span>
          </a>

          <!-- Mobile toggle -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden p-2 rounded-xl text-brand-dark hover:bg-brand-secondary-light/60 focus:outline-none"
            aria-label="Abrir menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-brand-secondary/30 bg-brand-bg px-4 pt-3 pb-5 space-y-1.5 shadow-lg">
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path"
        @click="mobileMenuOpen = false"
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors"
        :class="[
          route.path === item.path 
            ? 'bg-brand-primary text-white font-semibold' 
            : 'text-brand-dark hover:bg-brand-secondary-light/40'
        ]"
      >
        <component :is="item.icon" class="w-5 h-5" />
        {{ item.name }}
      </router-link>

      <a 
        :href="whatsappUrl" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-brand-accent text-white mt-4"
      >
        <MessageCircle class="w-5 h-5 fill-white" />
        <span>Fazer Encomenda via WhatsApp</span>
      </a>
    </div>
  </nav>
</template>
