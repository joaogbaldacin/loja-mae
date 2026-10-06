<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import CatalogSection from '@/components/CatalogSection.vue'
import HowItWorksAndReviews from '@/components/HowItWorksAndReviews.vue'
import Testimonials from '@/components/Testimonials.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-brand-bg text-brand-dark selection:bg-brand-secondary selection:text-brand-dark">
    <!-- Header Fixo no Topo -->
    <Header />

    <!-- Hero Banner em Destaque -->
    <HeroSection />

    <!-- Seção Sobre o Ateliê -->
    <AboutSection />

    <!-- Catálogo de Produtos com Filtros & Encomenda -->
    <CatalogSection />

    <!-- Como Funciona o Pedido -->
    <HowItWorksAndReviews />

    <!-- Depoimentos Reais de Clientes -->
    <Testimonials />

    <!-- Conteúdo Principal / Páginas Roteadas -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <router-view />
    </main>

    <!-- Rodapé Completo & Widget Flutuante do WhatsApp -->
    <FooterSection />
  </div>
</template>
