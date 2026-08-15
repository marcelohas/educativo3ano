const fs = require('fs');

const mathStations = [
  {
    id: "mat-numeros",
    name: "Rota dos Números",
    topic: "Números e operações",
    challenges: []
  },
  {
    id: "mat-medidas",
    name: "Rota das Medidas",
    topic: "Medidas",
    challenges: []
  },
  {
    id: "mat-area",
    name: "Rota da Área",
    topic: "Ideia de área",
    challenges: []
  }
];

// Generate 10 math questions per station (30 total)
for (let i = 1; i <= 10; i++) {
  // Station 1: Numbers
  const a = Math.floor(Math.random() * 50) + 10;
  const b = Math.floor(Math.random() * 40) + 10;
  mathStations[0].challenges.push({
    id: `mat-1-${i}`,
    type: "choice",
    prompt: `Um treinador Pokémon tinha ${a} Pokébolas e comprou mais ${b}. Quantas Pokébolas ele tem agora?`,
    options: [`${a+b}`, `${a+b+1}`, `${a+b-2}`],
    answer: `${a+b}`,
    hint: "Some as unidades e depois as dezenas.",
    explanation: `${a} + ${b} = ${a+b}`,
    language: "pt-BR",
    approved: true
  });

  // Station 2: Measures
  const units = ["Metro", "Litro", "Quilograma"];
  const qs = [
    { p: "Qual unidade usamos para medir a altura de um Pokémon?", a: "Metro" },
    { p: "Qual unidade usamos para medir o peso de um Snorlax?", a: "Quilograma" },
    { p: "Qual unidade usamos para medir a água que um Squirtle bebe?", a: "Litro" }
  ];
  const q = qs[i % 3];
  mathStations[1].challenges.push({
    id: `mat-2-${i}`,
    type: "choice",
    prompt: q.p,
    options: [...units],
    answer: q.a,
    hint: "Pense no que estamos medindo (tamanho, peso ou líquido).",
    explanation: `${q.a} é a unidade correta.`,
    language: "pt-BR",
    approved: true
  });

  // Station 3: Area
  const w = Math.floor(Math.random() * 5) + 2;
  const h = Math.floor(Math.random() * 4) + 2;
  mathStations[2].challenges.push({
    id: `mat-3-${i}`,
    type: "choice",
    prompt: `Um campo de batalha tem ${w} quadrados de largura e ${h} de altura. Quantos quadrados formam a área do campo?`,
    options: [`${w*h}`, `${w+h}`, `${w*h+2}`],
    answer: `${w*h}`,
    hint: `Multiplique ${w} por ${h}.`,
    explanation: `${w} fileiras de ${h} quadrados formam uma área de ${w*h}.`,
    language: "pt-BR",
    approved: true
  });
}

const porStations = [
  { id: "por-digrafos", name: "Rota dos Dígrafos", topic: "Dígrafos", challenges: [] },
  { id: "por-substantivos", name: "Rota dos Substantivos", topic: "Número do substantivo", challenges: [] },
  { id: "por-textos", name: "Rota das Histórias", topic: "Receitas, contos e adjetivos", challenges: [] }
];

const digrafosWords = ["Cachorro", "Chuva", "Passarinho", "Carro", "Queijo", "Ninho", "Folha", "Mochila", "Gato", "Pato"];
const digrafosAnswers = ["Cachorro", "Chuva", "Passarinho", "Carro", "Queijo", "Ninho", "Folha", "Mochila"];

for (let i = 1; i <= 10; i++) {
  porStations[0].challenges.push({
    id: `por-1-${i}`,
    type: "choice",
    prompt: i % 2 === 0 ? "Qual palavra tem duas letras representando um som (dígrafo)?" : "Qual palavra usa RR ou SS?",
    options: i % 2 === 0 ? ["Cachorro", "Gato", "Pato"] : ["Passarinho", "Sapo", "Rato"],
    answer: i % 2 === 0 ? "Cachorro" : "Passarinho",
    hint: "Procure letras que juntas formam um único som, como CH, RR ou SS.",
    explanation: i % 2 === 0 ? "Em cachorro, CH e RR são dígrafos." : "Em passarinho, SS e NH são dígrafos.",
    language: "pt-BR",
    approved: true
  });

  porStations[1].challenges.push({
    id: `por-2-${i}`,
    type: "choice",
    prompt: `Qual é o plural da palavra "Poção"?`,
    options: ["Poções", "Poçãos", "Poçãoes"],
    answer: "Poções",
    hint: "Palavras terminadas em ão costumam formar o plural com ões.",
    explanation: "O plural de Poção é Poções.",
    language: "pt-BR",
    approved: true
  });

  porStations[2].challenges.push({
    id: `por-3-${i}`,
    type: "choice",
    prompt: "Qual palavra descreve uma qualidade do Pokémon na frase: 'O Pikachu é elétrico e rápido'?",
    options: ["Rápido", "O", "E"],
    answer: "Rápido",
    hint: "Adjetivos dão qualidades.",
    explanation: "Elétrico e rápido são adjetivos.",
    language: "pt-BR",
    approved: true
  });
}

const cieStations = [
  { id: "cie-solo", name: "Rota do Solo", topic: "Formação e tipos de solo", challenges: [] },
  { id: "cie-animais", name: "Rota dos Animais", topic: "Classificação e alimentação", challenges: [] },
  { id: "cie-ciclos", name: "Rota dos Ciclos", topic: "Grupos e ciclos de vida", challenges: [] }
];

for(let i=1; i<=10; i++) {
  cieStations[0].challenges.push({
    id: `cie-1-${i}`, type: "choice", prompt: "Qual solo retém mais água?", options: ["Argiloso", "Arenoso", "Rochoso"], answer: "Argiloso", hint: "Pense no solo que forma barro.", explanation: "O solo argiloso retém mais água.", language: "pt-BR", approved: true
  });
  cieStations[1].challenges.push({
    id: `cie-2-${i}`, type: "choice", prompt: "Como chamamos um Pokémon (ou animal) que come apenas plantas?", options: ["Herbívoro", "Carnívoro", "Onívoro"], answer: "Herbívoro", hint: "Herba significa planta.", explanation: "Herbívoros se alimentam de plantas.", language: "pt-BR", approved: true
  });
  cieStations[2].challenges.push({
    id: `cie-3-${i}`, type: "choice", prompt: "Qual a sequência correta do ciclo da vida de um Pokémon natural?", options: ["Nascer, crescer, reproduzir, morrer", "Crescer, nascer, morrer, reproduzir", "Morrer, nascer, crescer, reproduzir"], answer: "Nascer, crescer, reproduzir, morrer", hint: "Tudo começa pelo nascimento.", explanation: "Esta é a sequência natural do ciclo de vida.", language: "pt-BR", approved: true
  });
}

const hisStations = [
  { id: "his-culturas", name: "Rota das Culturas", topic: "Heranças culturais", challenges: [] },
  { id: "his-cidade", name: "Rota da Cidadania", topic: "Direito à cidade", challenges: [] },
  { id: "his-publicos", name: "Rota dos Espaços Públicos", topic: "Espaços da cidade", challenges: [] }
];
for(let i=1; i<=10; i++) {
  hisStations[0].challenges.push({ id: `his-1-${i}`, type: "choice", prompt: "As festas juninas são exemplos de:", options: ["Herança cultural", "Herança natural", "Herança espacial"], answer: "Herança cultural", hint: "Foi passado de geração em geração.", explanation: "Festas tradicionais são heranças culturais.", language: "pt-BR", approved: true });
  hisStations[1].challenges.push({ id: `his-2-${i}`, type: "choice", prompt: "O direito à cidade significa que:", options: ["Todos podem usar a cidade", "Só adultos usam a cidade", "Ninguém pode usar a cidade"], answer: "Todos podem usar a cidade", hint: "É um direito de todos.", explanation: "A cidade deve ser acessível para todas as pessoas.", language: "pt-BR", approved: true });
  hisStations[2].challenges.push({ id: `his-3-${i}`, type: "choice", prompt: "Um Centro Pokémon ou uma praça é um espaço:", options: ["Público", "Privado", "Sideral"], answer: "Público", hint: "Qualquer pessoa pode visitar.", explanation: "Espaços públicos são abertos para todos.", language: "pt-BR", approved: true });
}

const geoStations = [
  { id: "geo-campo", name: "Rota do Campo", topic: "Trabalho e produção no campo", challenges: [] },
  { id: "geo-paisagem", name: "Rota da Paisagem", topic: "Mudanças e permanências", challenges: [] },
  { id: "geo-cidade", name: "Rota Cidade Viva", topic: "A cidade também é feita disso", challenges: [] }
];
for(let i=1; i<=10; i++) {
  geoStations[0].challenges.push({ id: `geo-1-${i}`, type: "choice", prompt: "Onde os alimentos como frutas e verduras (ou Berries) são mais plantados?", options: ["No campo", "Na cidade", "No shopping"], answer: "No campo", hint: "Pense nas fazendas.", explanation: "A agricultura acontece principalmente no campo.", language: "pt-BR", approved: true });
  geoStations[1].challenges.push({ id: `geo-2-${i}`, type: "choice", prompt: "Quando construímos um Ginásio em um terreno vazio, ocorre uma:", options: ["Mudança na paisagem", "Permanência na paisagem", "Festa na cidade"], answer: "Mudança na paisagem", hint: "O visual do lugar foi alterado.", explanation: "Construções mudam a paisagem.", language: "pt-BR", approved: true });
  geoStations[2].challenges.push({ id: `geo-3-${i}`, type: "choice", prompt: "Uma cidade é formada por prédios, ruas e:", options: ["Pessoas e suas relações", "Apenas carros", "Apenas máquinas"], answer: "Pessoas e suas relações", hint: "Quem mora na cidade?", explanation: "As pessoas e o que elas fazem dão vida à cidade.", language: "pt-BR", approved: true });
}

const espStations = [
  { id: "esp-ropa", name: "Ruta de la Ropa", topic: "Prendas de vestir", challenges: [] },
  { id: "esp-describir", name: "Ruta de Describir", topic: "Descrever roupas", challenges: [] },
  { id: "esp-posesivos", name: "Ruta Posesiva", topic: "Pronomes possessivos", challenges: [] }
];
for(let i=1; i<=10; i++) {
  espStations[0].challenges.push({ id: `esp-1-${i}`, type: "choice", prompt: "¿Qué prenda usamos en las piernas?", options: ["Pantalón", "Camiseta", "Gorro"], answer: "Pantalón", hint: "Cobre as pernas.", explanation: "Pantalón significa calça.", language: "es-ES", approved: true });
  espStations[1].challenges.push({ id: `esp-2-${i}`, type: "choice", prompt: "¿Cómo se dice 'camisa vermelha' en español?", options: ["Camiseta roja", "Camiseta verde", "Camiseta azul"], answer: "Camiseta roja", hint: "Rojo é vermelho.", explanation: "Roja é a cor vermelha en español.", language: "es-ES", approved: true });
  espStations[2].challenges.push({ id: `esp-3-${i}`, type: "choice", prompt: "Completa: ___ zapatos (meus sapatos).", options: ["Mis", "Tus", "Sus"], answer: "Mis", hint: "Meus en español.", explanation: "Mis significa meus.", language: "es-ES", approved: true });
}

const ingStations = [
  { id: "ing-home", name: "Home Route", topic: "Physical characteristics and household machines", challenges: [] },
  { id: "ing-animals", name: "Animal Route", topic: "Wild and domestic animals", challenges: [] },
  { id: "ing-actions", name: "Action Route", topic: "Superlatives and animal actions", challenges: [] }
];
for(let i=1; i<=10; i++) {
  ingStations[0].challenges.push({ id: `ing-1-${i}`, type: "choice", prompt: "Which machine is used to wash clothes?", options: ["Washing machine", "Fridge", "Oven"], answer: "Washing machine", hint: "It washes.", explanation: "A washing machine washes clothes.", language: "en-US", approved: true });
  ingStations[1].challenges.push({ id: `ing-2-${i}`, type: "choice", prompt: "Which of these is a wild animal?", options: ["Lion", "Dog", "Cat"], answer: "Lion", hint: "It lives in the jungle or savanna.", explanation: "Lions are wild animals.", language: "en-US", approved: true });
  ingStations[2].challenges.push({ id: `ing-3-${i}`, type: "choice", prompt: "The cheetah is the _____ animal.", options: ["fastest", "slowest", "biggest"], answer: "fastest", hint: "It runs very fast.", explanation: "Fastest is the superlative for fast.", language: "en-US", approved: true });
}

const mooStations = [
  { id: "moo-culture", name: "Cultural Route", topic: "Tangible and intangible culture", challenges: [] },
  { id: "moo-home", name: "Homework Route", topic: "Household chores", challenges: [] },
  { id: "moo-community", name: "Community Route", topic: "Places, rules and types of allowance", challenges: [] }
];
for(let i=1; i<=10; i++) {
  mooStations[0].challenges.push({ id: `moo-1-${i}`, type: "choice", prompt: "A traditional dance is an example of:", options: ["Intangible culture", "Tangible culture", "Money"], answer: "Intangible culture", hint: "You can't touch a dance.", explanation: "Dances are intangible cultural goods.", language: "en-US", approved: true });
  mooStations[1].challenges.push({ id: `moo-2-${i}`, type: "choice", prompt: "Which is a good chore to help at home?", options: ["Sweeping the floor", "Breaking toys", "Making a mess"], answer: "Sweeping the floor", hint: "It keeps the house clean.", explanation: "Sweeping is a household chore.", language: "en-US", approved: true });
  mooStations[2].challenges.push({ id: `moo-3-${i}`, type: "choice", prompt: "Rules in a community help to maintain:", options: ["Good coexistence", "Chaos", "Pollution"], answer: "Good coexistence", hint: "It helps people live together.", explanation: "Rules are for good coexistence.", language: "en-US", approved: true });
}

const catalog = {
  version: "2.0.0",
  source: "Tema Pokémon 3o Ano",
  subjects: [
    { id: "matematica", name: "Matemática", color: "#e63946", icon: "🔴", stations: mathStations },
    { id: "portugues", name: "Português", color: "#ff8c00", icon: "📘", stations: porStations },
    { id: "ciencias", name: "Ciências", color: "#2a9d55", icon: "🍃", stations: cieStations },
    { id: "historia", name: "História", color: "#8b5e3c", icon: "🏛️", stations: hisStations },
    { id: "geografia", name: "Geografia", color: "#6a4c93", icon: "🗺️", stations: geoStations },
    { id: "espanhol", name: "Espanhol", color: "#f4b400", icon: "⭐", stations: espStations },
    { id: "ingles", name: "Inglês", color: "#1677bd", icon: "🎵", stations: ingStations },
    { id: "mooney", name: "Mooney", color: "#d45087", icon: "🤝", stations: mooStations }
  ]
};

fs.writeFileSync('C:/Users/Marcelo/Área de Trabalho/Game-Felipe/public/data/catalog.v1.json', JSON.stringify(catalog, null, 2), 'utf-8');
console.log('Catalog generated with ' + catalog.subjects.reduce((acc, sub) => acc + sub.stations.reduce((a, s) => a + s.challenges.length, 0), 0) + ' questions.');
