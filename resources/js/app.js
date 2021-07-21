import "./bootstrap";
import Board from "./Board";
import Vue from "vue";
import apolloProvider from "./apollo.config";
import router from "./router.config";

window.Vue = Vue;

Vue.component('Board', Board);

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
