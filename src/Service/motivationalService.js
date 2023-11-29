import { motivationalMessages as messages } from "../messagges/Motivational.js";
import cowsay from 'cowsay'
import lolcatjs from 'lolcatjs'

export const getMotivational = () => {
  const message = messages[Math.floor(Math.random() * (messages.length - 1))]
  const say = cowsay.say({ text: message, r: true })
  lolcatjs.options.seed = Math.round(Math.random() * 1000)
  lolcatjs.options.colors = true
  
  lolcatjs.fromString(say)
  // console.log(`\x1b[34m${message}\x1b[89m`)
}