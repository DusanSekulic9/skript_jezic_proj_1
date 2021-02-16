<template>
    <div class="home">
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <EditTelefon/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditTelefon from "@/components/EditTelefon";
    import Header from "@/components/Header";

    export default {
        name: 'NoviTelefon',
        components: {
            Header,
            EditTelefon
        }
    }
</script>

<style scoped>

</style>