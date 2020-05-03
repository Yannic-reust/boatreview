<template>
  <div id="home">
      <Header-app></Header-app>
      <h1>News</h1> 
        <div class="content">
          <News-container v-bind:posts="posts"></News-container>
          
          </div>
          <h1>Reviews</h1>
            <div class="content">
          <Reviews-container></Reviews-container>
           </div>
          <h1>Buy</h1>
            <div class="content">
          <Buy-container></Buy-container>
           </div>
      
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
<script src="./home.js"></script>