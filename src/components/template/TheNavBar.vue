
<script>
import Home from '../../views/Home.vue'
import ContactUs from '../../views/ContactUs.vue'

export default {
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
  <nav role="navigation">
    <div class="container">
        <ul>
          <li :class="($route.name == 'Home') ? 'active' : 'inactive'"><router-link to="/">Home</router-link></li>
          <li :class= "($route.name == 'ContactUs') ? 'active' : 'inactive'"><router-link to="/contact-us">Contact Us</router-link></li>
        </ul>
      </div>
  </nav>
</template>


<style scoped>
/* Main Navigation */
nav .container {
    height: 40px;
    background-color: #38598A;
    margin: 0;
    padding: 0 60px;
}

nav .container ul li {
    display: inline-block;
    height: 40px;
    padding: 0 20px;

}

nav .container ul li a {
    font-weight: bold;
    font-size: 1rem;
    line-height: 40px;
    color: #FFFFFF;
    text-decoration: none;
}

nav .container ul li:first-child {
    margin-left: -20px;
    
}

.active {
    background-color: #496DA2;
}

nav .container ul li:hover {
    cursor: pointer;
    background-color: #496DA2;
}

</style>
