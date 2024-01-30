// Object Literal - Use to construct DATA object
let teo = {
    name: 'Teo',
    'my age': 18,
};

// === CRUD ===
// Read: dot notation, [] syntax
console.log(teo.name);
console.log(teo['my age']);

// Update
teo.name = 'Tun';
teo['my name'] = 22;
teo.gender = 'M';

console.log(teo);

// Delete
delete teo.gender;
console.log(teo);

