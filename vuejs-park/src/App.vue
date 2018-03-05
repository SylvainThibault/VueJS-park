<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <div class="inline-button" @click="onMachinesListClick">Consulter la liste des machines</div>
    <div class="inline-button" @click="onMapClick">Voir la carte</div>
    <machines-list></machines-list>
    <machines-map></machines-map>
  </div>
</template>

<script>
import MachinesList from "./MachinesList.vue";
import MachinesMap from "./MachinesMap.vue";

export default {
    components: {
        MachinesMap,
        MachinesList},
    name: 'app',
  data () {
    return {
      msg: "Qu'est-ce tu veux faire gros ?"
    }
  },
    methods: {
        onMachinesListClick: function(){
            window.alert('machines');
        },
        onMapClick: function() {
            window.alert('maps')
        }
    },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.inline-button {
    display: inline-block;
    background-color: #14b776;
    color: white;
    padding: 20px 40px;
    }
</style>
