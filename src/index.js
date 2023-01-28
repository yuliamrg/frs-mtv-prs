const funnyMessages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
]
const motivationalMessages = [
  "Tu ezfuerzo y dedicación te pondrán al lado de los más Grandes",
  "there is not tommorrow",
  "Cuando tienes claro tu objetivo y sabes para donde vas, no te dejas provocar por nadie.",
  "Perdona a tus padres: 100%, \n Perdone a los otros: 100& y \n perdónate a ti mismo: 100%.",
  "El ejercicio cambiará tu mente, tu actitud, tu humor y tu estabilidad emocional",
  "No pierde el que se cae, \n pierde el que no se levanta",
  "Aprende a perder hasta ganar,",
  "El hombre que sabe lo que quiere hacer tiene mucha suerte, \n porque ese hombre no trabajará nunca en su vida",
  "Repite después de mi: \n nunca permitiré que nadie me haga sentir que \n no soy suficiente",
]

const motivationalCommit = () => {
  const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
  // console.log(`\x1b[34m${message}\x1b[89m`)
  return message
}

export default {
  motivationalCommit
}
