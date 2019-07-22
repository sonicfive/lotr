import style from "./main.css";
import Vue from "vue";


new Vue({

    el: '#app',

    data: {

        message: 'Yo!'

    }, 
    components: {

        'first': require('./main.vue').default

    }

})