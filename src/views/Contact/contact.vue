<template>
  <div id="contact">
   <Header-app v-bind:moblieView="moblieView"></Header-app>
    <h1>Contact</h1>
      <div class="content">

         <div class="wrapper">
          <div class="maintext">
            <p><strong>Kontakt-Adresse</strong></p>
            <p>Boat-Review<br/>Yannic Reust<br/>Blumenweg, 10<br/>3604 Thun<br/>Schweiz</p>
            <p>E-Mail:<br/><a href="mailto::yannic.reust@bluewin.ch">yannic.reust@bluewin.ch</a></p>
         </div>
        </div>

        <div class="form">
          <form>
            <form>
                <div class="input1">    
                <label for="Vorname"><p>Vor- / Nachname*</p></label>
                <input type="text" min="1" id="Name" name="Name" required><br>
                </div>
 
                <div class="input3">
                <label for="Email"><p>E-Mail*</p></label>
                <input type="email" min="1" id="Email" name="Email" required><br>
                </div>
                
                <div class="input4">
                <label for="Betreff"><p>Betreff</p></label>
                <input type="text" min="1" id="Betreff" name="Betreff"><br>
                </div>
                 
                <div class="input5">
                <label for="Nachricht"><p>Nachricht*</p></label>
                <textarea id="Nachricht" min="1" name="Nachricht" rows="1" cols="50" style="height:100px" required></textarea> <br>
                </div>
                <input id="submitbtn" name="submit" type="submit" value="Senden" />
                </form>
           
            
          </form>

        </div>

       




      </div>

     
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./contact.scss" lang="scss" scoped></style>
<script src="./contact.js"></script>