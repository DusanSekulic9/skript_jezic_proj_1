<template>
    <div>
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div v-if="edit">
                        <EditTelefon :marka="telefon.marka" :model="telefon.model" :procesor="telefon.procesor" :verzija="telefon.verzija"/>
                    </div>
                    <div v-else>
                        <ShowTelefon v-if="telefoni.length" :telefon="telefon"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cm="2" style="margin-top: 10px">
                    <b-button variant="primary" size="lg" @click="toggleEdit" v-html="edit ? 'Cancel' : 'Edit'"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditTelefon from "@/components/EditTelefon";
    import Header from "@/components/Header";
    import ShowTelefon from "@/components/ShowTelefon";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Telefon',
        components: {
            Header,
            EditTelefon,
            ShowTelefon
        },
        data() {
            return {
                edit: false
            }
        },
        computed: {
            ...mapState(['telefoni']),

            telefon: function () {
                for (let i = 0; i < this.telefoni.length; i++)
                    if (this.telefoni[i].id === parseInt(this.$route.params.id))
                        return this.telefoni[i];
            }
        },
        methods: {
            ...mapActions(['load_telefoni']),

            toggleEdit: function () {
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>

</style>