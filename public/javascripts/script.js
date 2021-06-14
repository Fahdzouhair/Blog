function insertHTML(user){
	return `
    <tr>
		<td>${user.id}</td>
		<td>${user.username}</td>
		<td>${user.email}</td>
		<td>${user.role}</td>
		<td><button><i class="fa fa-edit" style="font-size:24px"></i></button></td>
		<td><button><i class="fa fa-ban" style="font-size:24px"></i></button></td>
	</tr>`
    
}


async function getAllUsers(){
	var reponse = await fetch(`http://localhost:3005/users/all`, { method:'GET', headers:{ 'Accept':'application/json', 'Content-Type': 'application/json' }});
	if (reponse.ok){
		var data = await reponse.json();
	 
		for (let i = 0 ; i <= data.length ; i++){
			document.getElementById('data').innerHTML += insertHTML(data[i]);
		}
	
	}
}
console.log(edit1);


//listeners 
edit.addEventListener('click',editUser);
//delete1.addEventListener('click',deleteUser);

function editUser(){
	console.log('test');
}


getAllUsers();


