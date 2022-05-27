const usersHtml = document.getElementById("users");
const usersHtml2 = document.getElementById("users2");

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

//Second solution with async functions, it takes longer but keeps the order because I used for of loop. For each is not suitable for async and waits
async function getPostById(id) {
    try {
        const allPosts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json();
        return await allPosts[0].body;
    } catch (error) {
        console.log("Failed to retrieve post", error)
    }
}

async function getUserInfo() {
    try {
        const users = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
        for (const usr of users) {
            const post = await getPostById(usr.id);
            usersHtml2.innerHTML += `${usr.id}: ${usr.name} / ${usr.email}<br/>Post: ${post}<br/><br/>`;
        }
    } catch (error) {
        console.log("Failed to retrieve post", error)
    }
}

getUserInfo();