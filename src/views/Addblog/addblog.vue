<template>
  <div id="addblog">
      <Header-app></Header-app>
        <div class="form">
            <form>
                <p>Boat Name</p> 
                <input type="text" v-model="posts.BoatName">
                <p>Heading</p> 
                <input type="text" v-model="posts.Heading">
                <p>Catchtext</p> 
                <textarea name="catchtext" id="catchtext" cols="30" rows="3" v-model="posts.CatchText"></textarea>
                <p>Text</p> 
                <textarea name="maintext" id="maintext" cols="30" rows="10" v-model="posts.Text"></textarea>
                <p>Price in CHF</p> 
                <input type="number" v-model="posts.Price">
                <div class="imgupload">
                    <input type="file" @change="previewImage" accept="image/*">
                    <p>Progress:{{uploadValue.toFixed()+"%"}}</p>
                    <progress :value="uploadValue"></progress>
                </div>
                <button @click.prevent="onUpload">Add Blog</button>
            </form>
         </div>
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./addblog.scss" lang="scss" scoped></style>
<script src="./addblog.js"></script> 