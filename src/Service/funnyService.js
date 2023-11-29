import { funnyMessages as messages } from '../messagges/funny.js'
import cowsay from 'cowsay'
import lolcatjs from 'lolcatjs'


export const getFunny = () => {
  const message = messages[Math.floor(Math.random() * (messages.length - 1))]
  const say = cowsay.say({ text: message, r: true })
  lolcatjs.options.seed = Math.round(Math.random() * 1000)
  lolcatjs.options.colors = true

  lolcatjs.fromString(say)
}
