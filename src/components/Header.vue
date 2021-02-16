<template>
    <div>
        <b-jumbotron header="Izlog telefona" :lead="'Ukupno na raspolaganju: ' + telefoni.length">
        </b-jumbotron>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Header",
        computed: {
            ...mapState(['telefoni'])
        }
    }
</script>

<style scoped>

</style>