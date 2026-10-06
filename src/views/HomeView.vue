<script setup>
import { 
  Hammer, 
  TreeDeciduous, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Heart,
  Palette,
  Scissors
} from 'lucide-vue-next'
import FeatureCard from '@/components/FeatureCard.vue'
import { getWhatsAppUrl } from '@/config/storeInfo'

const features = [
  {
    title: 'Madeiras Nobres Selecionadas',
    description: 'Trabalhamos exclusivamente com Peroba Rosa, Jequitibá e Cumaru de reflorestamento certificado.',
    icon: TreeDeciduous,
    badge: '100% Ecológico',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    title: 'Entalhe e Usinagem Fina',
    description: 'Peças esculpidas com precisão artesanal combinada às mais refinadas técnicas tradicionais de marcenaria.',
    icon: Hammer,
    badge: 'Feito à Mão',
    tagColor: 'bg-brand-secondary-light text-brand-dark border-brand-secondary'
  },
  {
    title: 'Acabamento com Óleos Naturais',
    description: 'Proteção com óleo de linho e cera de abelha pura, destacando os veios naturais da madeira.',
    icon: Palette,
    badge: 'Atóxico & Seguro',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    title: 'Projetos 100% Personalizados',
    description: 'Desenvolvemos tabuas gourmet, caixas entalhadas, utilitários e móveis sob medida para seu ambiente.',
    icon: Scissors,
    badge: 'Exclusividade',
    tagColor: 'bg-brand-primary/10 text-brand-primary border-brand-primary/30'
  }
]

const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de encomendar uma peça artesanal em madeira.')
</script>

<template>
  <div class="space-y-12 py-6">
    <!-- Hero Section -->
    <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-[#3A2418] to-brand-dark text-brand-bg p-8 sm:p-12 md:p-16 shadow-xl border border-brand-secondary/30">
      <div class="max-w-3xl space-y-6 relative z-10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/30 border border-brand-secondary/40 text-brand-secondary text-xs font-semibold">
          <TreeDeciduous class="w-4 h-4 text-brand-secondary" />
          Artesanato em Madeira Nobre
        </div>

        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          A beleza atemporal da <span class="text-brand-secondary italic">madeira entalhada</span> à mão.
        </h1>

        <p class="text-brand-secondary-light/90 text-base sm:text-lg max-w-2xl leading-relaxed">
          Projeto estruturado em <strong class="text-white">Vue 3 + Vite + Tailwind CSS</strong> e ícones <strong class="text-white">lucide-vue-next</strong>. Projeto pronto para ambiente local com paleta artesanal em tom terracota, caramelo e café escuro.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <a 
            :href="whatsappUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-6 py-3.5 rounded-xl bg-brand-accent text-white font-bold hover:bg-brand-accent-hover transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/20 hover:scale-105"
          >
            <MessageCircle class="w-5 h-5 fill-white" />
            <span>Encomendar via WhatsApp</span>
          </a>

          <router-link 
            to="/dashboard" 
            class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all flex items-center gap-2"
          >
            <span>Ver Painel do Artesão</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Key Craft Highlights Grid -->
    <section>
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="font-serif text-3xl font-bold text-brand-dark mb-3">
          Nossa Tradição & Qualidade
        </h2>
        <p class="text-brand-muted text-sm">
          Cada peça é única, trabalhada respeitando as tonalidades e características orgânicas da madeira.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          v-for="feat in features" 
          :key="feat.title" 
          :title="feat.title" 
          :description="feat.description" 
          :icon="feat.icon" 
          :badge="feat.badge" 
          :tagColor="feat.tagColor"
        />
      </div>
    </section>
  </div>
</template>
