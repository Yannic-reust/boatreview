<template>
  <div id="newsblock">
    <div class="content">
      
      <div v-for="(post, i) in posts.slice(0, 4)" :key="i" class="block">
         <router-link to="/News" > <h3>{{post.BoatName}}</h3></router-link>
         <div class="textblock">
           <h4>{{post.Heading}}</h4>
            <p>{{post.CatchText}}</p>
         </div>
        

        <img :src="post.ImageURL" :alt="post.Boatname" :title="post.Boatname" class="preview-image">
        
      </div>
     
    </div>

  </div>
</template>
<style src="./newsblock.scss" lang="scss" scoped></style>
<script src="./newsblock.js"></script>