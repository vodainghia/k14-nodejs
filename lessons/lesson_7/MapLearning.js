// === CRUD ===

// Create | Update (if not existing then create, if existing then update)
let emergencyList = new Map();
emergencyList.set('113', 'Police Dept');
emergencyList.set('114', 'Fire Dept');
emergencyList.set('115', 'Hospital');
emergencyList.set('116', 'Others');

// Read a single value
console.log(emergencyList.get('113'));
console.log(`Is 113 key existing?: ${emergencyList.has('113')}`); // '113': true | 113: false

console.log("\n=== Loop the map's entries via keys ===");
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log("\n=== Loop the map's entries via values ===");
for (const value of emergencyList.values()) {
    console.log(`value: ${value}`);
}

// Array.from(Iterable Iterator) -> return
console.log("\n=== Iterator | keys ===");
console.log(Array.from(emergencyList.keys())[0]);

// Delete
emergencyList.delete('117');

console.log(`Map size: ${emergencyList.size}`);
console.log(emergencyList);

