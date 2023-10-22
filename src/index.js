const funnyMessages = [
  'This is where it all begins...',
  'Commit committed',
  'Version control is awful',
  'COMMIT ALL THE FILES!',
  'The same thing we do every night, Pinky - try to take over the world!',
  'Lock S-foils in attack position',
  'This commit is a lie',
  "I'll explain when you're older!",
  'Here be Dragons',
  'Reinventing the wheel. Again.',
  'This is not the commit message you are looking for',
  'Batman! (this commit has no parents)',
]
const motivationalMessages = [
  'Tu ezfuerzo y dedicación te pondrán al lado de los más Grandes',
  'there is not tommorrow',
  'Cuando tienes claro tu objetivo y sabes para donde vas, no te dejas provocar por nadie.',
  'Perdona a tus padres: 100%, \n Perdone a los otros: 100& y \n perdónate a ti mismo: 100%.',
  'El ejercicio cambiará tu mente, tu actitud, tu humor y tu estabilidad emocional',
  'No pierde el que se cae, \n pierde el que no se levanta',
  'Aprende a perder hasta ganar,',
  'El hombre que sabe lo que quiere hacer tiene mucha suerte, \n porque ese hombre no trabajará nunca en su vida',
  'Repite después de mi: \n nunca permitiré que nadie me haga sentir que \n no soy suficiente',
  'Esta bien celebrar el éxito, \n pero es más importante prestar \n atención a las lecciones del fracaso',
  'Busca lo que te satisfaga y hazlo bien. \n Esto te colmará en muchas dimensones',
  'No romantizar la vida \n (CARPE DIEM, la felicidad se la inventó \n el merchandising de las religiones)',
  'Hay que vivir desengañado \n (asegurate de no estar rodeado de imbéciles que drenen tu energía)',
  'No te quejes, pareces indefenso',
  'Un mar tranquilo nunca hizo experto \n a un marinero',
  'La flor no sueña con la abeja, \n florece y la abeja viene',
  'Tener miedo significa que estas \n a punto de hacer algo valiente',
]

export const motivationalCommit = () => {
  const message =
    motivationalMessages[
    Math.floor(Math.random() * (motivationalMessages.length - 1))
    ]
  // console.log(`\x1b[34m${message}\x1b[89m`)
  return message
}

// export default {
  // motivationalCommit,
// }
