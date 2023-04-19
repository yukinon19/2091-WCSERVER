<template>
  <div id="app">
    <div class="container">
    <img class="id" src="./assets/resume_pic.jpg">
    <div class="full-name">
            <span class="first-name">{{ fname }}</span> 
            <span class="last-name">{{ lname }}</span>
          </div>
    <profile></profile>
    <education></education>
    <skill></skill>
  </div>
  </div>
</template>

<script>
import profile from './profile.vue'
import education from './education.vue'
import skill from './skill.vue'
export default {
  name: 'app',
  components: {
    profile,
    education,
    skill
  },
  data () {
    return {
      fname: 'Jenna Ella ',
      lname: 'Pangilinan'
    }
  }
}
</script>

<!-- CSS -->
<style>
.id {
  margin-left: 25px;
  max-height: 200px;
  max-width: 200px;
  width: 170px;
  height: 170px;
  float: right;
}
</style>
