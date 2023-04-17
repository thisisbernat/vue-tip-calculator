<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-center py-10 md:pt-32 md:pb-20">
      <img src="./assets/logo.svg" alt="SPLITTER" />
    </header>
    <main
      class="grid flex-grow grid-cols-1 gap-5 px-6 pt-8 text-lg bg-white md:flex-grow-0 md:mx-auto md:grid-cols-2 rounded-t-3xl md:rounded-3xl md:gap-10 md:p-8">
      <div
        class="flex flex-col justify-between md:py-3 gap-6 text-sm lg:text-base text-grayish-cyan-dark lg:w-[28rem] md:aspect-square">
        <div>
          <p class="mb-2">Bill</p>
          <div class="relative flex items-center mx-auto">
            <input class="w-full px-4 py-2 text-2xl text-right rounded bg-grayish-cyan-extralight text-cyan-dark"
              placeholder="0" value="142.55" />
            <img src="./assets/icon-dollar.svg" alt="" class="absolute left-4" />
          </div>
        </div>
        <div>
          <p class="mb-2">Select Tip %</p>
          <div class="grid grid-cols-2 gap-5 text-2xl text-center text-white md:grid-cols-3">
            <span class="py-2 rounded bg-cyan-dark">5%</span>
            <span class="py-2 rounded bg-cyan-dark">10%</span>
            <span class="py-2 rounded bg-cyan-dark">15%</span>
            <span class="py-2 rounded bg-cyan-dark">25%</span>
            <span class="py-2 rounded bg-cyan-dark">50%</span>
            <span class="py-2 rounded bg-grayish-cyan-extralight text-grayish-cyan-dark">Custom</span>
          </div>
        </div>
        <div>
          <p class="mb-2">Number of People</p>
          <div class="relative flex items-center">
            <input class="w-full px-4 py-2 text-2xl text-right rounded bg-grayish-cyan-extralight text-cyan-dark"
              placeholder="0" value="5" />
            <img src="./assets/icon-person.svg" alt="" class="absolute left-4" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-6 pt-8 text-base text-white md:justify-between md:p-10 md:pt-12 gap-7 bg-cyan-dark rounded-2xl lg:w-[28rem] lg:aspect-square">
        <div class="flex items-center justify-between">
          <p>Tip Amount<br /><span class="text-sm text-cyan">/ person</span></p>
          <p class="text-4xl lg:text-5xl text-cyan">$4.27</p>
        </div>
        <div class="flex items-center justify-between md:-mt-20 lg:-mt-32">
          <p>Total<br /><span class="text-sm text-cyan">/ person</span></p>
          <p class="text-4xl lg:text-5xl text-cyan">$32.79</p>
        </div>
        <button class="py-3 text-2xl rounded bg-cyan text-cyan-dark">RESET</button>
      </div>
    </main>
  </div>
</template>
