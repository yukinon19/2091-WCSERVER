<template>
  <div class="home-container bg-home">
    <div class = "blog">
      <section class = "reviews" id = "reviews">
        <h1 class = "heading">{{ title }}</h1>
        <div class = "box-container container">
          <div class = "box">
            <img src = "../assets/keqing_1.gif" alt = "" height="34%">
            <p class="descA">Keqing is one of the female characters I admire. I am amazed by her capabilities as the Yuheng of the Liyue Qixing. Her outfit is captivating and shows nobility when working.</p>    
          </div>
          <div class = "box">
            <img src = "../assets/ayaka_1.gif" alt = "" height="34%">
            <p class="descA">Kamisato Ayaka is my favorite character, which made me play Genshin Impact. She also has an appealing appearance, which distinguishes her as the princess in her clan.</p>    
          </div>
          <div class = "box">
            <img src = "../assets/raiden_1.gif" alt = "" height="34%">
            <p class="descA">Raiden Shogun is my first 5-star character, and she made me like her character. She is one of the strongest archons; she slashed the island in Inazuma during the archon war.</p>    
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  
  data () {
    return {
      title:'THE MAIN TRIO'
    }
  }
}
</script>

<style scoped>
.bg-home {
  height: 100vh;
  background-image: url("../assets/BlogBG.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}
.reviews{
   color: white;
}

.heading {
  padding-top: 5%;
  text-align: center;
  font-size: 100px;
}

.reviews .box-container{
  padding-top: 3%;
  margin: 0,10%,0,10%;
  text-align: justify;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   gap:2rem;
}

.reviews .box-container .box{
   text-align: justify;
   padding-top: 60px;
   padding-right: 2rem;
   padding-left: 2rem;
   /* padding:2rem; */
}

.reviews .box-container .box img{
   display: grid;
   grid-template-columns: auto;
   justify-self: auto;
   box-shadow: 0 0 50px rgb(119, 0, 255);
   border: 5px solid rgb(255, 255, 255);
   border-radius: 9px;
}

.reviews .box-container .box p{
   padding:2rem 0;
   line-height: 2;
   margin-bottom: 0;
}

.reviews .box-container .box .descA {
  font-size: 1.2rem;
}

</style>
