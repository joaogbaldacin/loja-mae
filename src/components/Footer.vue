<script setup>
import { Heart, Hammer, TreeDeciduous, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-brand-secondary/30 bg-white text-brand-dark text-sm py-10 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand / Info -->
        <div class="flex items-center gap-3">
          <div class="p-2.5 bg-brand-bg rounded-xl border border-brand-secondary/30 text-brand-primary">
            <Hammer class="w-6 h-6" />
          </div>
          <div>
            <p class="font-serif font-bold text-lg text-brand-dark">Ateliê Madeira & Arte</p>
            <p class="text-xs text-brand-muted">Artesanato sustentável em madeiras nobres e restauração</p>
          </div>
        </div>

        <!-- Tech & Craft Badges -->
        <div class="flex items-center gap-2 flex-wrap justify-center text-xs">
          <span class="px-3 py-1 rounded-full bg-brand-bg text-brand-primary border border-brand-secondary/40 font-semibold">
            Madeiras Nobres
          </span>
          <span class="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent border border-brand-accent/30 font-semibold">
            Acabamento Manual
          </span>
          <span class="px-3 py-1 rounded-full bg-brand-secondary-light/50 text-brand-dark border border-brand-secondary/40 font-semibold">
            Vue 3 + Tailwind CSS
          </span>
        </div>

        <!-- Copyright -->
        <div class="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
          <span>Feito artesanalmente com</span>
          <Heart class="w-4 h-4 text-brand-primary fill-brand-primary" />
          <span>em Vue 3</span>
        </div>
      </div>
    </div>
  </footer>
</template>
