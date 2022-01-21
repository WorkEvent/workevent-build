import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Landing from './components/Landing';
import Signup from './components/SignUp';
import Login from './components/Login';
import Vote from './components/Vote';
import 'bootstrap/dist/css/bootstrap.min.css'
import vuetify from './plugins/vuetify'
import NewEvent from "./components/NewEvent";
import Info from "./components/info";

Vue.use(VueRouter);

const routes = [
  { path: '/myprofile', component: Landing },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/vote', component: Vote },
  { path: '/', component: Info },

  { path : '/event', component: NewEvent}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  vuetify,

  render: h => {
    return h(App)
  }
});