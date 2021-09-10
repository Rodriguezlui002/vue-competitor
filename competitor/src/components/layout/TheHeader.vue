<template>
    <div class="h-20 bg-primary text-gray-900">
        <header class="h-full flex justify-between items-center mx-6">
            <router-link to="/" class="text-2xl uppercase font-bold tracking-wide">Competitors</router-link>
            <div class="cursor-pointer sm:hidden" @click="clickHandler">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>