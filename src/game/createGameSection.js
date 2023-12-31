import plant1 from '../images/pngegg (1).png';
import plant2 from '../images/pngegg (2).png';
import plant3 from '../images/pngegg (3).png';
import plant4 from '../images/pngegg (4).png';

export function createGameSection({ element, className }) {
  const gameSection = document.createElement(element);
  gameSection.setAttribute("class", className);
  gameSection.setAttribute('id', 'game');

  const outerWrapper = document.createElement('div');
  outerWrapper.classList.add('aquarium__outer-wrapper');

  // Create plant elements
  for (let i = 1; i <= 4; i++) {
    const plant = createPlantElement(i);
    outerWrapper.appendChild(plant);
  }

  // Create bubble elements
  for (let i = 1; i <= 15; i++) {
    const bubble = createBubbleElement(i);
    outerWrapper.appendChild(bubble);
  }

  // Create fish element
  const fish = createFishElement();

  // Create game start element
  const gameStart = document.createElement('div');
  gameStart.classList.add('aquarium__game-start');

  // Create game start title element
  const title = document.createElement('h2');
  title.classList.add('aquarium__game-start-title');
  title.textContent = 'Aquasqape Game';

  // Create game start subtitle element
  const subTitle = document.createElement('h3');
  subTitle.classList.add('aquarium__game-start-subtitle');
  subTitle.textContent = 'Select a color to customize your fish!';

  // Create game color picker
  const colorPicker = document.createElement('div');
  colorPicker.classList.add('aquarium__game-color-picker');

  // Define color options
  const colorOptions = ['orange', 'amber', 'pink', 'lime', 'aquamarine', 'indigo'];

  // Create color labels and append to color picker
  colorOptions.forEach(color => {
    const colorButton = document.createElement('div');
    colorButton.classList.add('aquarium__game-color-button');
    colorButton.classList.add(`aquarium__game-color-button--${color}`);

    // Add click event listener to color button
    colorButton.addEventListener('click', (e) => {
      // Ripple effect
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      colorButton.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 1000);

      // Get the background color of the clicked button
      const bgColor = getComputedStyle(colorButton).getPropertyValue('background-color');

      // Define elementsToColor array
      const elementsToColor = [
        'aquarium__fish-top-fin',
        'aquarium__fish-tail-fin',
        'aquarium__fish-body-2',
        'aquarium__fish-tail-1',
        'aquarium__fish-tail-2',
        'aquarium__fish-tail-3',
        'aquarium__fish-tail-4'
      ];

      // Apply the background color to specified elements
      elementsToColor.forEach(elementClass => {
        const element = document.querySelector(`.${elementClass}`);
        if (element) {
          element.style.backgroundColor = bgColor;
        }
      });
    });

    colorPicker.appendChild(colorButton);
  });

  // Create game start button
  const startButton = document.createElement('button');
  startButton.classList.add('aquarium__game-start-button');
  startButton.textContent = 'Start To Play';

  // Append title, subtitle color picker and start button to game start element
  gameStart.appendChild(title);
  gameStart.appendChild(subTitle);
  gameStart.appendChild(colorPicker);
  gameStart.appendChild(startButton);

  // Append game start element to outer wrapper
  outerWrapper.appendChild(gameStart);

  outerWrapper.appendChild(fish);

  gameSection.appendChild(outerWrapper);

  // Helper functions
  function createPlantElement(index) {
    const plant = document.createElement('div');
    plant.classList.add('aquarium__plant', `aquarium__plant--${index}`);

    const plantImg = document.createElement('img');

    const plantImages = [plant1, plant2, plant3, plant4];
    plantImg.src = plantImages[index - 1]; // Adjust index to match array indexing
    plantImg.alt = `plant ${index}`;
    plant.appendChild(plantImg);

    return plant;
  }

  function createBubbleElement(index) {
    const bubble = document.createElement('div');
    bubble.classList.add('aquarium__bubble', `aquarium__bubble--${index}`);

    const bubbleDot = document.createElement('div');
    bubbleDot.classList.add('aquarium__bubble-dot');
    bubble.appendChild(bubbleDot);

    return bubble;
  }

  function createFishElement() {
    const fishBody = document.createElement('div');
    fishBody.classList.add('aquarium__fish-body');

    const fishWhole = document.createElement('div');
    fishWhole.classList.add('aquarium__fish-whole');

    const fishTopFin = document.createElement('div');
    fishTopFin.classList.add('aquarium__fish-top-fin');

    const fishTailFin = document.createElement('div');
    fishTailFin.classList.add('aquarium__fish-tail-fin');

    const fishBody2 = document.createElement('div');
    fishBody2.classList.add('aquarium__fish-body-2');

    const fishEye = document.createElement('div');
    fishEye.classList.add('aquarium__fish-eye');

    const fishTail1 = document.createElement('div');
    fishTail1.classList.add('aquarium__fish-tail-1');

    const fishTail2 = document.createElement('div');
    fishTail2.classList.add('aquarium__fish-tail-2');

    const fishTail3 = document.createElement('div');
    fishTail3.classList.add('aquarium__fish-tail-3');

    const fishTail4 = document.createElement('div');
    fishTail4.classList.add('aquarium__fish-tail-4');

    // Append elements to build the fish structure
    fishWhole.appendChild(fishTopFin);
    fishWhole.appendChild(fishTailFin);
    fishBody2.appendChild(fishEye);
    fishBody2.appendChild(fishTail1);
    fishBody2.appendChild(fishTail2);
    fishBody2.appendChild(fishTail3);
    fishBody2.appendChild(fishTail4);
    fishWhole.appendChild(fishBody2);
    fishBody.appendChild(fishWhole);

    // Create energy level wrapper
    const energyLevelWrapper = document.createElement('div');
    energyLevelWrapper.classList.add('aquarium__energy-level-wrapper');

    // Add text "Fish energy level" on top of energy level wrapper
    const energyLevelText = document.createElement('div');
    energyLevelText.textContent = 'Fish energy level';
    energyLevelText.classList.add('aquarium__energy-level-text');
    energyLevelWrapper.appendChild(energyLevelText);

    // Create energy level element
    const energyLevel = document.createElement('div');
    energyLevel.classList.add('aquarium__energy-level');
    energyLevel.style.width = '100%'; // Initial energy level is 100%

    // Create energy percent text
    const energyPercentText = document.createElement('div');
    energyPercentText.textContent = '100%';
    energyPercentText.classList.add('aquarium__energy-percent-text');
    energyLevelWrapper.appendChild(energyPercentText);

    // Create finish button
    const finishButton = document.createElement('div');
    finishButton.textContent = 'Finish The Game';
    finishButton.classList.add('aquarium__finish-button');

    // Energy level variable
    let fishEnergyLevel = 100;

    // Add click event listener to finish button
    finishButton.addEventListener('click', () => {
      // Reset inline styles for aquarium__fish-body
      const fishBodyElements = document.querySelectorAll('.aquarium__fish-body');
      fishBodyElements.forEach(element => {
        element.removeAttribute('style');
      });

      // Set aquarium__energy-percent-text text to '100%'
      energyPercentText.textContent = '100%';

      // Set aquarium__energy-level width to 100%
      energyLevel.style.width = '100%';

      fishEnergyLevel = 100;

      // Remove inline style for aquarium__game-start
      gameStart.removeAttribute('style');
    });

    // Append energy level element to wrapper
    energyLevelWrapper.appendChild(energyLevel);
    energyLevelWrapper.appendChild(finishButton);

    // Append energy level wrapper to outer wrapper
    outerWrapper.appendChild(energyLevelWrapper);

    // Add modal structure
    const feedFishModal = document.createElement('div');
    feedFishModal.classList.add('aquarium__feed-fish-modal');

    const modalButton = document.createElement('button');
    modalButton.classList.add('aquarium__feed-fish-button');
    modalButton.textContent = 'Feed the fish';

    feedFishModal.appendChild(modalButton);

    outerWrapper.appendChild(feedFishModal);

    // Add click event listener to the fish element
    fishBody.addEventListener('click', function (event) {
      const fishOffsetLeft = this.offsetLeft;
      const aquariumOffsetLeft = outerWrapper.offsetLeft;
      const aquariumWidth = outerWrapper.clientWidth;
      const fishWidth = this.clientWidth;

      const minLeftCoordinate = aquariumOffsetLeft;
      const maxLeftCoordinate = aquariumWidth - fishWidth;
      const leftCoordinate = Math.floor(Math.random() * (maxLeftCoordinate - minLeftCoordinate + 1)) + minLeftCoordinate / 2;

      if (fishOffsetLeft > leftCoordinate) {
        // If the fish is moving to the left
        this.style.transform = 'rotateY(180deg)';
      } else {
        // If the fish is moving to the right
        this.style.transform = 'rotateY(0)';
      }

      this.style.left = leftCoordinate + 'px';
      this.style.top = Math.floor(Math.random() * (outerWrapper.clientHeight - this.clientHeight)) + 'px';

      // Reduce energy level on each click
      fishEnergyLevel -= 25;
      if (fishEnergyLevel < 0) {
        fishEnergyLevel = 0;
      }

      // Update energy level display
      energyLevel.style.width = `${fishEnergyLevel}%`;
      energyPercentText.textContent = `${fishEnergyLevel}%`;

      // Check if energy level is zero and take appropriate action
      if (fishEnergyLevel === 0) {
        // Display the feed fish modal
        feedFishModal.style.opacity = '1';
        feedFishModal.style.visibility = 'visible';
        feedFishModal.style.zIndex = '40';
      }
    });

    // Add click event listener to the modal button
    modalButton.addEventListener('click', () => {
      // Hide the feed fish modal
      feedFishModal.style.opacity = '0';
      feedFishModal.style.visibility = 'hidden';
      feedFishModal.style.zIndex = '-1';

      // Reset fish energy level
      fishEnergyLevel = 100;

      // Update energy level display
      energyLevel.style.width = `${fishEnergyLevel}%`;
      energyPercentText.textContent = `${fishEnergyLevel}%`;
    });

    return fishBody;
  }

  // Add click event listener to the start button
  startButton.addEventListener('click', () => {
    gameStart.style.transform = 'translateY(-100%)';
  });

  return gameSection;
}
