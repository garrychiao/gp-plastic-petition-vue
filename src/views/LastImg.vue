<template>
  <div class="last-img">
    <p class="EngGoth center">PROTECT OUR ONE AND ONLY EARTH</p>
  </div>
</template>

<script>
export default {
  name: 'LastImg',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.last-img {
  p {
    margin: unset;
  }
  height: 55vw;
  background-image: url('../assets/img/last.jpg');
  background-position: center center;
  background-size: 101% 101%;
  text-align: center;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 2rem;
    border-bottom: 2px solid white;
    font-weight: bold;
  }
}
</style>
