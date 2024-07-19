
export default function decorate(block) {
  // Add a class to the block
  block.classList.add('hero');

  // Create a new container div for the content
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('hero-content');

  // Move the existing content into the new container
  while (block.firstChild) {
    contentDiv.appendChild(block.firstChild);
  }

  // Create a new div for the yellow bar
  const yellowBar = document.createElement('div');
  yellowBar.classList.add('hero-yellow-bar');

  // Append the new divs to the block
  block.appendChild(yellowBar);
  block.appendChild(contentDiv);

  // Style the buttons
  const buttons = contentDiv.querySelectorAll('a');
  buttons.forEach((button) => {
    button.classList.add('hero-button');
  });
}
