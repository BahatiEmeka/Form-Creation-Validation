document.addEventListener('DOMContentLoaded', function() {
    // Define the async function to fetch user data
    async function fetchUserData() {
        // API URL to fetch data from
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the element where the API data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response data to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to contain the user list
            const userList = document.createElement('ul');

            // Loop through each user in the users array
            users.forEach(user => {
                // Create a <li> element for each user
                const listItem = document.createElement('li');

                // Set the text content of the <li> to the user's name
                listItem.textContent = user.name;

                // Append the <li> to the <ul>
                userList.appendChild(listItem);
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the loading message and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Fetch error: ', error);
        }
    }

    // Invoke the fetchUserData function after the DOM has fully loaded
    fetchUserData();
});
