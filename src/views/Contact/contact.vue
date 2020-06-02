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
            <div class="portrait">
               <img src="../../assets/portrait.jpg" width="100%">
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
          <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.1928357281154!2d8.512767851634901!3d47.38867027906871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a4760c28b8b%3A0x67bde41dd3ae306!2sPfingstweidstrasse%2051%2C%208005%20Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1591122351829!5m2!1sde!2sch" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
          </div>
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./contact.scss" lang="scss" scoped></style>
<script src="./contact.js"></script>