var person = {
  name : 'BlahBlah',
  country : 'LaLaLand',
  age : 100,
  treehouseStudent : true,
  skills : ['Riding unicorns', 'Picking flowers', 'Snooz-buzzing']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hi, my name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Rainbow';
message += '<p>But I wish my name was ' + person.name + '.</p>';
person.age += 11;
message += '<p>My age is now ' + person.age + '.</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '.</p>';
print(message);

/*
for (var key in person) {
  console.log(key, ': ', person[key]);
}

*/
