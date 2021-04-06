<template>
  <div>
    <HeaderT/>
    <b-container>
      <b-row>
        <b-col cm="6" >
          <div v-if="edit">
            <EditTablet :marka="tablet.marka" :model="tablet.model" :procesor="tablet.procesor" :verzija="tablet.verzija"/>
          </div>
          <div v-else>
            <ShowTablet v-if="tableti.length" :tablet="tablet"/>
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
import EditTablet from "@/components/EditTelefon";
import HeaderT from "@/components/HeaderT";
import ShowTablet from "@/components/ShowTelefon";
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Tablet',
  components: {
    HeaderT,
    EditTablet,
    ShowTablet
  },
  data() {
    return {
      edit: false
    }
  },
  computed: {
    ...mapState(['tableti']),

    tablet: function () {
      for (let i = 0; i < this.tableti.length; i++)
        if (this.tableti[i].id === parseInt(this.$route.params.id))
          return this.tableti[i];
    }
  },
  methods: {
    ...mapActions(['load_tableti']),

    toggleEdit: function () {
      this.edit = !this.edit
    }
  }
}
</script>

<style scoped>

</style>