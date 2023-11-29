#! /home/yuliamr/.nvm/versions/node/v18.12.1/bin/node

import { getMotivational } from '../src/Service/motivationalService.js'
import { getFunny } from '../src/Service/funnyService.js'
import { getAll } from '../src/Service/all.js'

let option = process.argv[2]
let phrase

if (option == '-m') {
  phrase = getMotivational()
} else if (option == '-f') {
  phrase = getFunny()
} else if (option) {
  console.log("Elige una opcion correcta: \n Puede ser -f para mensajes graciosos \n Puede ser -m para mensajes motivacionales \n Si hay opción sale cualquier tipo de frase")
} else if (!option) {
  phrase = getAll()
}