<template>
  <div id="app">
    <div id="meet">

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  created () {
    // var domain = 'meet.jit.si'
    if (document.getElementById('my-datatable')) return; // was already loaded
      var scriptTag = document.createElement("script");
      scriptTag.src = "https://meet.jit.si/libs/lib-jitsi-meet.min.js";
      scriptTag.id = "my-datatable";
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
  },
  mounted () {
    var domain = 'meet.jit.si'
    var options = {
        roomName: 'JitsiMeetApiExample',
        width: 700,
        height: 700,
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
