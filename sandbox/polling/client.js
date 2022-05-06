
const grabNotifications = () => {
    return fetch("http://localhost:3000/notifications")
        .then(response => response.json())
        .then(data => console.log(data));
}

setInterval(grabNotifications, 1000);
