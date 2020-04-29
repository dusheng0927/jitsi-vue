<template>
  <div id="app">
    <div id="meet" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {}
  },
  created(){
    
  },
  mounted(){
    var domain = 'meet.jit.si'
    var options = {
      roomName: 'Testroom',
      width: 600,
      height: 500,
      parentNode: document.querySelector('#meet')
    }
    var api = new JitsiMeetExternalAPI(domain, options)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>