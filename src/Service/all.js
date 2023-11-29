import cowsay from 'cowsay'
import lolcatjs from 'lolcatjs'

import { funnyMessages } from '../messagges/funny.js'
import { motivationalMessages } from '../messagges/Motivational.js'

const all = [...funnyMessages, ...motivationalMessages]

export const getAll = () => {
  const message = all[Math.floor(Math.random() * (all.length - 1))]
  const   say = cowsay.say({ text: message, r: true })
  
  lolcatjs.options.seed = Math.round(Math.random() * 1000)
  lolcatjs.options.colors = true
  lolcatjs.fromString(say)  
}
