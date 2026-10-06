<script setup>
import { 
  FolderTree, 
  Layers, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Palette, 
  Rocket, 
  Terminal, 
  Cpu 
} from 'lucide-vue-next'

const folders = [
  {
    path: 'src/components/',
    title: 'Componentes Reutilizáveis',
    description: 'Contém componentes modulares como Navbar.vue, Footer.vue, CatalogSection.vue, Testimonials.vue e AboutSection.vue.',
    badge: 'Modular'
  },
  {
    path: 'src/assets/',
    title: 'Recursos Estáticos',
    description: 'Armazena vetores, marcas e mídias do projeto (ex: logo.svg).',
    badge: 'Mídia & SVG'
  },
  {
    path: 'src/views/',
    title: 'Páginas / Views',
    description: 'Contém as páginas principais roteadas: HomeView.vue, DashboardView.vue, IconsView.vue e AboutView.vue.',
    badge: 'Roteamento'
  }
]

const colorPalette = [
  { name: 'brand-primary', hex: '#A0522D', label: 'Terracota / Madeira Quente', bgClass: 'bg-[#A0522D]' },
  { name: 'brand-secondary', hex: '#C89D7C', label: 'Caramelo / Amadeirado Claro', bgClass: 'bg-[#C89D7C]' },
  { name: 'brand-bg', hex: '#FAF7F2', label: 'Off-white Creme Aconchegante', bgClass: 'bg-[#FAF7F2] text-brand-dark border border-slate-300' },
  { name: 'brand-dark', hex: '#2C1A11', label: 'Café Escuro / Texto Principal', bgClass: 'bg-[#2C1A11]' },
  { name: 'brand-accent', hex: '#6B8E23', label: 'Verde Oliva / Ações & Tags', bgClass: 'bg-[#6B8E23]' },
]
</script>

<template>
  <div class="space-y-8 py-6">
    <!-- Header -->
    <div class="max-w-3xl">
      <h1 class="font-serif text-3xl font-bold text-brand-dark mb-2">Sobre o Projeto & Arquitetura</h1>
      <p class="text-sm text-brand-muted leading-relaxed">
        Projeto construído utilizando <strong class="text-brand-dark">Vue 3 (Composition API)</strong>, bundling ultra-rápido com <strong class="text-brand-dark">Vite</strong>, estilização moderna com <strong class="text-brand-dark">Tailwind CSS</strong> e a biblioteca oficial de ícones <strong class="text-brand-dark">lucide-vue-next</strong>.
      </p>
    </div>

    <!-- Folder Structure Section -->
    <div class="wood-card rounded-2xl p-6 shadow-md">
      <h2 class="font-serif text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
        <FolderTree class="w-5 h-5 text-brand-primary" />
        Estrutura de Pastas Dentro de <code class="text-sm font-mono text-brand-primary bg-brand-bg px-2 py-0.5 rounded border border-brand-secondary/30">src/</code>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        <div 
          v-for="folder in folders" 
          :key="folder.path" 
          class="p-5 bg-brand-bg rounded-xl border border-brand-secondary/30 space-y-3"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-brand-primary bg-white px-2.5 py-1 rounded-md border border-brand-secondary/30 shadow-xs">
              {{ folder.path }}
            </span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-secondary-light text-brand-dark">
              {{ folder.badge }}
            </span>
          </div>
          <h3 class="font-serif font-bold text-slate-900 text-base">{{ folder.title }}</h3>
          <p class="text-xs text-brand-muted leading-relaxed">{{ folder.description }}</p>
        </div>
      </div>
    </div>

    <!-- Custom Theme Color Palette Section -->
    <div class="wood-card rounded-2xl p-6 shadow-md">
      <h2 class="font-serif text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
        <Palette class="w-5 h-5 text-brand-primary" />
        Paleta Personalizada de Artesanato em Madeira
      </h2>
      <p class="text-xs text-brand-muted mb-6">
        Cores configuradas diretamente no Tailwind CSS para o tema artesanal em madeira.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div 
          v-for="color in colorPalette" 
          :key="color.name" 
          class="p-4 rounded-xl border border-brand-secondary/30 bg-white flex flex-col justify-between space-y-4 shadow-xs"
        >
          <div class="h-16 rounded-lg shadow-inner flex items-center justify-center font-mono font-bold text-xs" :class="color.bgClass">
            <span v-if="color.name === 'brand-bg'" class="text-brand-dark">#FAF7F2</span>
            <span v-else class="text-white">{{ color.hex }}</span>
          </div>

          <div>
            <span class="font-mono text-xs font-bold text-brand-primary block">{{ color.name }}</span>
            <span class="text-[11px] text-brand-muted block mt-0.5">{{ color.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Run Commands -->
    <div class="wood-card rounded-2xl p-6 shadow-md">
      <h2 class="font-serif text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
        <Terminal class="w-5 h-5 text-brand-primary" />
        Comandos para Executar Localmente
      </h2>

      <div class="bg-brand-dark text-brand-bg rounded-xl p-4 font-mono text-xs space-y-2 border border-slate-700">
        <div class="flex items-center gap-2 text-brand-secondary">
          <span class="text-emerald-400"># 1. Instalar dependências (caso não instalado)</span>
        </div>
        <div class="text-slate-200">npm install</div>

        <div class="flex items-center gap-2 text-brand-secondary pt-2">
          <span class="text-emerald-400"># 2. Iniciar servidor de desenvolvimento local</span>
        </div>
        <div class="text-slate-200">npm run dev</div>
      </div>
    </div>
  </div>
</template>
