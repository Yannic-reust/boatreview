<template>
  <div id="contact">
   <Header-app v-bind:moblieView="moblieView"></Header-app>
    <h1>Contact</h1>
      <div class="content">
        <div>
            <p><strong>Kontakt-Adresse</strong></p>
            <p>Boat-Review<br/>Yannic Reust<br/>Blumenweg, 10<br/>3604 Thun<br/>Schweiz</p>
            <p>E-Mail:<br/><a href="mailto::yannic.reust@bluewin.ch">yannic.reust@bluewin.ch</a></p>
            <p>&nbsp;</p>
        </div>
        <div>
          <from>
            <label for="Vorname">Vorname:</label>
            <input type="text" id="Vorname">
            <br>
            <label for="Nachname">Nachname:</label>
            <input type="text" id="Nachname">
            <br>
            <label for="E-Mail">E-Mail:</label>
            <input type="text" id="E-Mail">
            <br>
            <label for="Betreff">Betreff:</label>
            <input type="text" id="Betreff">
            <br>
            <label for="Nachricht">Nachricht:</label>
            <textarea type="text" id="Nachricht"></textarea>
          </from>

        </div>


      </div>

     
      <Footer-app></Footer-app>
  </div>
</template>
<style src="./contact.scss" lang="scss" scoped></style>
<script src="./contact.js"></script>