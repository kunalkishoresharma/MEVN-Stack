<template>
  <div id="app">
    <Navbar />
    <main class="site-main container py-4" role="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>
<script>
require('@/assets/css/style.css')

  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'

  export default{
    name:'app',
    components:{
      Navbar,
      Footer
    },
    beforeCreate: function() {
      this.$store.dispatch('authenticate');
    },
  }
</script>