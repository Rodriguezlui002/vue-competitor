<template>
    <div class="relative z-10 w-full h-20 bg-primary text-gray-900">
        <header class="h-full flex justify-between items-center mx-6">
            <span class="text-2xl uppercase font-bold tracking-wide">Competitors</span>
            <div v-show="windowWidth < 625" class="cursor-pointer" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div v-show="windowWidth >= 625" class="flex space-x-6">
                <router-link class="font-semibold text-xl" to="/">Home</router-link>
                <router-link class="font-semibold text-xl" to="/about">About</router-link>
                <router-link v-if="!isLogged" class="font-semibold text-xl" to="/signup">Sign Up</router-link>
                <router-link v-if="!isLogged" class="font-semibold text-xl" to="/login">Login</router-link>
                <router-link v-if="isLogged" class="font-semibold text-xl" to="/dashboard">Dashboard</router-link>
                <button v-if="isLogged" class="font-semibold text-xl" @click="logOut">Logout</button>
            </div>
        </header>
        <div v-show="windowWidth < 625 && showMenu" class="fixed inset-x-0 top-28 mx-auto w-max h-auto flex flex-col space-y-6 px-24 py-6 rounded bg-primary text-gray-100 text-center font-bold text-xl">
            <router-link @click="toggleMenu" to="/">Home</router-link>
            <router-link @click="toggleMenu" to="/about">About</router-link>
            <router-link v-if="!isLogged" @click="toggleMenu" to="/signup">Sign Up</router-link>
            <router-link v-if="!isLogged" @click="toggleMenu" to="/login">Login</router-link>
            <router-link v-if="isLogged" @click="toggleMenu" to="/dashboard">Dashboard</router-link>
            <button v-if="isLogged" @click="logOut" >Logout</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            showMenu: false,
        }
    },
    computed: {
        isLogged() {
            return this.$store.getters.isAuthenticated
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        logOut() {
            if (this.showMenu) {
                this.showMenu = !this.showMenu;
            }
            this.$store.dispatch('logout');
            this.$router.replace('/');
        }
    }
}
</script>

<style>
.router-link-active {
    @apply text-gray-100
}
</style>