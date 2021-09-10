<template>
    <div class="mt-40 flex-col text-gray-900">
    <h1 class="mb-14 mx-auto w-52 md:w-60 text-center text-3xl md:text-4xl font-bold">Compete with the mirror</h1>
    <p class="text-center mx-auto mb-10 w-64 text-base md:text-lg">
      The only person you need to worry about in the gym, is yourself. So take good notes!
    </p>
    <div class="relative mx-auto mb-6 md:mb-16 w-40 text-center">
      <router-link to="/login" class="inline-block bg-secondary active:bg-secondary-active text-gray-100 mb-8 px-6 py-2 rounded text-2xl md:text-3xl font-semibold">Login</router-link>
      <router-link to="/signup" class="inline-block bg-secondary active:bg-secondary-active text-gray-100 px-6 py-2 rounded text-2xl md:text-3xl font-semibold">Sign Up</router-link>
    </div>
    <div class="relative">
      <img class="absolute invisible md:visible left-0 lg:left-12 bottom-11 w-64 lg:w-72" src="./../assets/shapes.svg" alt="Shapes">
      <img class="absolute invisible md:visible right-0 lg:right-12 bottom-56 w-80 lg:w-96" src="./../assets/shape_flip.svg" alt="Shapes">
      <img class="mx-auto w-72 md:w-96 lg:w-1/3" src="./../assets/running.svg" alt="Running">
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return{
        key: import.meta.env.VITE_API_KEY
      }
    }
}
</script>