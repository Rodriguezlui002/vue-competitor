<template>
    <div>
        <div :show="!!error" title="An error occurred" @close="handleError">
            <p>{{ error }}</p>
        </div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="email">E-Mail</label>
                <input type="email" id="email" v-model.trim="email" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password" />
            </div>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async submitForm() {
            try {
                const actionPayload = {
                    email: this.email,
                    password: this.password,
                };
                await this.$store.dispatch('signup', actionPayload);

                this.$router.replace('/dashboard');
            } catch (err) {
                this.error = err.message || 'Failed to authenticate, try later.';
            }
        },
        handleError() {
            this.error = null;
        },
    }
}
</script>