<script setup>
import { ref } from 'vue'
import { 
  Hammer, 
  TreeDeciduous, 
  PackageCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Plus,
  Filter
} from 'lucide-vue-next'

const stats = [
  { label: 'Peças em Produção', value: '18', change: '+4 esta semana', icon: Hammer, color: 'text-brand-primary' },
  { label: 'Estoque Madeira Nobre', value: '240 m²', change: 'Peroba Rosa & Cumaru', icon: TreeDeciduous, color: 'text-brand-accent' },
  { label: 'Encomendas Concluídas', value: '142', change: '98.5% Aprovação', icon: PackageCheck, color: 'text-emerald-700' },
  { label: 'Tempo Médio Entrega', value: '5 dias', change: 'Acabamento artesanal', icon: Clock, color: 'text-amber-800' },
]

const orders = ref([
  { id: '#ART-904', client: 'Marina Silva', piece: 'Tábua Gourmet Peroba Rosa (45x30cm)', status: 'Em Lixamento', progress: 65, date: '04/10/2026' },
  { id: '#ART-905', client: 'Carlos Eduardo', piece: 'Caixa Entalhada em Jacarandá com Chave', status: 'Aplicação Óleo', progress: 90, date: '04/10/2026' },
  { id: '#ART-906', client: 'Beatriz Ramos', piece: 'Conjunto 4 Gamela Artesanal Cumaru', status: 'Corte Inicial', progress: 25, date: '05/10/2026' },
  { id: '#ART-907', client: 'Lucas Fonseca', piece: 'Escultura de Parede Geométrica', status: 'Finalizado', progress: 100, date: '03/10/2026' },
])
</script>

<template>
  <div class="space-y-8 py-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="font-serif text-3xl font-bold text-brand-dark">Painel de Controle da Oficina</h1>
        <p class="text-xs text-brand-muted">Gestão de produção artesanal e fluxo de encomendas</p>
      </div>

      <div class="flex items-center gap-3">
        <button class="px-4 py-2 rounded-xl bg-white border border-brand-secondary/40 text-brand-dark text-xs font-semibold hover:bg-brand-bg flex items-center gap-1.5 shadow-xs">
          <Filter class="w-4 h-4 text-brand-primary" /> Filtrar
        </button>

        <button class="px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-hover flex items-center gap-1.5 shadow-md">
          <Plus class="w-4 h-4" /> Nova Encomenda
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div 
        v-for="stat in stats" 
        :key="stat.label" 
        class="wood-card rounded-2xl p-5 border border-brand-secondary/30 flex items-center justify-between"
      >
        <div>
          <span class="text-xs font-semibold text-brand-muted uppercase tracking-wider block mb-1">
            {{ stat.label }}
          </span>
          <span class="text-2xl font-serif font-bold text-brand-dark block font-mono">
            {{ stat.value }}
          </span>
          <span class="text-[11px] font-medium text-brand-primary block mt-1">
            {{ stat.change }}
          </span>
        </div>

        <div class="p-3 bg-brand-bg rounded-xl border border-brand-secondary/30" :class="stat.color">
          <component :is="stat.icon" class="w-6 h-6" />
        </div>
      </div>
    </div>

    <!-- Orders Queue Table -->
    <div class="wood-card rounded-2xl p-6 shadow-md">
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-brand-secondary/20">
        <h3 class="font-serif text-lg font-bold text-brand-dark flex items-center gap-2">
          <Hammer class="w-5 h-5 text-brand-primary" />
          Fila de Produção Ativa
        </h3>
        <span class="px-3 py-1 text-xs rounded-full bg-brand-secondary-light/60 text-brand-dark font-semibold">
          4 Encomendas Ativas
        </span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-brand-dark">
          <thead>
            <tr class="border-b border-brand-secondary/20 text-xs font-bold text-brand-muted uppercase tracking-wider">
              <th class="pb-3">Código</th>
              <th class="pb-3">Cliente</th>
              <th class="pb-3">Peça de Madeira</th>
              <th class="pb-3">Etapa Atual</th>
              <th class="pb-3">Progresso</th>
              <th class="pb-3 text-right">Data</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-brand-secondary/15">
            <tr v-for="order in orders" :key="order.id" class="hover:bg-brand-bg/60 transition-colors">
              <td class="py-4 font-mono font-bold text-brand-primary text-xs">{{ order.id }}</td>
              <td class="py-4 font-semibold text-brand-dark">{{ order.client }}</td>
              <td class="py-4 text-brand-muted">{{ order.piece }}</td>
              <td class="py-4">
                <span 
                  class="px-2.5 py-1 rounded-full text-xs font-bold border"
                  :class="[
                    order.progress === 100 
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                      : 'bg-brand-secondary-light/60 text-brand-dark border-brand-secondary'
                  ]"
                >
                  {{ order.status }}
                </span>
              </td>
              <td class="py-4 w-36">
                <div class="flex items-center gap-2">
                  <div class="w-full bg-brand-secondary-light/60 rounded-full h-2 overflow-hidden">
                    <div 
                      class="bg-brand-primary h-full rounded-full transition-all duration-500" 
                      :style="{ width: order.progress + '%' }"
                    ></div>
                  </div>
                  <span class="text-xs font-mono font-bold text-brand-dark">{{ order.progress }}%</span>
                </div>
              </td>
              <td class="py-4 text-right font-mono text-xs text-brand-muted">{{ order.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
