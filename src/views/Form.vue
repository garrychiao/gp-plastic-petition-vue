<template>
  <div class="form">
    
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  position: relative;
  width: 100%;
  height: 40vw;
  border-radius: 1px;
  box-shadow: 10px -5px 15px 0 rgba(214, 207, 207, 0.5);
  background-color: #f9f9f9;
}
@media (max-width: 991px) {
  .form {
    margin-top: -15vh;
    padding-top: 16vh;
    height: 140vh;
    // border: 1px solid black;
  } 
}
</style>
