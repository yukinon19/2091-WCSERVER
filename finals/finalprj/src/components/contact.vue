<template>
  <div class="contact bg-home">
    <p class="title">{{ title }}</p>
    <div class="container">
  <form action="/action_page.php">
    <label for="fname" class="label">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname" class="label">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country" class="label">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="others">Others</option>
    </select>

    <label for="subject" class="label">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
</div>
</template>

<script>
export default {
  name: 'contact',
  
  data () {
    return {
      title:'CONTACT'
    }
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.bg-home {
  height: 100vh;
  background-image: url("../assets/contact.jpg");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.title{
  padding-top: 20px;
  font-size: 80px;
  color: rgb(59, 15, 129);
  text-align: center;
  text-shadow: 0 0 20px #fff, 0 0 30px #9900ff, 0 0 10px #9900ff, 0 0 10px #9900ff, 0 0 20px #9900ff, 0 0 30px #9900ff, 0 0 40px #9900ff;
}

.label{
  color: white;
  padding-bottom: 20px;
}

input[type=text], select, textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #44006b;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #4e008d;
}

.container {
  margin-top: 10px;
  border-radius: 5px;
  width: 30%;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 50px;
  text-align: center;
}

</style>