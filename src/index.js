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
  'Sé discreto simpre con tu número, \n de cuenta, tu vida amorosa y tu siguiente movimiento',
  'Mira siempre a los ojos de la gente cuando hable',
  'Conocerás al hombre por el \n tamaño de las cosas que le preocupan',
  'Quita mérito a todas las victorias \n que no te hayan costado un ezfuerzo',
  'No te asocies (ni salgas) con \n alguien que no lo desee tanto como tú',
  'No le intentes caer bien a la gente, \n intenta que ellos te caigan bien a ti,\n el resto vendrá',
  'Cuida tu físico, no puedes \n decirle a tu mujer que la quieres y \n ponerle un cerdo en la cama todas las noches',
  'El fracaso es natural, sobrepornete sobrenatural',
  'No escuches para responder, escucha para entender',
  'Es más facil no empezar con un vicio que dejarlo, y más barato',
  'Si eres la persona más inteligente de la sala, \n estás en la sala equivocada',
  'Todo el mundo encuentra tremendamente \n atractiva la seguridad en uno mismo.\n Sí, las mujeres tembién',
  'Haz lo que quiras, pero hazlo muy bien',
  'No hay menor somnífero que una conciencia tranquila',
  'Promete poco y pero cumple siempre tus promesas',
  'Haz cada día algo que te haga sentir incómodo',
  'No te tomes nunca nada como personal',
  '"Aprende a bailar, a las mujeres nos encanta eso \n -att: una mujer"',
  'Deja de buscar a quienes no te están buscando',
  'Deja de mendigar',
  'Deja de decir más de lo necesario',
  'Cuando las personas te falten el \n respeto enfréntalas de inmediato',
  'Nunca estreches la mano estando sentado',
  'No comas la comida de otras personas \n más de lo que ellos comen la tuya',
  'Reduce la frecuencia con la que \n visitas a algunas personas,\n especialmente si no es recíproco',
  'Siempre preséntate de la mejora manera',
  'no te quedes en una relación \n donde no te sientas respetado',
  'No vayas a donde no te han invitado',
  'Trata a las personas exactamente como se merecen',
  'Quédate en silencio, no todo necesita ser dicho',
  'Si encuentras a alguien más inteligente que tú, \n trabaja con ellos, no compitas.\n La competencia es una debilidad',
  'La familia que creas es más importante \n que la familia que vienes',
  'Tu trabajo actual no se preocupa por ti, \n sólo te pagan lo suficiente \n para matar tus sueños',
  'Es mejor tener 1 amigo que:\n -Esté feliz por ti\n -Apoye tus éxitos\n -Anime tus sueños\n Que un montón de conocidos que son:\n -Perezosos\n -Egoístas\n -Celosos de tu éxito',
  'Serás 10 veces más feliz si perdonas \n a tus padres y dejas de culparlos',
  'Tu círculo íntimo debería estar más enfocado\n en el dinero, el éxito y \n comenzar una familia',
  '',
]

export const motivationalCommit = () => {
  const message =
    motivationalMessages[
    Math.floor(Math.random() * (motivationalMessages.length - 1))
    ]
  // console.log(`\x1b[34m${message}\x1b[89m`)
  return message
}

export const funnyCommit = () => {
  const message =
    funnyMessages[
    Math.floor(Math.random() * (funnyMessages.length - 1))
    ]
  return message
}
