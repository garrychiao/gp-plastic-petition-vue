<template>
  <div id="app">
    <!-- cut into sections -->
    <!-- home -->
    <el-row id="home" type="flex">
      <el-col :md="{span: 7}">
        <HomeSide></HomeSide>
      </el-col>
      <el-col :md="{span: 17}">
        <Home></Home>
      </el-col>
    </el-row>
    <!-- compare -->
    <el-row id="compare" type="flex">
      <el-col :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Compare></Compare>
      </el-col>
    </el-row>
    <!-- intro -->
    <el-row id="intro" type="flex">
      <el-col :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Intro></Intro>
      </el-col>
    </el-row>
    <!-- promise -->
    <el-row id="promise" type="flex">
      <el-col :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Promise></Promise>
      </el-col>
    </el-row>
    <!-- responsibility -->
    <el-row id="responsibility" type="flex">
      <el-col :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Responsibility></Responsibility>
      </el-col>
    </el-row>
    <!-- lastImg -->
    <el-row id="lastImg" type="flex">
      <el-col :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <last-img></last-img>
      </el-col>
    </el-row>
    <!-- footer -->
    <el-row id="footer">
      <el-col :md="{span: 24}">
        <Footer></Footer>
      </el-col>
    </el-row>
    <div class="form">
      <Form></Form>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/Home.vue'
import HomeSide from './views/HomeSide.vue'
import Compare from './views/Compare.vue'
import Intro from './views/Intro.vue'
import Promise from './views/Promise.vue'
import Responsibility from './views/Responsibility.vue'
import LastImg from './views/LastImg.vue'
import Footer from './views/Footer.vue'
import Form from './views/Form.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Home,
    HomeSide,
    Compare,
    Intro,
    Promise,
    Responsibility,
    LastImg,
    Footer,
    Form,
  }
}
</script>

<style>
#app {
  font-family: '', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: 16px;
  margin: unset;
  letter-spacing: 2.5pt;
  line-height: 1.8;
}
.form {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 36vw;
  border: 1px solid black;
}
</style>
