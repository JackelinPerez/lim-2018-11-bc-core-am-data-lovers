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
const outputFilterData4 = [
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
const outputFilterData5 = [
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
];
const outputFilterData6 = [
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
const outputFilterData7 = [
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
  }
];
const outputFilterData8 = [
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
  }
];
const outputFilterData9 = [
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
  }
];
const outputFilterData10 = [
  [{num: '001', name: 'Bulbasaur', img: 'http://www.serebii.net/pokemongo/pokemon/001.png'},
    {num: '002', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'}]
];
const outputFilterData11 = [
  [{num: '002', name: 'Ivysaur', img: 'http://www.serebii.net/pokemongo/pokemon/002.png'},
    {num: '003', name: 'Venusaur', img: 'http://www.serebii.net/pokemongo/pokemon/003.png'}]
];
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

const computeStats1 = 0;
const computeStats2 = {CPProm: 32,
  img: 'http://www.serebii.net/pokemongo/pokemon/002.png',
  name: 'Ivysaur',
  num: '002'};
// const computeStats3 = [];
// const computeStats4 = [];
// const computeStats5 = [];
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
    it('input = 005 deberia retornar el de num= 005', () => {
      expect(data.filterData(POKEMON, '005', 0)).toEqual(outputFilterData0);
    });
    it('input = cater deberia retornar los que contengan en nombre a cater', () => {
      expect(data.filterData(POKEMON, 'cater', 1)).toEqual(outputFilterData1);
    });
    it('input = agua deberia retornar los de typo agua', () => {
      expect(data.filterData(POKEMON, 'agua', 2)).toEqual(outputFilterData2);
    });
    it('input = 0.71 deberia retornar los que midan 0.71m', () => {
      expect(data.filterData(POKEMON, '0.71', 3)).toEqual(outputFilterData3);
    });
    it('input = 6.9 deberia retornar los que pesen 6.9Kg', () => {
      expect(data.filterData(POKEMON, '6.9', 4)).toEqual(outputFilterData4);
    });

    it('input = Charmander Candy deberia retornar los que tengan ese tipo de Candys', () => {
      expect(data.filterData(POKEMON, 'Charmander Candy', 5)).toEqual(outputFilterData5);
    });
    it('input = 2 km deberia retornar los que tengan ese valor de huevos', () => {
      expect(data.filterData(POKEMON, '2 km', 6)).toEqual(outputFilterData6);
    });
    it('input = 4.2 deberia retornar los que tengan ese avg_spawns', () => {
      expect(data.filterData(POKEMON, 4.2, 7)).toEqual(outputFilterData7);
    });
    it('input = 07:00 deberia retornar los que aparescan a esa hora aprox', () => {
      expect(data.filterData(POKEMON, '07:00', 8)).toEqual(outputFilterData8);
    });


    it('input = hielo is deberia retornar los pokemones debiles contra Hielo', () => {
      expect(data.filterData(POKEMON, 'hielo', 9)).toEqual(outputFilterData9);
    });
    it('input = 003 is deberia retornar las evoluciones ANTERIORES', () => {
      expect(data.filterData(POKEMON, '003', 10)).toEqual(outputFilterData10);
    });
    it('input = 001 is deberia retornar las evoluciones SIGUIENTES', () => {
      expect(data.filterData(POKEMON, '001', 11)).toEqual(outputFilterData11);
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

  describe('data.computeStats', () => {
    it('is a function', () => {
      expect(typeof data.computeStats).toBe('function');
    });
    it('Rango por frecuencia caso=1', () => {
      expect(data.computeStats(POKEMON, 4, '152dsd', 20)).toEqual(computeStats1);
    });
    it('is a function', () => {
      expect(data.computeStats(POKEMON, 4, '001', 20)).toEqual(computeStats2);
    });
  });
});
