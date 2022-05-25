<script setup>
import TheNavBar from './components/template/TheNavBar.vue'
import TheHeader from './components/template/TheHeader.vue'
import TheFooter from './components/template/TheFooter.vue'

</script>

<script>


import Home from './views/Home.vue'
import CollapsibleItem from './components/CollapsibleItem.vue'
import ContactUs from './views/ContactUs.vue'
import RequestIntegration from './views/RequestIntegration.vue'
import IntegrationInstructions from './views/IntegrationInstructions.vue'



export default {
  name: 'App',
  components: { Footer: TheFooter },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}

</script>

<template>
  <header>
    <TheHeader />
    <TheNavBar />
  </header>

  <main>
    <router-view/>
    <!-- <component :is="currentView" /> -->
  </main>

    <TheFooter />
</template>

<style src=./assets/css/main.css></style>
<style src=./assets/css/reset.css></style>
<style src=./assets/css/typography.css></style>

