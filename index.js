// Write your code below:
function handleFormSubmit(event) {
    //make a get request to the api to fetch user details
    axios.get('https://crudcrud.com/api/9249b687966644688ab2be96aa2c5be8/users')
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)''
    });
  }
  function deleteUser(){
    //delete the user from the server
    axios.delete('https://crudcrud.com/api/9249b687966644688ab2be96aa2c5be8/users/${user.id}')
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  function post(){
    //make a post request to save the new user details
    axios.post('https://crudcrud.com/api/9249b687966644688ab2be96aa2c5be8/users',{
      name: 'userName',
      email: userEmail,
      displayUser(users);
    })
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  // Do not touch the code below
  module.exports = handleFormSubmit;
  