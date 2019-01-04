const POKEMON = [
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fuego'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 6,
    'num': '006',
    'name': 'Charizard',
    'img': 'http://www.serebii.net/pokemongo/pokemon/006.png',
    'type': [
      'Fuego',
      'Volador'
    ],
    'height': '1.70 m',
    'weight': '90.5 kg',
    'candy': 'Charmander Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0031,
    'avg_spawns': 0.31,
    'spawn_time': '13:34',
    'multipliers': null,
    'weaknesses': [
      'Agua',
      'Electrico',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }, {
      'num': '005',
      'name': 'Charmeleon'
    }]
  },
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 8,
    'num': '008',
    'name': 'Wartortle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/008.png',
    'type': [
      'Agua'
    ],
    'height': '0.99 m',
    'weight': '22.5 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.034,
    'avg_spawns': 3.4,
    'spawn_time': '07:02',
    'multipliers': [1.4],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }],
    'next_evolution': [{
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 9,
    'num': '009',
    'name': 'Blastoise',
    'img': 'http://www.serebii.net/pokemongo/pokemon/009.png',
    'type': [
      'Agua'
    ],
    'height': '1.60 m',
    'weight': '85.5 kg',
    'candy': 'Squirtle Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0067,
    'avg_spawns': 0.67,
    'spawn_time': '00:06',
    'multipliers': null,
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }, {
      'num': '008',
      'name': 'Wartortle'
    }]
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'img': 'http://www.serebii.net/pokemongo/pokemon/010.png',
    'type': [
      'Insecto'
    ],
    'height': '0.30 m',
    'weight': '2.9 kg',
    'candy': 'Caterpie Candy',
    'candy_count': 12,
    'egg': '2 km',
    'spawn_chance': 3.032,
    'avg_spawns': 303.2,
    'spawn_time': '16:35',
    'multipliers': [1.05],
    'weaknesses': [
      'Fuego',
      'Volador',
      'Roca'
    ],
    'next_evolution': [{
      'num': '011',
      'name': 'Metapod'
    }, {
      'num': '012',
      'name': 'Butterfree'
    }]
  }
];
const outputFilterNum = [
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  }
];
const outputFilterData0 = [
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  }
];
const outputFilterData1 = [
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'img': 'http://www.serebii.net/pokemongo/pokemon/010.png',
    'type': [
      'Insecto'
    ],
    'height': '0.30 m',
    'weight': '2.9 kg',
    'candy': 'Caterpie Candy',
    'candy_count': 12,
    'egg': '2 km',
    'spawn_chance': 3.032,
    'avg_spawns': 303.2,
    'spawn_time': '16:35',
    'multipliers': [1.05],
    'weaknesses': [
      'Fuego',
      'Volador',
      'Roca'
    ],
    'next_evolution': [{
      'num': '011',
      'name': 'Metapod'
    }, {
      'num': '012',
      'name': 'Butterfree'
    }]
  }
];
const outputFilterData2 = [
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 8,
    'num': '008',
    'name': 'Wartortle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/008.png',
    'type': [
      'Agua'
    ],
    'height': '0.99 m',
    'weight': '22.5 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.034,
    'avg_spawns': 3.4,
    'spawn_time': '07:02',
    'multipliers': [1.4],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }],
    'next_evolution': [{
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 9,
    'num': '009',
    'name': 'Blastoise',
    'img': 'http://www.serebii.net/pokemongo/pokemon/009.png',
    'type': [
      'Agua'
    ],
    'height': '1.60 m',
    'weight': '85.5 kg',
    'candy': 'Squirtle Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0067,
    'avg_spawns': 0.67,
    'spawn_time': '00:06',
    'multipliers': null,
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }, {
      'num': '008',
      'name': 'Wartortle'
    }]
  }
];
const outputFilterData3 = [
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  }
];
const outputFilterData4 = [
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  }
];
// const outputFilterData5 = [];
// const outputFilterData6 = [];
// const outputFilterData7 = [];
// const outputFilterData8 = [];
// const outputFilterData9 = [];
// const outputFilterData10 = [];
// const outputFilterData11 = [];
// const outputFilterData12 = [];
const outputSortData1 = POKEMON;
const outputSortData2 = [
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'img': 'http://www.serebii.net/pokemongo/pokemon/010.png',
    'type': [
      'Insecto'
    ],
    'height': '0.30 m',
    'weight': '2.9 kg',
    'candy': 'Caterpie Candy',
    'candy_count': 12,
    'egg': '2 km',
    'spawn_chance': 3.032,
    'avg_spawns': 303.2,
    'spawn_time': '16:35',
    'multipliers': [1.05],
    'weaknesses': [
      'Fuego',
      'Volador',
      'Roca'
    ],
    'next_evolution': [{
      'num': '011',
      'name': 'Metapod'
    }, {
      'num': '012',
      'name': 'Butterfree'
    }]
  },
  {
    'id': 9,
    'num': '009',
    'name': 'Blastoise',
    'img': 'http://www.serebii.net/pokemongo/pokemon/009.png',
    'type': [
      'Agua'
    ],
    'height': '1.60 m',
    'weight': '85.5 kg',
    'candy': 'Squirtle Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0067,
    'avg_spawns': 0.67,
    'spawn_time': '00:06',
    'multipliers': null,
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }, {
      'num': '008',
      'name': 'Wartortle'
    }]
  },
  {
    'id': 8,
    'num': '008',
    'name': 'Wartortle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/008.png',
    'type': [
      'Agua'
    ],
    'height': '0.99 m',
    'weight': '22.5 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.034,
    'avg_spawns': 3.4,
    'spawn_time': '07:02',
    'multipliers': [1.4],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }],
    'next_evolution': [{
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 6,
    'num': '006',
    'name': 'Charizard',
    'img': 'http://www.serebii.net/pokemongo/pokemon/006.png',
    'type': [
      'Fuego',
      'Volador'
    ],
    'height': '1.70 m',
    'weight': '90.5 kg',
    'candy': 'Charmander Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0031,
    'avg_spawns': 0.31,
    'spawn_time': '13:34',
    'multipliers': null,
    'weaknesses': [
      'Agua',
      'Electrico',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }, {
      'num': '005',
      'name': 'Charmeleon'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fuego'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  }
];
const outputSortData3 = [
  {
    'id': 9,
    'num': '009',
    'name': 'Blastoise',
    'img': 'http://www.serebii.net/pokemongo/pokemon/009.png',
    'type': [
      'Agua'
    ],
    'height': '1.60 m',
    'weight': '85.5 kg',
    'candy': 'Squirtle Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0067,
    'avg_spawns': 0.67,
    'spawn_time': '00:06',
    'multipliers': null,
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }, {
      'num': '008',
      'name': 'Wartortle'
    }]
  },
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'img': 'http://www.serebii.net/pokemongo/pokemon/010.png',
    'type': [
      'Insecto'
    ],
    'height': '0.30 m',
    'weight': '2.9 kg',
    'candy': 'Caterpie Candy',
    'candy_count': 12,
    'egg': '2 km',
    'spawn_chance': 3.032,
    'avg_spawns': 303.2,
    'spawn_time': '16:35',
    'multipliers': [1.05],
    'weaknesses': [
      'Fuego',
      'Volador',
      'Roca'
    ],
    'next_evolution': [{
      'num': '011',
      'name': 'Metapod'
    }, {
      'num': '012',
      'name': 'Butterfree'
    }]
  },
  {
    'id': 6,
    'num': '006',
    'name': 'Charizard',
    'img': 'http://www.serebii.net/pokemongo/pokemon/006.png',
    'type': [
      'Fuego',
      'Volador'
    ],
    'height': '1.70 m',
    'weight': '90.5 kg',
    'candy': 'Charmander Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0031,
    'avg_spawns': 0.31,
    'spawn_time': '13:34',
    'multipliers': null,
    'weaknesses': [
      'Agua',
      'Electrico',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }, {
      'num': '005',
      'name': 'Charmeleon'
    }]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fuego'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 8,
    'num': '008',
    'name': 'Wartortle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/008.png',
    'type': [
      'Agua'
    ],
    'height': '0.99 m',
    'weight': '22.5 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.034,
    'avg_spawns': 3.4,
    'spawn_time': '07:02',
    'multipliers': [1.4],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }],
    'next_evolution': [{
      'num': '009',
      'name': 'Blastoise'
    }]
  },
];
const outputSortData4 = [
  {
    'id': 8,
    'num': '008',
    'name': 'Wartortle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/008.png',
    'type': [
      'Agua'
    ],
    'height': '0.99 m',
    'weight': '22.5 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.034,
    'avg_spawns': 3.4,
    'spawn_time': '07:02',
    'multipliers': [1.4],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }],
    'next_evolution': [{
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '2.01 m',
    'weight': '100.0 kg',
    'candy': 'Bulbasaur Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.017,
    'avg_spawns': 1.7,
    'spawn_time': '11:30',
    'multipliers': null,
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },
  {
    'id': 7,
    'num': '007',
    'name': 'Squirtle',
    'img': 'http://www.serebii.net/pokemongo/pokemon/007.png',
    'type': [
      'Agua'
    ],
    'height': '0.51 m',
    'weight': '9.0 kg',
    'candy': 'Squirtle Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.58,
    'avg_spawns': 58,
    'spawn_time': '04:25',
    'multipliers': [2.1],
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'next_evolution': [{
      'num': '008',
      'name': 'Wartortle'
    }, {
      'num': '009',
      'name': 'Blastoise'
    }]
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.99 m',
    'weight': '13.0 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.042,
    'avg_spawns': 4.2,
    'spawn_time': '07:00',
    'multipliers': [
      1.2,
      1.6
    ],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }],
    'next_evolution': [{
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 5,
    'num': '005',
    'name': 'Charmeleon',
    'img': 'http://www.serebii.net/pokemongo/pokemon/005.png',
    'type': [
      'Fuego'
    ],
    'height': '1.09 m',
    'weight': '19.0 kg',
    'candy': 'Charmander Candy',
    'candy_count': 100,
    'egg': 'Not in Eggs',
    'spawn_chance': 0.012,
    'avg_spawns': 1.2,
    'spawn_time': '19:00',
    'multipliers': [1.79],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }],
    'next_evolution': [{
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'type': [
      'Fuego'
    ],
    'height': '0.61 m',
    'weight': '8.5 kg',
    'candy': 'Charmander Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.253,
    'avg_spawns': 25.3,
    'spawn_time': '08:45',
    'multipliers': [1.65],
    'weaknesses': [
      'Agua',
      'Tierra',
      'Roca'
    ],
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
  {
    'id': 6,
    'num': '006',
    'name': 'Charizard',
    'img': 'http://www.serebii.net/pokemongo/pokemon/006.png',
    'type': [
      'Fuego',
      'Volador'
    ],
    'height': '1.70 m',
    'weight': '90.5 kg',
    'candy': 'Charmander Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0031,
    'avg_spawns': 0.31,
    'spawn_time': '13:34',
    'multipliers': null,
    'weaknesses': [
      'Agua',
      'Electrico',
      'Roca'
    ],
    'prev_evolution': [{
      'num': '004',
      'name': 'Charmander'
    }, {
      'num': '005',
      'name': 'Charmeleon'
    }]
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'img': 'http://www.serebii.net/pokemongo/pokemon/010.png',
    'type': [
      'Insecto'
    ],
    'height': '0.30 m',
    'weight': '2.9 kg',
    'candy': 'Caterpie Candy',
    'candy_count': 12,
    'egg': '2 km',
    'spawn_chance': 3.032,
    'avg_spawns': 303.2,
    'spawn_time': '16:35',
    'multipliers': [1.05],
    'weaknesses': [
      'Fuego',
      'Volador',
      'Roca'
    ],
    'next_evolution': [{
      'num': '011',
      'name': 'Metapod'
    }, {
      'num': '012',
      'name': 'Butterfree'
    }]
  },
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'type': [
      'Hierba',
      'Veneno'
    ],
    'height': '0.71 m',
    'weight': '6.9 kg',
    'candy': 'Bulbasaur Candy',
    'candy_count': 25,
    'egg': '2 km',
    'spawn_chance': 0.69,
    'avg_spawns': 69,
    'spawn_time': '20:00',
    'multipliers': [1.58],
    'weaknesses': [
      'Fuego',
      'Hielo',
      'Volador',
      'Psiquico'
    ],
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },
  {
    'id': 9,
    'num': '009',
    'name': 'Blastoise',
    'img': 'http://www.serebii.net/pokemongo/pokemon/009.png',
    'type': [
      'Agua'
    ],
    'height': '1.60 m',
    'weight': '85.5 kg',
    'candy': 'Squirtle Candy',
    'egg': 'Not in Eggs',
    'spawn_chance': 0.0067,
    'avg_spawns': 0.67,
    'spawn_time': '00:06',
    'multipliers': null,
    'weaknesses': [
      'Electrico',
      'Hierba'
    ],
    'prev_evolution': [{
      'num': '007',
      'name': 'Squirtle'
    }, {
      'num': '008',
      'name': 'Wartortle'
    }]
  }
];

require('../src/data.js');

const auxPokemon = POKEMON;
describe('Data POKEMON', () => {
  describe('window.data', () => {
    it('is a object', () => {
      expect(typeof data).toBe('object');
    });
  });
  describe('POKEMON.pokemon', () => {
    it('is a object', () => {
      expect(typeof auxPokemon).toBe('object');
    });
  });
  describe('data.filterNum', () => {
    it('is a function', () => {
      expect(typeof data.filterNum).toBe('function');
    });
    it('num = null is all', () => {
      expect(data.filterNum(POKEMON, '')).toEqual(POKEMON);
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterNum(POKEMON, '001')).toEqual(outputFilterNum);
    });
  });
  describe('data.filterData', () => {
    it('is a function', () => {
      expect(typeof data.filterData).toBe('function');
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterData(POKEMON, '005', 0)).toEqual(outputFilterData0);
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterData(POKEMON, 'cater', 1)).toEqual(outputFilterData1);
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterData(POKEMON, 'agua', 2)).toEqual(outputFilterData2);
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterData(POKEMON, '5', 3)).toEqual(outputFilterData3);
    });
    it('input = 001 is Bulbasaur', () => {
      expect(data.filterData(POKEMON, '1', 4)).toEqual(outputFilterData4);
    });
  });
  describe('data.sortData', () => {
    it('is a function', () => {
      expect(typeof data.sortData).toBe('function');
    });
    it('order por ID Ascendente', () => {
      expect(data.sortData(POKEMON, 0, 0)).toEqual(outputSortData1);
    });
    it('order por ID Descendente', () => {
      expect(data.sortData(POKEMON, 0, 1)).toEqual(outputSortData2);
    });
    it('order por A-Z', () => {
      expect(data.sortData(POKEMON, 1, 0)).toEqual(outputSortData3);
    });
    it('order por Z-A', () => {
      expect(data.sortData(POKEMON, 1, 1)).toEqual(outputSortData4);
    });
  });
});
