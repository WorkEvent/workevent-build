<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12 wallpaper" ></div>
    </div>
    <div class="row">
      <div class="col-12 first-section">
        <div class="buttons col-12">
          <button class="col-4 button-click w-25" @click="clickLogin">Connexion</button>
          <button class="col-4 button-click w-25 mt-2" @click="clickSignUp">Inscription</button>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-9 info-section">
        <div class="col-6 info-text">
          <p class="h3 info-t text-center pt-2">Qui sommes-nous ? </p>
          <p>Nous sommes un projet de développement de bien-être en entreprise souhaitant transformer le relationnel en créant des liens sociaux en dehors du cadre de travail</p>
        </div>
      </div>
      <div class="col-3 right-login">
        <img src="../assets/WORK EVENT_BLANC.png" alt="logo" class="logo-img w-50">
      </div>
    </div>
    <div class="row">
      <div class="col-12 third-section">
        <div class="col-6 block-text">
          <h2>Notre éthique</h2>
          <p>Développer l'intégration de demain avec une plateforme innovante</p>
        </div>
        <div class="col-6 block-text">
          <h2>Notre Objectif</h2>
          <p>Créer un lien social entre les salariés de l'entreprise et participer au bien-être des collaborateurs</p>
        </div>

    </div>
    <div class="row">
      <div class="col-12" style="padding: 0;">
        <div class="col-12 footer-section">
          <div class="col-12 footer-links">
            <ul class="footer-text">
              <li><a class="footer-links" href="">Mentions Légales</a></li>
              <li><a class="footer-links" href="">Partenariat</a></li>
              <li><a class="footer-links" href="">CGU</a></li>
              <li><a class="footer-links" href="">Contact</a></li>
            </ul>
          </div>
          <p style="text-align: center">Workevent © 2022</p>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "info",
  methods : {

    clickLogin() {
      this.$router.push('/login');

    },
    clickSignUp() {
      this.$router.push('/signup');

    },



  }
}
</script>

<style scoped>
template {
  margin: 0;
}
.wallpaper{
  height: 70vh;
  background-image: url(../assets/PH_hero1.png);
}
.navbar {
  background-color: #1e1e1e;
  height: 5vh;
}
.first-section {
  height: 50vh;

}
.first-text {
  height: 25vh;
  margin-top: 5vh;
  font-family: Roboto,sans-serif;
}
.info-title {
  margin: auto;
  font-family: Roboto,sans-serif;
}
.third-section {
  height: 50vh;
}
.buttons {
  height: 12.5vh;
  margin-top: 5%;
  display: block;
}
.button-click {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
}
.block-text {
  padding: 5%;
  display: inline-block;
  font-family: Roboto,sans-serif;
}
.info-section {
  height: 50vh;
  margin: auto;
  background-color: #F5F0E1;
}
.info-text {
  margin: 5%;
  margin-left: auto;
  margin-right: auto;
}
.footer-section {
  height: 25vh;
  margin: 0;
  background-color: #1e1e1e;
  color: rgba(239,239,239,1);
  font-size: 1.5vh;
}
.info-text {
  font-family: Roboto,sans-serif;
}
.footer-text {
  font-size: 2vh;
  margin-top: 5vh;
  text-align: center;
  list-style: none;
}
.footer-text li {
  display: inline;
  margin: 2vw;
}
.footer-links {
  font-family: Roboto,sans-serif;
  color: rgba(239,239,239,1);
  text-decoration: none;
}
.right-login {
  background-color: #F5F0E1;
  height:50vh;
}
.logo-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
}
</style>