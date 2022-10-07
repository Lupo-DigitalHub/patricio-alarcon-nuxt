/* eslint-disable import/named */
/* eslint-disable camelcase */
import Vue from 'vue'

import {
  extend,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

import {
  size,
  email,
  required,
  numeric,
  alpha_spaces,
  alpha
} from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('required', {
  ...required,
  message: 'El campo {_field_} es requerido'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'El campo {_field_} requiere solo caracteres alfabéticos'
})

extend('alpha', {
  ...alpha,
  message: 'El campo {_field_} requiere solo caracteres alfabéticos'
})

extend('numeric', {
  ...numeric,
  message: 'El campo {_field_} requiere solo números'
})

extend('email', {
  ...email,
  message: 'El campo no contine el formato de correo esperado'
})

extend('max', {
  validate (value, { max }) {
    return value.length <= max
  },
  params: ['max'],
  message: 'El campo {_field_} necesita tener un máximo de {max} caracteres'
})

extend('check', {
  validate (value) {
    return value.length <= 0
  },
  message: 'El campo {_field_} es requerido'
})

extend('size', {
  ...size,
  message: 'El campo excede el tamaño permitido'
})
