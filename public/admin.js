
// Your Code Here
let response = await fetch('http://localhost:3001/updateBook')
    method: ,"PATCH",
    headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify({
  "id": 3,
  "title": "Legends of Arathrae",  
});

let updateBook = await response.json();
console.log("Legends of Arathrae")