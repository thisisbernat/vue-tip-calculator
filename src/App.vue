<script setup>
import { ref, computed } from 'vue'
import LogoHeader from './components/LogoHeader.vue'

const buttonValues = [5, 10, 15, 25, 50]
const billAmount = ref(null)
const people = ref(null)
const tip = ref(null)
const customTip = ref(null)
const finalTip = computed(() => customTip.value ?? tip.value)

const formatNumber = (num) => parseFloat(num).toFixed(2)

const totalAmountPerPerson = computed(() => formatNumber(billAmount.value && finalTip.value && people.value ? (billAmount.value * (1 + (finalTip.value / 100))) / people.value : 0))
const tipAmount = computed(() => formatNumber(billAmount.value && finalTip.value && people.value ? (totalAmountPerPerson.value * people.value) - billAmount.value : 0))

const selectTip = (value) => { tip.value = value }

const isZero = (value) => {
  if (value > 0) return false
  if (value === null) return false
  return true
}

const resetAllValues = () => {
  billAmount.value = null
  people.value = null
  tip.value = null
  customTip.value = null
  tipAmount.value = null
}

</script>

<template>
  <div class="flex flex-col h-screen">
    <LogoHeader />
    <main
      class="grid flex-grow grid-cols-1 gap-5 px-6 pt-8 text-lg bg-white md:flex-grow-0 md:mx-auto md:grid-cols-2 rounded-t-3xl md:rounded-3xl md:gap-10 md:p-8">
      <div
        class="flex flex-col justify-between md:py-3 gap-6 text-sm lg:text-base text-grayish-cyan-dark lg:w-[28rem] md:aspect-square">
        <div>
          <p class="flex justify-between mb-2">Bill <span class="text-red" v-if="isZero(billAmount)">Can't be zero</span></p>
          <div class="relative flex items-center mx-auto">
            <input class="w-full px-4 py-2 text-2xl text-right rounded cursor-pointer bg-grayish-cyan-extralight text-cyan-dark focus:outline-grayish-cyan"
              placeholder="0" v-model="billAmount" />
            <img src="./assets/icon-dollar.svg" alt="" class="absolute left-4" />
          </div>
        </div>
        <div>
          <p class="mb-2">Select Tip %</p>
          <div class="grid grid-cols-2 gap-5 text-2xl text-center text-white md:grid-cols-3">
            <button class="py-2 rounded cursor-pointer" :class="tip === buttonValue && !customTip ? 'bg-cyan text-cyan-dark' : 'bg-cyan-dark hover:text-cyan-dark hover:bg-grayish-cyan-light'" v-for="buttonValue in buttonValues" :key="buttonValue" @click="selectTip(buttonValue)">{{buttonValue}}%</button>
            <input class="py-2 text-center rounded cursor-pointer bg-grayish-cyan-extralight text-grayish-cyan-dark focus:outline-grayish-cyan" placeholder="Custom" v-model="customTip"/>
          </div>
        </div>
        <div>
          <p class="flex justify-between mb-2">Number of People <span class="text-red" v-if="isZero(people)">Can't be zero</span></p>
          <div class="relative flex items-center">
            <input class="w-full px-4 py-2 text-2xl text-right rounded cursor-pointer bg-grayish-cyan-extralight text-cyan-dark focus:outline-grayish-cyan"
              placeholder="0" v-model="people" />
            <img src="./assets/icon-person.svg" alt="" class="absolute left-4" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col p-6 pt-8 text-base text-white md:justify-between md:p-10 md:pt-12 gap-7 bg-cyan-dark rounded-2xl lg:w-[28rem] lg:aspect-square">
        <div class="flex items-center justify-between">
          <p>Tip Amount<br /><span class="text-sm text-cyan">/ person</span></p>
          <p class="text-4xl lg:text-5xl text-cyan">${{tipAmount}}</p>
        </div>
        <div class="flex items-center justify-between md:-mt-20 lg:-mt-32">
          <p>Total<br /><span class="text-sm text-cyan">/ person</span></p>
          <p class="text-4xl lg:text-5xl text-cyan">${{totalAmountPerPerson}}</p>
        </div>
        <button class="py-3 text-2xl rounded cursor-pointer bg-cyan text-cyan-dark hover:bg-grayish-cyan-light" @click="resetAllValues">RESET</button>
      </div>
    </main>
  </div>
</template>
