<template>
    <div class="w-1/3 shadow rounded p-6 mx-auto my-12">
        <h1 class="font-bold text-xl my-4">Register</h1>
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
            }
        }
    },
    methods: {
        submit(){
            console.log('submitted');
        }
    }
}
</script>