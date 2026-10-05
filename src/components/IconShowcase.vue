<script setup>
import { ref, computed } from 'vue'
import { 
  Search, 
  Check, 
  Hammer, 
  TreeDeciduous, 
  TreePine, 
  Sparkles, 
  Wrench, 
  Scissors, 
  Layers, 
  ShieldCheck, 
  Heart, 
  Folder, 
  Terminal, 
  Settings, 
  User, 
  Mail, 
  Bell, 
  Star, 
  Compass, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Tag, 
  Box, 
  Package, 
  Truck, 
  Award, 
  Crown, 
  Flame, 
  Palette
} from 'lucide-vue-next'

const searchQuery = ref('')
const copiedIcon = ref(null)

const iconsList = [
  { name: 'Hammer', component: Hammer, category: 'Ferramenta' },
  { name: 'TreeDeciduous', component: TreeDeciduous, category: 'Madeira' },
  { name: 'TreePine', component: TreePine, category: 'Madeira' },
  { name: 'Wrench', component: Wrench, category: 'Ferramenta' },
  { name: 'Scissors', component: Scissors, category: 'Corte' },
  { name: 'Palette', component: Palette, category: 'Acabamento' },
  { name: 'Sparkles', component: Sparkles, category: 'Destaque' },
  { name: 'Layers', component: Layers, category: 'Estrutura' },
  { name: 'ShieldCheck', component: ShieldCheck, category: 'Qualidade' },
  { name: 'Award', component: Award, category: 'Garantia' },
  { name: 'Crown', component: Crown, category: 'Premium' },
  { name: 'Flame', component: Flame, category: 'Tratamento' },
  { name: 'Box', component: Box, category: 'Embalagem' },
  { name: 'Package', component: Package, category: 'Envio' },
  { name: 'Truck', component: Truck, category: 'Entrega' },
  { name: 'Tag', component: Tag, category: 'Preço' },
  { name: 'Heart', component: Heart, category: 'Social' },
  { name: 'Star', component: Star, category: 'Avaliação' },
  { name: 'Compass', component: Compass, category: 'Navegação' },
  { name: 'Clock', component: Clock, category: 'Tempo' },
  { name: 'Calendar', component: Calendar, category: 'Agendamento' },
  { name: 'CheckCircle2', component: CheckCircle2, category: 'Status' },
]

const filteredIcons = computed(() => {
  if (!searchQuery.value) return iconsList
  const query = searchQuery.value.toLowerCase()
  return iconsList.filter(item => 
    item.name.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query)
  )
})

const copyIconSnippet = (iconName) => {
  const snippet = `import { ${iconName} } from 'lucide-vue-next'`
  navigator.clipboard.writeText(snippet)
  copiedIcon.value = iconName
  setTimeout(() => {
    copiedIcon.value = null
  }, 2000)
}
</script>

<template>
  <div class="wood-card rounded-2xl p-6 shadow-md">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-secondary/20">
      <div>
        <h3 class="font-serif text-lg font-bold text-brand-dark flex items-center gap-2">
          <Sparkles class="w-5 h-5 text-brand-primary" />
          Biblioteca de Ícones Lucide Vue Next
        </h3>
        <p class="text-xs text-brand-muted">Clique em um ícone para copiar o comando de importação no projeto</p>
      </div>

      <!-- Search Input -->
      <div class="relative w-full sm:w-64">
        <Search class="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Buscar ícone..."
          class="w-full pl-9 pr-4 py-2 bg-brand-bg border border-brand-secondary/40 rounded-xl text-xs text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
        />
      </div>
    </div>

    <!-- Icons Grid -->
    <div v-if="filteredIcons.length > 0" class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      <button
        v-for="icon in filteredIcons"
        :key="icon.name"
        @click="copyIconSnippet(icon.name)"
        class="flex flex-col items-center justify-center p-3.5 rounded-xl bg-brand-bg/60 border border-brand-secondary/30 hover:border-brand-primary hover:bg-white hover:shadow-md transition-all duration-200 group relative"
        :title="`Copiar importação para ${icon.name}`"
      >
        <div class="p-2.5 rounded-xl bg-white text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors mb-2 shadow-xs border border-brand-secondary/20">
          <component :is="icon.component" class="w-5 h-5" />
        </div>
        <span class="text-[11px] font-semibold text-brand-dark truncate max-w-full group-hover:text-brand-primary">
          {{ icon.name }}
        </span>

        <!-- Copy Overlay Indicator -->
        <span 
          v-if="copiedIcon === icon.name"
          class="absolute inset-0 bg-brand-accent text-white text-[10px] font-bold rounded-xl flex items-center justify-center gap-1 shadow-md"
        >
          <Check class="w-3.5 h-3.5" /> Copiado!
        </span>
      </button>
    </div>

    <!-- Empty search result -->
    <div v-else class="text-center py-12 text-brand-muted text-xs">
      Nenhum ícone encontrado para "{{ searchQuery }}"
    </div>
  </div>
</template>
