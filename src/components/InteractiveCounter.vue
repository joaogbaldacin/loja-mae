<script setup>
import { ref, computed } from 'vue'
import { Plus, Minus, RotateCcw, Hammer, Sparkles, ShoppingCart, TreeDeciduous, Tag } from 'lucide-vue-next'

const quantity = ref(1)
const unitPrice = 145.00 // Price per crafted wooden piece in BRL
const history = ref([])

const increment = () => {
  quantity.value++
  recordAction('Adicionou 1 unidade', `+1`)
}

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--
    recordAction('Removeu 1 unidade', `-1`)
  }
}

const reset = () => {
  quantity.value = 1
  recordAction('Restaurou quantidade padrão', '1')
}

const totalPrice = computed(() => (quantity.value * unitPrice).toFixed(2))
const estimatedTimeDays = computed(() => Math.ceil(quantity.value * 2.5))
const isBulkDiscount = computed(() => quantity.value >= 5)
const discountValue = computed(() => isBulkDiscount.value ? (totalPrice.value * 0.1).toFixed(2) : '0.00')
const finalPrice = computed(() => (totalPrice.value - discountValue.value).toFixed(2))

const recordAction = (type, change) => {
  history.value.unshift({
    id: Date.now(),
    type,
    change,
    value: quantity.value,
    total: finalPrice.value,
    time: new Date().toLocaleTimeString()
  })
  if (history.value.length > 5) {
    history.value.pop()
  }
}
</script>

<template>
  <div class="wood-card rounded-2xl p-6 shadow-md">
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-brand-secondary/20">
      <div class="flex items-center gap-3">
        <div class="p-2.5 rounded-xl bg-brand-bg text-brand-primary border border-brand-secondary/30">
          <Hammer class="w-5 h-5" />
        </div>
        <div>
          <h3 class="font-serif text-lg font-bold text-brand-dark">Simulador de Encomenda de Peças</h3>
          <p class="text-xs text-brand-muted">Estimador interativo de produção & valor (Vue 3 State)</p>
        </div>
      </div>
      <span class="px-3 py-1 text-xs rounded-full bg-brand-secondary-light/60 text-brand-dark font-semibold">
        R$ 145,00 / un
      </span>
    </div>

    <!-- Main Counter Display -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Quantity Selector -->
      <div class="flex flex-col items-center justify-center p-6 bg-brand-bg rounded-xl border border-brand-secondary/30">
        <span class="text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Quantidade de Peças</span>
        
        <div class="flex items-center gap-4 my-2">
          <button 
            @click="decrement"
            :disabled="quantity <= 1"
            class="w-10 h-10 rounded-xl bg-white border border-brand-secondary/40 text-brand-dark hover:bg-brand-primary hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-brand-dark transition-all flex items-center justify-center shadow-xs"
          >
            <Minus class="w-5 h-5" />
          </button>

          <span class="text-5xl font-serif font-bold text-brand-primary font-mono px-4">
            {{ quantity }}
          </span>

          <button 
            @click="increment"
            class="w-10 h-10 rounded-xl bg-brand-primary text-white hover:bg-brand-primary-hover transition-all flex items-center justify-center shadow-sm"
          >
            <Plus class="w-5 h-5" />
          </button>
        </div>

        <button 
          @click="reset"
          class="mt-2 text-xs font-semibold text-brand-muted hover:text-brand-primary flex items-center gap-1 transition-colors"
        >
          <RotateCcw class="w-3.5 h-3.5" /> Redefinir para 1
        </button>
      </div>

      <!-- Live Calculation Card -->
      <div class="flex flex-col justify-between p-6 bg-brand-dark text-brand-bg rounded-xl shadow-md">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-brand-secondary uppercase tracking-wider font-semibold">Resumo da Encomenda</span>
            <span v-if="isBulkDiscount" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-accent text-white flex items-center gap-1">
              <Tag class="w-3 h-3" /> 10% Desconto Atacado
            </span>
          </div>

          <div class="space-y-2 text-sm">
            <div class="flex justify-between text-slate-300">
              <span>Subtotal:</span>
              <span class="font-mono">R$ {{ totalPrice }}</span>
            </div>
            <div v-if="isBulkDiscount" class="flex justify-between text-brand-accent">
              <span>Desconto:</span>
              <span class="font-mono">- R$ {{ discountValue }}</span>
            </div>
            <div class="flex justify-between text-slate-300">
              <span>Prazo estimado:</span>
              <span class="font-semibold text-brand-secondary flex items-center gap-1">
                <TreeDeciduous class="w-4 h-4" /> ~{{ estimatedTimeDays }} dias úteis
              </span>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-700 mt-4 flex items-center justify-between">
          <span class="text-xs text-slate-400">Total Final:</span>
          <span class="text-2xl font-serif font-bold text-emerald-400 font-mono">
            R$ {{ finalPrice }}
          </span>
        </div>
      </div>
    </div>

    <!-- History Audit -->
    <div v-if="history.length > 0" class="pt-4 border-t border-brand-secondary/20">
      <h4 class="text-xs font-bold text-brand-muted uppercase tracking-wider mb-2">Alterações Recentes</h4>
      <div class="space-y-1.5">
        <div 
          v-for="item in history" 
          :key="item.id"
          class="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-brand-bg border border-brand-secondary/20"
        >
          <span class="font-medium text-brand-dark">{{ item.type }}</span>
          <div class="flex items-center gap-3">
            <span class="font-mono text-brand-primary font-bold">{{ item.value }} un. (R$ {{ item.total }})</span>
            <span class="text-brand-muted text-[10px]">{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
