<template>
  <div id="buy" class="homecontainer">
      <Header-app v-bind:moblieView="moblieView"></Header-app>
     <div class="content">
      <h1>Buy</h1>

      <div v-for="(post, i) in posts.slice(10, 15)" :key="i" class="block">
        <div class="preview-image">
          <img :src="post.ImageURL" class="img">
        </div>
          
        <div class="textblock">
         <h3>{{post.BoatName}}</h3>
          <h4>{{post.Heading}}</h4>
          <p>{{post.Text}}</p>
          <p>{{post.Price}} CHF</p>
          <p>{{post.Contact}}</p>
        </div>
        
      
        
        
        
      </div>
      </div>
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./buy.scss" lang="scss" scoped></style>
<script src="./buy.js"></script>