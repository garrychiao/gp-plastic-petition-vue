<template>
  <div class="compare">
    <div class="content-header">

    </div>
    <div class="content-container">
      <el-row type="flex">
        <div class="left">

        </div>
        <div class="right">

        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Compare',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.compare {
  .content-header {
    height: 5vw;
    width: 100%;
  }
  .content-container {
    .left {
      background-color: #5c775f;
      height: 50vw;
      width: 55%;
    }
    .right {
      background-color: #ffc769;
      height: 50vw;
      width: 45%;
    }
    
  }
}
</style>
