// Add your code here
// const formData = {
// 	dogName: "Byron",
// 	dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
// 	method: "POST",
// 	headers: {
// 	  "Content-Type": "application/json",
// 	  Accept: "application/json",
// 	},
// 	body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
// 	.then(function (response) {
// 	  return response.json();
// 	})
// 	.then(function (object) {
// 	  console.log(object);
// 	});

const submitData = (username,useremail)=>{
	return fetch('http://localhost:3000/users',{
		 method:'POST',
		 headers:{
			 'content-Type':'application/json',
			 Accept:'application/json'
		 },
		 body:JSON.stringify({
			 name:username,
			 email:useremail
		 })
	 })
	 .then((response)=>response.json())
	 .then((data)=>{
		 let body = document.querySelector('body')
		 body.innerHTML = data.id
	  console.log(data)
	 })
	 .catch(()=>{
		 document.querySelector('body').innerHTML = 'Unauthorized Access'
	 })
  }