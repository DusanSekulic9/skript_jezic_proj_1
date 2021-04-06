<template>
  <div class="home">
    <b-button v-if="admin==false" variant="primary" size="lg" @click="noviTelefon">novi telefon</b-button>
      <Header/>
      <b-container>
          <b-row>
              <b-col cm="6" >
                  <TelefonList/>
              </b-col>
          </b-row>
      </b-container>
    <b-button v-if="admin==false" variant="primary" size="lg" @click="noviTablet">novi tablet</b-button>
    <HeaderT/>
    <b-container>
      <b-row>
        <b-col cm="6" >
          <TabletList/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import TelefonList from "@/components/TelefonList";
import HeaderT from "@/components/HeaderT";
import TabletList from "@/components/TabletList";
import {mapState} from "vuex";
import router from "@/router";

export default {
    name: 'home',
  computed: {
    ...mapState(['admin'])
  },
    components: {
      TabletList,
      HeaderT,
      Header,
      TelefonList
    },
  methods: {
      noviTelefon: function () {
        router.push('/editTelfon');
      },
    noviTablet: function (){
        router.push('/editTablet')
    }
  }

}
</script>
