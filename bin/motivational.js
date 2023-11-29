#! /home/yuliamr/.nvm/versions/node/v18.12.1/bin/node

import { motivationalCommit } from "../src/Service/funnyService.js"
import cowsay from "cowsay"
import lolcatjs from "lolcatjs"

const say = cowsay.say({ text: motivationalCommit(), r: true })

lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true

lolcatjs.fromString(say)
