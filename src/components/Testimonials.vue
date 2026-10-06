<script setup>
import { Star, Heart, Quote, MapPin, Sparkles } from 'lucide-vue-next'

const reviews = [
  {
    id: 1,
    name: 'Carolina & Vinícius',
    occasion: 'Kit Batizado Luxo',
    city: 'Marília - SP',
    text: 'Encomendamos o kit de batizado para o nosso filho com a Simone Baldacin. Ficamos apaixonados pela delicadeza da toalha bordada com o monograma dele e pela caixinha de MDF revestida em linho. O cuidado do ateliê é indescritível!',
    rating: 5,
    avatarBg: 'bg-brand-primary text-white'
  },
  {
    id: 2,
    name: 'Fernanda e Marcelo',
    occasion: 'Caixas para Padrinhos de Batismo',
    city: 'Bauru - SP',
    text: 'As caixas de convite para os padrinhos de batismo superaram todas as nossas expectativas! Os laços, a mensagem personalizada na tampa e o acabamento impecável fizeram os padrinhos se emocionarem. Trabalho maravilhoso!',
    rating: 5,
    avatarBg: 'bg-brand-accent-rose text-white'
  },
  {
    id: 3,
    name: 'Mariana Alencar',
    occasion: 'Primeira Bíblia Infantil & Maternidade',
    city: 'São Paulo - SP',
    text: 'Comprei a Primeira Bíblia personalizada em linho para o batizado da minha afilhada. O atendimento da Simone foi super atencioso pelo WhatsApp e a entrega chegou perfeitamente embalada. Recomendo de olhos fechados!',
    rating: 5,
    avatarBg: 'bg-emerald-700 text-white'
  }
]
</script>

<template>
  <section id="depoimentos" class="bg-brand-bg py-16 lg:py-24 rounded-3xl border border-brand-secondary/30 relative overflow-hidden">
    <!-- Decoração de Fundo -->
    <div class="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -top-10 -right-10 w-72 h-72 bg-brand-accent-rose/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Cabeçalho da Seção -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-dark text-xs font-bold uppercase tracking-wider">
          <Heart class="w-3.5 h-3.5 text-brand-primary fill-brand-primary/30" />
          <span>Depoimentos Reais</span>
        </div>

        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          O carinho de quem já recebeu nossos <span class="text-brand-primary italic">presentes especiais</span>
        </h2>

        <p class="text-sm sm:text-base text-brand-muted leading-relaxed">
          Confira o carinho e a emoção de clientes que escolheram o ateliê da Simone Baldacin para momentos inesquecíveis.
        </p>
      </div>

      <!-- Grid de Depoimentos (3 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="wood-card rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-md hover:border-brand-primary transition-all duration-300 relative group bg-white"
        >
          <!-- Ícone de Aspas Sutil no Canto -->
          <Quote class="w-8 h-8 text-brand-secondary/50 absolute top-6 right-6 group-hover:text-brand-primary/40 transition-colors" />

          <div class="space-y-4">
            <!-- Avaliação 5 Estrelas -->
            <div class="flex items-center gap-1">
              <Star 
                v-for="i in review.rating" 
                :key="i" 
                class="w-4 h-4 text-amber-500 fill-amber-500" 
              />
              <span class="text-xs font-bold text-brand-dark ml-1.5 font-mono">5.0 / 5.0</span>
            </div>

            <!-- Texto do Depoimento -->
            <p class="text-xs sm:text-sm text-brand-dark leading-relaxed italic">
              "{{ review.text }}"
            </p>
          </div>

          <!-- Dados do Cliente & Ocasião -->
          <div class="pt-4 border-t border-brand-secondary/30 flex items-center gap-3">
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm shadow-2xs shrink-0"
              :class="review.avatarBg"
            >
              {{ review.name.charAt(0) }}
            </div>

            <div class="flex-grow min-w-0">
              <h4 class="font-serif font-bold text-brand-dark text-sm truncate">
                {{ review.name }}
              </h4>
              <div class="flex items-center justify-between text-[11px] text-brand-muted mt-0.5">
                <span class="font-semibold text-brand-primary truncate">{{ review.occasion }}</span>
                <span class="flex items-center gap-0.5 font-mono text-[10px] shrink-0 ml-1">
                  <MapPin class="w-3 h-3 text-brand-muted" /> {{ review.city }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
