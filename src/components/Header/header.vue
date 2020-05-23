<template>
  <div id="header">


    <div class="home"  v-if="!showNav">
        <router-link to="/" class="link"><p>Boat Review</p></router-link> 
    </div>

    <div class="nav" v-if="!moblieView">
        <router-link to="/News" class="link"><p>News</p></router-link>
        <router-link to="/Reviews" class="link"><p>Reviews</p></router-link>
        <router-link to="/Buy" class="link"><p>Buy</p></router-link>
        <router-link to="/Addblog" class="link"><p>Add Blog</p></router-link>
    </div>

        <div id="navigation-icon" v-if="moblieView">
          <i class="fas fa-bars" @click="opennav()" v-if="!showNav"></i>
        
        </div>

        <div class="moblienav-container"  v-if="showNav"  > 

            <div id="navigation-icon" v-if="showNav">
              <i class="fas fa-times" @click="closenav()" v-if="showNav"></i>
            </div>
            <div class="home2" v-scroll-lock="showNav">  
                <router-link to="/" class="link"><p>Boat Review</p></router-link> 
            </div>
            <div class="mobilenav">
                <router-link to="/News" class="link"><p>News</p></router-link>
                <router-link to="/Reviews" class="link"><p>Reviews</p></router-link>
                <router-link to="/Buy" class="link"><p>Buy</p></router-link>
                <router-link to="/Addblog" class="link"><p>Add Blog</p></router-link>
            </div>

   </div>

  </div>
</template>
<style src="./header.scss" lang="scss" scoped></style>
<script src="./header.js"></script>