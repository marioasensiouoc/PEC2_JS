// Esta función recibe como parámetros la lista de valores, un objeto con los valores key, value y dos funciones en función de si hay success o error
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  // La función se ejecutará a los 2000 milisegundos
  setTimeout(() => {
    //se busca si el elemento key es = a value
    const element = list.find(element => element[key] === value);
    // en función de lo que encuentre ejecutará Error o success
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

// se definen los callbacks
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

// los datos que se analizan
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

// se muestra en la consola el mensaje 
console.log('findOne success');
// se ejecuta la función
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// se muestra en la consola el mensaje
console.log('findOne error');
// en caso de haber error se ejecuta la función
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
