<template>
    <div class="w-1/3 shadow rounded p-6 mx-auto my-12">
        <h1 class="font-bold text-xl my-4">Login</h1>
        <form @submit.prevent="submit">
            <div class="my-2">
                <label class="inline-block w-1/4" for="email">Email</label>
                <input class="w-3/5 border rounded px-1" type="email" name="email" id="email" v-model="form.email">
            </div>
            <div class="my-2">
                <label class="inline-block w-1/4" for="password">Password</label>
                <input class="w-3/5 border rounded px-1" type="password" name="password" id="password" v-model="form.password">
            </div>
            <div class="mt-6">
                <button class="px-3 py-1 rounded bg-blue-400 text-white" type="submit">
                    Login
                </button>
                <router-link :class="'underline text-gray-500 text-sm mx-2'" :to="{ name: 'reset-password' }">Forgot password?</router-link>
            </div>
        </form>

    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'login',
    components: {
        //
    },
    data(){
        return {
            form: {
                email: '',
                password: '',
            },
            isLoading: false,
        }
    },
    methods: {
        submit(){
            console.log('submitted');
            axios.post('/auth/login', this.form).then((res) => {
                console.log(res);
            });
        }
    }
}
</script>