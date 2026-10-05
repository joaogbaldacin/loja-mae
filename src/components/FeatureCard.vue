<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  },
  badge: {
    type: String,
    default: ''
  },
  tagColor: {
    type: String,
    default: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20'
  }
})
</script>

<template>
  <div class="wood-card wood-card-hover rounded-2xl p-6 relative overflow-hidden group">
    <!-- Top badge & icon -->
    <div class="flex items-start justify-between mb-4">
      <div class="w-12 h-12 rounded-xl bg-brand-bg border border-brand-secondary/30 flex items-center justify-center text-brand-primary shadow-xs group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
        <component :is="icon" class="w-6 h-6" />
      </div>

      <span 
        v-if="badge" 
        class="px-3 py-1 text-xs font-bold rounded-full border"
        :class="tagColor"
      >
        {{ badge }}
      </span>
    </div>

    <!-- Title & Description -->
    <h3 class="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
      {{ title }}
    </h3>

    <p class="text-sm text-brand-muted leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
