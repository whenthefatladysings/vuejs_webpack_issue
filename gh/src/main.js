import './ie10-viewport-bug-workaround'
import '../node_modules/material-design-lite/.tmp/material-design-lite.css'
import '../node_modules/material-design-lite/material.js'
import '../node_modules/mapbox-gl/js/mapbox-gl'
import '../node_modules/turf/turf'   

// import '../sass/main.scss'
// import '../css/custom.css'


import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
