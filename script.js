document.getElementById('users').addEventListener('click', fetchUsers);
async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;
        updateProfiles(users);
        updateTable(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
function updateProfiles(users) {
    const profilesContainer = document.getElementById('profiles-container');
    profilesContainer.innerHTML = '';
    users.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        const profileImg = document.createElement('img');
        profileImg.src = user.picture.large;
        profileCard.appendChild(profileImg);
        const profileName = document.createElement('h3');
        profileName.textContent = `${user.name.first} ${user.name.last}`;
        profileCard.appendChild(profileName);
        const profileEmail = document.createElement('p');
        profileEmail.textContent = user.email;
        profileCard.appendChild(profileEmail);
        profilesContainer.appendChild(profileCard);
    });
}
function updateTable(users) {
    const tableBody = document.getElementById('user-table').querySelector('tbody');
    tableBody.innerHTML = ''; 
    users.forEach(user => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = `${user.name.first} ${user.name.last}`;
        row.appendChild(nameCell);
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);
        tableBody.appendChild(row);
    });
}






