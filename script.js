// Fetch the JSON data from a file
fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        const educationContainer = document.getElementById('educationContainer');

        jsonData.Education.forEach(edu => {
            const schoolSection = document.createElement('section');
            schoolSection.classList.add('education-section');

            const schoolName = document.createElement('h2');
            schoolName.textContent = `School: ${edu.School}`;
            schoolSection.appendChild(schoolName);

            const location = document.createElement('p');
            location.textContent = `Location: ${edu.Location}`;
            schoolSection.appendChild(location);

            edu.Degree.forEach(degree => {
                const degreeDetails = document.createElement('div');
                degreeDetails.classList.add('degree-details');

                const spam = document.createElement('p');
                spam.textContent = `Degree: ${degree.D.Spam}`;
                degreeDetails.appendChild(spam);

                const advisor = document.createElement('p');
                advisor.textContent = `Advisor: ${degree.D.Advisor}`;
                degreeDetails.appendChild(advisor);

                schoolSection.appendChild(degreeDetails);
            });

            educationContainer.appendChild(schoolSection);
        });
    })
    .catch(error => console.error("Error loading JSON data:", error));