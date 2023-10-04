import React, { useState, useEffect } from 'react'

const Randomizer = () => {

  const facts = [
    { text: "gummy-eating champ 🍬" },
    { text: "your friendly neighborhood Spider-Man" },
    { text: "90's hip hop aficionado 🎤" },
    { text: "am on a mission to learn how to make pastry 🥐" },
    { text: "have a hobby of reading movie spoilers before watching the movie" },
    { text: "probably traveling somewhere 🧳" },
    { text: "a former zookeeper 🦒" },
    { text: "sparkling water enthusiast" },
    { text: "collector of browser tabs" },
    { text: "knower of random facts 🤔" },
    { text: "still haven't completed The Legend of Zelda: Breath of the Wild" },
    { text: "currently based in Tampa, FL" },
    { text: "a morning person 🌅" },
    { text: "went to school for healthcare finance and statistics" },
    { text: "am ride-or-die for Taco Bell 🌮" },
    { text: "can fall asleep on an airplane or the backseat of a car easily like a baby" },
    { text: "I like to draw letters" },
    { text: "a Floridian with too many denim shirts " },
    { text: "am fumbling through learning new things" },
    { text: "inbox-zero person 📥" },
    { text: "Slack group hoarder"},
    { text: "am trying to start a garage band"},
    { text: "think Xzibit is an extremely underrated hip hop artist"},
    { text: "constant tinkerer"},
    { text: "would probably die in cold weather"},
    { text: "a one man ska band on nights and weekends"},
    { text: "enjoy meditating to cooking videos on youtube 👩‍🍳"},
    { text: "regularly bite off more than I can chew - literally and figuratively"},
    { text: "like this portfolio, a constant work in progress"},
    { text: "have strong opinions on movies 🎬"},
    { text: "constantly curious"},
    { text: "in a constant state of learning something new"},
    { text: "learning how to make a great cup of coffee ☕️"},
    { text: "have never seen the movie Shrek"},
    { text: "am, unsurprisingly, very clumsy"},
    { text: "opening 100's of browser tabs across 3 browser windows (and forgetting about at least 1/2 of them) is part of my design process"},
    { text: "fan of sweet treats 🍭"},
    { text: "have one too many unfinished guitar pedal projects"},
    { text: "an avid consumer of: news, plane tickets, sneakers, and HBO"},
    { text: "former grade-school pianist 🎹"},
    { text: "think one of the most difficult UX problems is explaining my job to other people"},
    { text: "have ruined so many school photos. Still ruining group photos"},
    { text: "aspiring polyglot 🙋‍♂️"},
    { text: "not a fan of drinking milk 🥛"},
    { text: "lurker of other design portfolios 🤫"},
    { text: "curious about how digital products can cut through noise 🧐"},
    { text: "sometimes I like to design with code 👨‍💻"},
    { text: "I regularly fall when riding my bicycle 🚴‍♂️"},
    { text: "learning how to race cars 🏎"},
    { text: "can fall asleep anywhere 😴"},
    { text: "introvert, but aspiring ambivert"},
    { text: "a fan of giant robots 🤖"},
    { text: "I start most mornings watching videos of snow leopard cubs 🐯"},
    { text: "am not good at golf 🏌️‍♂️ - like at all"},
    { text: "I have a desk cactus named Pete 🌵"},
    { text: "I believe mint chip is the best ice cream 🍦"},
    { text: "a bit of a macroeconomics nerd"},
    { text: "usually kind of restless"},
    { text: "I like flight layovers"},
    { text: "dreamed of being an oceanographer in the 3rd grade"},
    { text: "I'm trying to take my time and live in the present"},
    { text: "I'm trying my best at keeping my house plants alive"},
    { text: "I like to make things"},
    { text: "I've been practicing eating super spicy foods since birth"}
  ]

  const randomFact = () => {
    let random = facts[Math.floor(Math.random() * facts.length)]
    return random
  }

  const [isRandom, setIsRandom] = useState('')

  useEffect(() => {
    setIsRandom(randomFact())
  }, [])

  return(
    <span
      role="button"
      className="link-shadow select-none"
      onClick={() => setIsRandom(randomFact())}
      title={`Cycle randomly through all ${facts.length} fun facts!`}
    >
      {isRandom.text}
    </span>
  )
}

export default Randomizer