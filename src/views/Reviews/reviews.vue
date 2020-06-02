<template>
  <div id="reviews" >
       <Header-app v-bind:moblieView="moblieView"></Header-app>
      <div class="content">
      <h1>Reviews</h1>

      <div v-for="(post, i) in posts.slice(0, 5)" :key="i" class="block">
        <div class="textblock">
         <h3>{{post.BoatName}}</h3>
          <h4>{{post.Heading}}</h4>
          <p>{{post.Text}}</p>
        </div>
        
      
          <img :src="post.ImageURL"  class="preview-image">
        
        
      </div>
      </div>
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./reviews.scss" lang="scss" scoped></style>
<script src="./reviews.js"></script>