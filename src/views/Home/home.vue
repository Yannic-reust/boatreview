<template>
  <div id="home">

        

      <Header-app v-bind:moblieView="moblieView"></Header-app>
      
      <div id="main">

          <h1>News</h1> 
        <div class="content">
          <News-container v-bind:posts="posts"></News-container>
          
          </div>
          <h1>Reviews</h1>
            <div class="content">
          <Reviews-container v-bind:posts="posts"></Reviews-container>
           </div>
          <h1>Buy</h1>
            <div class="content">
          <Buy-container v-bind:posts="posts"></Buy-container>
           </div>
           
      </div>
    
      
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
<script src="./home.js"></script>