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