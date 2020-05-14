<template>
  <div id="buyblock" >
   
     <div class="content">
      
      <div v-for="(post, i) in posts" :key="i" class="block">
         <router-link to="/News" > <h3>{{post.BoatName}}</h3></router-link>
         <h4>{{post.Heading}}</h4>
        <p>{{post.CatchText}}</p>
        <p>{{post.Price}} CHF</p>
        <p>{{post.Contact}}</p>
      </div>
     
    </div>
  </div>
</template>
<style src="./buyblock.scss" lang="scss" scoped></style>
<script src="./buyblock.js"></script>