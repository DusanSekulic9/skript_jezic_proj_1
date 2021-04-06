<template>
    <div>
        <b-table
                hover v-if="telefoni.length"
                sticky-header="800px"
                :items="telefoni"
                :fields="fields"
                head-variant="light"
                @row-clicked="editTelefon">
            <template v-slot:cell(delete)="row">
                <b-button v-if="admin == false" variant="danger" @click="delete_telefon(row.item.id)">Delete</b-button>
            </template>
        </b-table>
        <h1 v-else>No messages</h1>
    </div>
</template>

<script>
    import router from "@/router";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "TelefonList",
        computed: {
            ...mapState(['telefoni', 'admin'])
        },
        data() {
            return {
                fields: [
                    { key: 'marka' },
                    { key: 'model' },
                    { key: 'procesor' },
                    { key: 'verzija' },
                    { key: 'delete' }
                ]
            }
        },
        methods: {
            ...mapActions(['delete_telefon']),

            editTelefon: function (item, index, event) {
                router.push({path: `/telefon/${item.id}`})
            }
        }
    }
</script>

<style>
    tr:hover td{
        background: mediumvioletred;
    }
</style>