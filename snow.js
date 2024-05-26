document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const toggleButton = document.getElementById('toggleSnowflakes');

    // Start with snowflakes hidden
    snowflakesContainer.classList.add('hidden');
    toggleButton.textContent = 'On'; // Button text initially set to 'On'
    let snowflakesVisible = false; // Snowflakes are initially hidden

    toggleButton.addEventListener('click', function() {
      if (snowflakesVisible) {
        snowflakesContainer.classList.add('hidden');
        snowflakesVisible = false;
        toggleButton.textContent = 'On';
      } else {
        snowflakesContainer.classList.remove('hidden');
        snowflakesVisible = true;
        toggleButton.textContent = 'Off';
      }
    });
  });
