<template>
   <div class="home-container bg-home">
    <p class="title">{{ title }}</p>
    <div class = "blog">

    <!-- Gallery -->
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="../assets/3.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="../assets/1.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="../assets/9.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="../assets/10.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="../assets/2.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="../assets/8.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
<!-- Gallery -->
        </div>
      </div>

</template>

<script>
export default {
  name: 'gallery',
  
  data () {
    return {
      title:'GALLERY'
    }
  }
}
</script>

<style scoped>

/* MAIN */
.bg-home {
  height: 100vh;
  background-image: url("../assets/BlogBG.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.title{
  padding-top: 20px;
  font-size: 80px;
  color: white;
  text-align: center;
}

/* IN GAME */

 
</style>