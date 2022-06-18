const destinationAry = {
  Moon: {
    title: `Moon`,
    detail: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: `384,400 km`,
    time: `3 days`,
    image: `./assets/destination/image-moon.png`,
  },
  Mars: {
    title: `Mars`,
    detail: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: `225 mil. km`,
    time: `9 months`,
    image: `./assets/destination/image-mars.png`,
  },
  Europa: {
    title: `Europa`,
    detail: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: `628 mil. km`,
    time: `3 years`,
    image: `./assets/destination/image-europa.png`,
  },
  Titan: {
    title: `Titan`,
    detail: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: `1.6 bil. km`,
    time: `7 years`,
    image: `./assets/destination/image-titan.png`,
  },
}

const crewAry = {
  commander: {
    title: `Commander`,
    name: 'Douglas Hurley',
    description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
    image: `./assets/crew/image-douglas-hurley.png`,
  },
  engineer: {
    title: `Flight Engineer`,
    name: 'Anousheh Ansari',
    description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`,
    image: `./assets/crew/image-anousheh-ansari.png`,
  },
  pilot: {
    title: `Pilot`,
    name: 'Victor Glover',
    description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`,
    image: `./assets/crew/image-victor-glover.png`,
  },
  specialist: {
    title: `Mission Specialist`,
    name: 'Mark Shuttleworth',
    description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
    image: `./assets/crew/image-mark-shuttleworth.png`,
  },
}

const technologyAry = {
  capsule: {
    title: `Space capsule`,
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image_sm: `./assets/technology/image-space-capsule-landscape.jpg`,
    image_lg: `./assets/technology/image-space-capsule-portrait.jpg`,
  },
  vehicle: {
    title: `Launch vehicle`,
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image_sm: `./assets/technology/image-launch-vehicle-landscape.jpg`,
    image_lg: `./assets/technology/image-launch-vehicle-portrait.jpg`,
  },
  spaceport: {
    title: `Spaceport`,
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image_sm: `./assets/technology/image-spaceport-landscape.jpg`,
    image_lg: `./assets/technology/image-spaceport-portrait.jpg`,
  },
}

const destinationSwitch = (e) => {
  const target = e.textContent
  const title = document.getElementById('destination-title')
  const detail = document.getElementById('destination-detail')
  const distance = document.getElementById('destination-distance')
  const time = document.getElementById('destination-time')
  const image = document.getElementById('destination-image')

  title.innerHTML = destinationAry[target].title
  detail.innerHTML = destinationAry[target].detail
  distance.innerHTML = destinationAry[target].distance
  time.innerHTML = destinationAry[target].time
  image.src = destinationAry[target].image

  Object.keys(destinationAry).forEach((item) => {
    if (item === target) {
      document
        .getElementById(`destination-${item}`)
        .classList.add('destination-active')
      document
        .getElementById(`destination-${item}`)
        .classList.remove('destination-links')
    } else {
      document
        .getElementById(`destination-${item}`)
        .classList.add('destination-links')
      document
        .getElementById(`destination-${item}`)
        .classList.remove('destination-active')
    }
  })

  // console.log(image)
}

const crewSwitch = (target) => {
  const title = document.getElementById('crew-title')
  const name = document.getElementById('crew-name')
  const description = document.getElementById('crew-description')
  const image = document.getElementById('crew-image')

  title.innerHTML = crewAry[target].title
  name.innerHTML = crewAry[target].name
  description.innerHTML = crewAry[target].description
  image.src = crewAry[target].image

  Object.keys(crewAry).forEach((item) => {
    if (item === target) {
      document.getElementById(`crew-${item}`).classList.add('crew-active')
      document.getElementById(`crew-${item}`).classList.remove('crew-links')
    } else {
      document.getElementById(`crew-${item}`).classList.add('crew-links')
      document.getElementById(`crew-${item}`).classList.remove('crew-active')
    }
  })
}

const technologySwitch = (target) => {
  const title = document.getElementById('technology-title')
  const description = document.getElementById('technology-description')
  const image_sm = document.getElementById('technology-image-sm')
  const image_lg = document.getElementById('technology-image-lg')

  title.innerHTML = technologyAry[target].title
  description.innerHTML = technologyAry[target].description
  image_sm.src = technologyAry[target].image_sm
  image_lg.src = technologyAry[target].image_lg

  Object.keys(technologyAry).forEach((item) => {
    if (item === target) {
      document
        .getElementById(`technology-${item}`)
        .classList.add('technology-active')
      document
        .getElementById(`technology-${item}`)
        .classList.remove('technology-links')
    } else {
      document
        .getElementById(`technology-${item}`)
        .classList.add('technology-links')
      document
        .getElementById(`technology-${item}`)
        .classList.remove('technology-active')
    }
  })
}
