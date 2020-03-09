<template>
    <div class="w-1/3 shadow rounded p-6 mx-auto my-12">
        <div class="flex items-center">
            <h1 class="font-bold text-xl my-4 mr-3">Register</h1>
            <span v-if="form.loading" class="ml-3 text-green-500">Loading...</span>
        </div>
        <div v-if="form.success">
            <p class="text-green-500">
                Account registred successfully, please confirm your email and 
                <router-link :class="'underline font-semibold'" :to="{ name: 'login'}">Login</router-link>
            </p>
        </div>
        <div class="errors">
            <div v-for="error in form.errors" :key="error[0]">
                <p class="text-red-500" v-for="message in error" :key="message">{{ message }}</p>
            </div>
        </div>
        <form @submit.prevent="submit">
            <div class="my-2">
                <label class="inline-block w-1/4" for="name">Full name</label>
                <input class="w-3/5 border rounded px-1" type="name" name="name" id="name" v-model="form.name">
            </div>
            <div class="my-2">
                <label class="inline-block w-1/4" for="email">Email</label>
                <input class="w-3/5 border rounded px-1" type="email" name="email" id="email" v-model="form.email">
            </div>
            <div class="my-2">
                <label class="inline-block w-1/4" for="password">Password</label>
                <input class="w-3/5 border rounded px-1" type="password" name="password" id="password" v-model="form.password">
            </div>
            <div class="my-2">
                <label class="inline-block w-1/4" for="password_confirmation">Confirmation</label>
                <input class="w-3/5 border rounded px-1" type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation">
            </div>
            <div class="mt-6">
                <button class="px-3 py-1 rounded bg-blue-400 text-white" type="submit">
                    Register
                </button>
            </div>
        </form>

    </div>

</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: 'register',
    components: {
        //
    },

    data(){
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                errors: [],
                success: false,
                loading: false,
            }
        }
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
        }),
    },
    methods: {
        submit(){
            this.form.loading = true;
            axios.post('/auth/register', this.form).then(() => {
                this.form.success = true;
                this.form.errors = [];
                this.form.loading = false;
            }).catch(error => {
                this.form.success = false;
                this.form.errors = error.response.data.errors;
                this.form.loading = false;
            });
        }
    }
}
</script>