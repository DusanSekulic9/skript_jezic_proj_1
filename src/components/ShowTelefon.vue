<template>

    <b-container fluid>
        <b-row>
            <b-col sm="2">
                <label for="marka">Marka:</label>
            </b-col>
            <b-col sm="10">
                <p id="marka" style="text-align: left">{{ telefon.marka }}</p>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col sm="2">
                <label for="model">Model:</label>
            </b-col>
            <b-col sm="10">
                <p id="model" style="text-align: left">{{ telefon.model }}</p>
            </b-col>
        </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="procesor">Procesor:</label>
        </b-col>
        <b-col sm="10">
          <p id="procesor" style="text-align: left">{{ telefon.procesor }}</p>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col sm="2">
          <label for="verzija">Verzija:</label>
        </b-col>
        <b-col sm="10">
          <p id="verzija" style="text-align: left">{{ telefon.verzija }}</p>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ShowTelefon",
        props: {
            telefon: Object
        }
    }
</script>