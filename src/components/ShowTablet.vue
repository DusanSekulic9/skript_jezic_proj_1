<template>

  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <label for="marka">Marka:</label>
      </b-col>
      <b-col sm="10">
        <p id="marka" style="text-align: left">{{ tablet.marka }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="model">Model:</label>
      </b-col>
      <b-col sm="10">
        <p id="model" style="text-align: left">{{ tablet.model }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="procesor">Procesor:</label>
      </b-col>
      <b-col sm="10">
        <p id="procesor" style="text-align: left">{{ tablet.procesor }}</p>
      </b-col>
    </b-row>

    <b-row class="mt-2">
      <b-col sm="2">
        <label for="verzija">Verzija:</label>
      </b-col>
      <b-col sm="10">
        <p id="verzija" style="text-align: left">{{ tablet.verzija }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ShowTablet",
  props: {
    tablet: Object
  }
}
</script>