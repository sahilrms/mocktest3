// Get the data container
const dataContainer = document.getElementById('dataContainer');

// Display the skeleton loader
const showSkeletonLoader = () => {
  const skeletonHTML = `
    <div class="skeleton skeleton-small"></div>
    <div class="skeleton skeleton-medium"></div>
    <div class="skeleton skeleton-large"></div>
    <div class="skeleton skeleton-small"></div>
    <div class="skeleton skeleton-medium"></div>
    <div class="skeleton skeleton-large"></div>
  `;
  dataContainer.innerHTML = skeletonHTML;
};

// Fetch data from the JSONPlaceholder API
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Remove the skeleton loader
    dataContainer.innerHTML = '';

    // Display the fetched data
    data.forEach(item => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <hr>
      `;
      dataContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

// Show the skeleton loader initially
showSkeletonLoader();

// Fetch and display the data
fetchData();
