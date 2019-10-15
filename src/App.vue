<template>
  <div id="app">
    <!-- cut into sections -->
    <!-- home -->
    <el-row id="home">
      <el-col class="hidden-sm-and-down" :md="{span: 7}">
        <HomeSide></HomeSide>
      </el-col>
      <el-col :xs="24" :sm="24" :md="{span: 17}">
        <Home></Home>
      </el-col>
      <el-col class="hidden-md-and-up" :xs="24" :sm="24">
        <HomeSide></HomeSide>
      </el-col>
    </el-row>
    <!-- form -->
    <div class="form-container" >
      <component :is="formComponent" v-on:thankYou="toThankYou"></component>
      <!-- <Form ></Form> -->
    </div>
    <!-- compare -->
    <el-row id="compare" type="flex">
      <el-col class="hidden-sm-and-down" :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Compare></Compare>
      </el-col>
    </el-row>
    <!-- intro -->
    <el-row id="intro" type="flex">
      <el-col class="hidden-sm-and-down" :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Intro></Intro>
      </el-col>
    </el-row>
    <!-- promise -->
    <el-row id="promise" type="flex">
      <el-col class="hidden-sm-and-down" :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Promise></Promise>
      </el-col>
    </el-row>
    <!-- responsibility -->
    <el-row id="responsibility" type="flex">
      <el-col class="hidden-sm-and-down" :md="{span: 7}"></el-col>
      <el-col :md="{span: 17}">
        <Responsibility></Responsibility>
      </el-col>
    </el-row>
    <!-- lastImg -->
    <el-row id="lastImg" type="flex">
      <el-col class="hidden-sm-and-down" :md="{span: 7}"></el-col>
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
import ThankYou from './views/ThankYou.vue'
import {scroller} from 'vue-scrollto/src/scrollTo'

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
    ThankYou,
  },
  data() {
    return {
      formComponent: Form,
    }
  },
  methods: {
    toThankYou() {
      this.formComponent = ThankYou;
      // console.log('scroll to')
      const firstScrollTo = scroller();
      firstScrollTo('#form-container');
    }
  }
}
</script>

<style>
#app {
  font-family: 'NotoSansCJKtc-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: unset;
}
.form-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 36vw;
  z-index: 1200;
  /* border: 1px solid black; */
}
@media (max-width: 991px) {
  .form-container {
    position: relative;
    width: 100%;
    z-index: 100;
    /* border: 1px solid black; */
  } 
}
</style>
