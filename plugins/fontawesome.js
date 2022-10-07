import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPhone,
  faPlus,
  faMinus,
  faClock,
  faAngleRight,
  faAngleLeft,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faFacebook,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

// import {
//   faEnvelope
// } from '@fortawesome/free-regular-svg-icons'
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faPlus)
library.add(faMinus)
library.add(faClock)
library.add(faPhone)
library.add(faTwitter)
library.add(faEnvelope)
library.add(faAngleLeft)
library.add(faLinkedinIn)
library.add(faAngleRight)
library.add(faLocationDot)
library.add(faFacebook)
library.add(faInstagram)
library.add(faInstagramSquare)
// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
