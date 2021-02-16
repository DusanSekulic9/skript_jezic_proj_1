<template>
    <b-container fluid>
        <b-form>
            <b-row class="mt-2">
                <b-col sm="2" offset="2">
                    <b-input v-model="newMarka" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Marka"></b-input>
                </b-col>

              <b-col sm="2" offset="2">
                <b-input v-model="newModel" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Model"></b-input>
              </b-col>
            </b-row>

          <b-row class = "mt-2">
            <b-col sm="2" offset="2">
              <b-input v-model="newProcesor" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Procesor"></b-input>
            </b-col>


            <b-col sm="2" offset="2">
              <b-input v-model="newVerzija" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Verzija"></b-input>
            </b-col>
          </b-row>

          <b-row class = "mt-2">
            <b-col sm="1">
              <b-button variant="primary" size="lg" @click="addNew">Save</b-button>
            </b-col>
          </b-row>
        </b-form>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';


    export default {
        name: "EditTelefon",
        props: {
            marka: {
                type: String,
                default: ''
            },
            model: {
                type: String,
                default: ''
            },
            procesor: {
              type: String,
              default: ''
            },
            verzija: {
              type: String,
              default: ''
           }
        },
        data() {
            return {
              newMarka: '',
              newModel: '',
              newProcesor: '',
              newVerzija: ''
            }
        },
        mounted: function () {
            this.newMarka = this.marka;
            this.newModel = this.model;
            this.newProcesor = this.procesor;
            this.newVerzija = this.verzija;
        },
        methods: {
            ...mapActions(['new_telefon', 'change_telefon']),

            addNew: function() {
              const Joi = require('joi');

              const sema = Joi.object().keys({
                marka: Joi.string().trim().required(),
                model: Joi.string().trim().required(),
                procesor: Joi.string().trim().required(),
                verzija: Joi.string().trim().required()
              });

              const link = Joi.object().keys({
                id: Joi.number().min(1).max(50).required()
              });
                const telefon = JSON.stringify({marka: this.newMarka, model: this.newModel, procesor: this.newProcesor, verzija: this.newVerzija});
                let { error } = Joi.validate(telefon, sema);

                if(error){
                    alert(error.details[0].message);
                  return;
                }

                if (!this.$route.params.id)
                    this.new_telefon(telefon);
                else
                    this.change_telefon({id: this.$route.params.id, tel: telefon});

                this.newMarka = '';
                this.newModel = '';
                this.newProcesor = '';
                this.newVerzija = '';
            }
        }
    }
</script>

<style scoped>

</style>