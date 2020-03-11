<template>
    <div class="w-1/2 mx-auto bg-white shadow-lg rounded border my-12 p-12">
        <h1 class="text-xl mb-6">Add A Report:</h1>
        <div class="errors">
            
        </div>
        <form enctype="multipart/form-data">
            <div class="my-2">
                <label class="m-1" for="picture">Choose a picture (required)</label>
                <input type="file" name="picture" id="picture" @change="onChange">
            </div>

            <div class="flex flex-col my-2">
                <label class="m-1" for="description">Short description (optional): </label>
                <textarea v-model="form.description" class="border rounded p-1" name="description" id="description" cols="10" rows="5"></textarea>
            </div>

            <div>
                <button class="bg-blue-500 rounded text-white px-3 py-1" type="submit" @click.prevent="addReport">Add</button>
            </div>

        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return {
            form:{
                picture: null,
                description: '',
                lat: null,
                lng: null
            }
        }
    },
    methods: {
        addReport(){
            navigator.geolocation.getCurrentPosition(pos => {
                console.log(pos);
                const { latitude, longitude } = pos.coords;
                const formData = new FormData();
                formData.append('picture', this.form.picture);
                formData.append('lat', latitude);
                formData.append('lng', longitude);
                axios.post('/reports/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    console.log(res);
                }).catch( error =>{
                    console.log('Error', error);
                });
            }, error => {
                if(error.code === 1){
                    alert('Please allow access to geolocation for better experience.');
                }
            });
        },
        onChange(e) {
            this.form.picture = e.target.files[0];
        }
    }
}
</script>