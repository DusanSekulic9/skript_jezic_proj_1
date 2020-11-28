<template>
  <div class="home">
      <Header/>
      <b-container>
          <b-row>
              <b-col cm="6" >
                  <TelefonList/>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import TelefonList from "@/components/TelefonList";
import Telefon from "@/views/Telefon";

export default {
    name: 'home',
    components: {
        Header,
        TelefonList
    }
}
</script>
