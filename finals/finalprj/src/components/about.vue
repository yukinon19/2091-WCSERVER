<template>
    <div class = "about bg-home">
      <h1 class = "heading">{{ web }}</h1>

      <!-- 1st Row -->
      <div class="about-section">
        <div class="inner-width">
          <h1>{{title1}}</h1>
          <div class="border"></div>
          <div class="about-section-row">
            <div class="about-section-col">
              <div class="about"> 
                <p>
                  The title of the website comes from the terms "cat" and "tour." 
                  I used to love cats wandering everywhere and exploring places without 
                  any restriction. To relate this to the website, I am likely to know more 
                  about Genshin Impact and explore the Teyvat world (open world) using the 
                  characters I like.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
              <div class="interest"><h3>Exploration in Teyvat</h3></div>
                <div class="skill">
                  <div class="title">Mondstadt</div>
                  <div class="progress">
                    <div class="progress-bar b1"><span>100%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Liyue</div>
                  <div class="progress">
                    <div class="progress-bar b2"><span>100%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Inazuma</div>
                  <div class="progress">
                    <div class="progress-bar b3"><span>100%</span></div>
                  </div>
                </div>
                
                <div class="skill">
                  <div class="title">Sumeru</div>
                  <div class="progress">
                    <div class="progress-bar b4"><span>24%</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2nd Row -->
        <div class="about-section">
        <div class="inner-width">
          <h1>{{title2}}</h1>
          <div class="border"></div>
          <div class="about-section-row">
            <div class="about-section-col">
              <div class="about"> 
                <p>
                  Hi! My name is Jenna Ella Pangilinan, a second-year college student from Holy Angel University.
                  This is my 6WCSERVER project. Creating this activity lets me experience more about Vue.JS,
                  which may enhance my programming skills.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="about-section-col">
              <div class="skills">
              <div class="interest"><h3>Interests</h3></div>
                <div class="skill">
                  <div class="title">Music</div>
                  <div class="progress">
                    <div class="progress-bar p1"><span>80%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Layout Designing</div>
                  <div class="progress">
                    <div class="progress-bar p2"><span>70%</span></div>
                  </div>
                </div>
 
                <div class="skill">
                  <div class="title">Film Editing</div>
                  <div class="progress">
                    <div class="progress-bar p3"><span>68%</span></div>
                  </div>
                </div>
                
                <div class="skill">
                  <div class="title">Gaming</div>
                  <div class="progress">
                    <div class="progress-bar p4"><span>80%</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"><p></p></div>
      </div>
</template>

<script>
export default {
  name: 'about',
  
  data () {
    return {
      title1: 'About the Website',
      title2:'About the Author',
      web: 'KATTUR'
    }
  }
}
</script>

<style scoped>

.bg-home {
  height: 100vh;
  background-image: url("../assets/about.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.about-section{
  width: 70%;
background:#fff;
  padding: 40px 0;
  margin-left: auto;
  margin-right:auto;
  margin-top: 120px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
border-radius: 30px;
border-left: 50px solid #008852;
border-right: 50px solid #008852;
}
.spacer {padding-bottom: 100px;}

.heading {
  padding-top: 5%;
  text-align: center;
  font-size: 100px;
  color: white;
}

.interest {
  text-align: center;
}
.inner-width{
  max-width: 1000px;
  overflow: hidden;
  padding: 0 20px;
  margin: auto;
}
.about-section h1{
  text-align: center;
}
.border{
  width: 100px;
  height: 3px;
  background: #008852;
  margin: 40px auto;
}
.about-section-row{
  display: flex;
  flex-wrap: wrap;
}
.about-section-col{
  flex: 50%;
}
.about{
  padding-right: 30px;
}
.about p{
  text-align: justify;
  margin-bottom: 20px;
  color: #7E7C7A;
  font-size: 17px;
}
.about a{
  display: inline-block;
  color: #7E7C7A;
  text-decoration: none;
  border: 2px solid #008852;
  border-radius: 24px;
  padding: 8px 40px;
  transition: 0.4s linear;
}
.about a:hover{
  color: #fff;
  background: #008852;
}
.skills{
  padding-left: 30px;
}
.skill{
  margin-bottom: 10px;
}
.title{
  color: #7E7C7A
}
.progress{
  width: 100%;
  height: 12px;
  background: #ddd;
  border-radius: 12px;
}
.progress-bar{
  height: 12px;
  background: #008852;
  border-radius: 12px;
}

/* METER */
.p1{
  width: 80%;
}
.p2{
  width: 70%;
}
.p3{
  width: 68%;
}

.p4{
  width: 80%;
}

.b1{
  width: 100%;
}
.b2{
  width: 1000%;
}
.b3{
  width: 100%;
}

.b4{
  width: 24%;
}

/* END METER */
.progress-bar span{
  float: right;
  margin-right: 6px;
  line-height: 13px;
  color: #fff;
  font-size: 12px;
}
@media screen and (max-width:700px) {
  .about-section-col{
    flex: 100%;
    margin: 10px 0;
  }
  .about,.skills{
    padding: 0;
  }
  .about{
    text-align: center;
  }
}


</style>