<template>
    <div class="card">
        <h1>COUCOUUU les données suivantes viennent du BACK qui peut aussi servir d'API !</h1>
        <ul class="list-group" v-for="item in this.data" :key="item">
            <li class="list-group-item">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'home-app',
    data() {
        return {
            data: ["hello"],
        }
    },
    async created() {
        this.data = (await axios.get('http://localhost:5000/data')).data;
        console.log(this.data);
    }
}
</script>
<style lang="scss">
body {
    .card {
        background-color: rgb(253, 253, 253);
        width: fit-content;
        font-weight: bold;
        margin: auto;
    }
    background-color: rgb(53, 53, 53);
    height: 100vh;
}
</style>