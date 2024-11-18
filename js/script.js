const biciDaCorsa = [
    { nome: "Specialized S-Works Tarmac", peso: 6.9 },
    { nome: "Trek Madone SLR 9", peso: 7.2 },
    { nome: "Canyon Aeroad CFR", peso: 6.8 },
    { nome: "Pinarello Dogma F12", peso: 7.1 },
    { nome: "BMC Teammachine SLR01", peso: 6.2 }
  ];
  
  let biciLeggera = biciDaCorsa[0]

  for (let i = 0; i < biciDaCorsa.length; i++){
    const curBici = biciDaCorsa[i];
    if(curBici.peso < biciLeggera.peso){
        biciLeggera = curBici
    }
  }
  
  console.log(biciLeggera)


  const squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 }
  ];

  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  for(let i = 0; i < squadreDiCalcio.length; i++){
    const curSquadra = squadreDiCalcio[i];
    curSquadra.puntiFatti = getRandomNum(0, 10)
    curSquadra.falliSubiti = getRandomNum(0, 10)
  }

  console.log(squadreDiCalcio)


