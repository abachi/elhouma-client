<template>
    <div class="shadow border-b flex justify-between p-4">
        <div class="logo">
            <router-link :to="{ name: 'home' }">
                ElHouma
            </router-link>
        </div>
        <ul class="flex">
            <template v-if="authenticated">
                <li class="inline-block mx-2">
                    <router-link :class="'text-blue-500'" :to="{ name: 'new-report' }">New Report</router-link>
                </li>

                <li class="inline-block mx-2">
                    <router-link :class="'text-blue-500'" :to="{ name: 'my-reports' }">My Reports</router-link>
                </li>

                <li class="inline-block mx-2">
                    <p class="text-sm font-semibold">{{ user.name }}</p>
                </li>
            </template>
            <template v-else>
                <li class="inline-block mx-2">
                    <router-link :class="'text-blue-500'" :to="{ name: 'register' }">Register</router-link>
                </li>
                <li class="inline-block mx-2">
                    <router-link :class="'text-blue-500'" :to="{ name: 'login' }">Login</router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    }
}
</script>