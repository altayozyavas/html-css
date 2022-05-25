const usersHtml = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    users.forEach(usr => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usr.id}`)
        .then(response => response.json())
        .then(data => {
            const post = data[0].body;
            usersHtml.innerHTML += `${usr.id}: ${usr.name} / ${usr.email}<br/>Post: ${post}<br/><br/>`;
        })
    });
})
.catch(err => console.log(err));
