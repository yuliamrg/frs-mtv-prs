#! /home/yuliamr/.nvm/versions/node/v18.12.1/bin node

import random from "../src/index.js"
import cowsay from "cowsay"
import lolcatjs from "lolcatjs"

const say = cowsay.say({ text: random.motivationalCommit(), r: true })

lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true

lolcatjs.fromString(say)