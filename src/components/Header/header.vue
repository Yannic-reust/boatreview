<template>
  <div id="header" >
    <div class="home">
   <router-link to="/" class="link"><p>Boat Review</p></router-link> 
    </div>
    <div class="nav">
 <router-link to="/News" class="link"><p>News</p></router-link>
 <router-link to="/Reviews" class="link"><p>Reviews</p></router-link>
 <router-link to="/Buy" class="link"><p>Buy</p></router-link>
 <router-link to="/Addblog" class="link"><p>Add Blog</p></router-link>
   <search></search>
    </div>

  </div>
</template>
<style src="./header.scss" lang="scss" scoped></style>
<script src="./header.js"></script>