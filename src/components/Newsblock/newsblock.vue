<template>
  <div id="newsblock">
    <div class="content">
      
      <div v-for="(post, i) in posts.slice(0, 4)" :key="i" class="block">
         <router-link to="/News" > <h3>{{post.BoatName}}</h3></router-link>
         <h4>{{post.Heading}}</h4>
        <p>{{post.CatchText}}</p>
        



         <img
                  src="https://firebasestorage.googleapis.com/v0/b/boatreview-84b38.appspot.com/o/IMG_0857.JPG?alt=media&token=31f3296e-aa04-4bf4-81d4-c5dc7af33f7b"
                  height="130px"
                >
      </div>
     
    </div>

  </div>
</template>
<style src="./newsblock.scss" lang="scss" scoped></style>
<script src="./newsblock.js"></script>