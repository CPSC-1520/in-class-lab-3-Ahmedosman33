// Enter your code below.

document.addEventListener('DOMContentLoaded', () => {
    const resourcesDiv = document.querySelector('.javascript-resources');
    const showButton = document.getElementById('show-resources');
 
    // Step 1: Show resources on button click
    showButton.addEventListener('click', () => {
        resourcesDiv.classList.remove('d-none');
    });
    // Step 2 & 3: Add/remove bold on hover
   resourcesDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'A') {
        event.target.classList.add('fw-bold');
    }
});

resourcesDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'A') {
        event.target.classList.remove('fw-bold');
    }
});

// Step 4: Italicize clicked item
resourcesDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.target.classList.add('fst-italic');
    }
});
});