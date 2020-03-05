<template>
    <div class="shadow border-b flex justify-between p-4">
        <div class="logo">
            <router-link :to="{ name: 'home' }">
                ElHouma
            </router-link>
        </div>
        <ul class="flex">
            <li class="inline-block mx-2">
                <router-link :class="'text-blue-500'" :to="{ name: 'register' }">Register</router-link>
            </li>
            <li class="inline-block mx-2">
                <router-link :class="'text-blue-500'" :to="{ name: 'login' }">Login</router-link>
            </li>
        </ul>
    </div>
</template>