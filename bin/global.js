#! /home/yuliamr/.nvm/versions/node/v18.12.1/bin/node

import { motivationalCommit } from "../src/index.js"
import { funnyCommit } from "../src/index.js"
import cowsay from "cowsay"
import lolcatjs from "lolcatjs"

let option = process.argv[1]
let commit

if (option == '-m') {
  commit = motivationalCommit()
} else if (option == '-f') {
  commit = funnyCommit()
} else {
  commit = motivationalCommit()
}

const say = cowsay.say({ text: commit, r: true })
lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true

lolcatjs.fromString(say)

