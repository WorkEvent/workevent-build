<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <button class="login-button-click" @click="logout">Se déconnecter</button>
        </div>
        <h2 class="text-center">Votre profil</h2>
      </div>
    </div>






    <v-card class="w-50 mx-auto mt-4">
      <img src="../assets/profile-user.png" class="profile-icon pt-3">
      <h4 class="text-center mt-3"> {{ first }} {{ name }}</h4>
      <div class="container-fluid">
        <div class="row info">
          <h5>Informations personelles</h5>
          <div class="col-6">
            <p class="w-100 fw-bold mt-2 mb-0">Nom :</p>
            <p class="w-100">{{ name }}</p>
          </div>
          <div class="col-6">
            <p class="w-100 fw-bold mt-2 mb-0">Prénom</p>
            <p class="w-100">{{ first }}</p>
          </div>

         <div class="col-6">
           <p class="w-100 fw-bold mt-2 mb-0">Email :</p>
           <p class="w-100">{{ email }}</p>
         </div>
          <div class="col-6">
            <p class="w-100 fw-bold mt-2 mb-0">Entreprise :</p>
            <p class="w-100">{{ society }}</p>
          </div>
          <div class="col-12">
            <button class="vote-button-click" @click="govote">Voter pour le prochain évènement</button>

          </div>
        </div>
        <div class="row info">
          <h5>Mes informations de connexion</h5>
          <div class="col-4">
            <p class="w-100 fw-bold mt-2 mb-0">Mail :</p>
            <input type="text" class="w-100 input-area">
          </div>
          <div class="col-4">
            <p class="w-100 fw-bold mt-2 mb-0">Mot de passe</p>
            <input type="text" class="w-100 input-area">
          </div>
          <div class="col-4">
            <p class="w-100 fw-bold mt-2 mb-0">Confirmer Mot de passe </p>
            <input type="text" class="w-100 input-area">
          </div>


          <div class="col-12">
            <button class="vote-button-click" @click="govote">Modifier mon mot de passe </button>

          </div>
        </div>
      </div>



    </v-card>



  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Landing',
  data() {
    return {
      name: '',
      email: '',
      society : '',
      first : '',
      eventid : Number,
      eventname : [],
    }
  },
  created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('https://serverworkevent.herokuapp.com/user', { headers: { token: localStorage.getItem('token')}})
        .then(res => {
          this.name = res.data.user.name;
          this.email = res.data.user.email;
          this.society = res.data.user.society;
          this.first = res.data.user.first;

        })
    axios.get('http://localhost:5000/event')
      .then(res => {

        this.eventname = res.data
        console.log(this.eventname)

      })

  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },

    govote() {
      this.$router.push('/vote');
    }
  }
}
</script>

<style scoped>


body html {
  background-color: #F5F0E1;
}

.profile-icon {
  display: block;
  width: 15%;
  margin-left: auto;
  margin-right: auto;
}

.login-button-click {
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
  width: 20%;
  margin-left: 1%;
}

.input-area {
  font-family: Roboto,sans-serif;
  background-color: rgba(239,239,239,1);
  border-radius: 5px;
  border-color: rgba(133,133,133,1);

}

.vote-button-click {
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
  width: 39%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
