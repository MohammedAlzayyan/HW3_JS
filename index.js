const list = [
  {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.78,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0002',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    id: '0003',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.26,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
]

let x = '',
  sum = 0,
  avg = 0

for (var i in list) {
  if (i == list.length - 1) {
    x += list[i].id
  } else {
    x += list[i].id + ', '
  }
}
console.log('ID: ' + x)

for (var i in list) {
  sum += list[i].ppu
}
console.log('Ppu SUM = ' + sum)

let count = 0
for (var i in list) {
  count++
}
avg = sum / count
console.log('Ppu AVG = ' + avg)

let t = []
for (var i in list) {
  for (var k in list[i].topping) {
    t.push(list[i].topping[k].type)
  }
}
let t1 = [...new Set(t)]
console.log('All topping type: ' + t1.join(','))

let b = []
for (var i in list) {
  for (var k in list[i].batters.batter) {
    b.push(list[i].batters.batter[k].type)
  }
}
let b1 = [...new Set(b)]
console.log('All batters type: ' + b1.join(','))

var all_id = []
for (var i in list) {
  all_id.push(list[i].id)
  for (var k in list[i].topping) {
    all_id.push(list[i].topping[k].id + ', ')
  }
  for (var j in list[i].batters.batter) {
    all_id.push(list[i].batters.batter[j].id)
  }
}
let all_id1 = [...new Set(all_id)]
console.log('All ID: ' + all_id1.join(','))
