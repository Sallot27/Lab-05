// Get the necessary elements
const photoContainer = document.getElementById('photo-container');
const photoUrlInput = document.getElementById('photo-url');
const addPhotoButton = document.getElementById('add-photo');

// Function to handle adding a new photo
function addPhoto() {
  const photoUrl = photoUrlInput.value;

  if (photoUrl) {
    const photo = document.createElement('div');
    photo.classList.add('photo');
    photo.style.backgroundImage = `url(${photoUrl})`;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'Delete';

    // Add event listener for deleting the photo
    deleteButton.addEventListener('click', function () {
      photoContainer.removeChild(photo);
    });

    // Add event listener for dragging the photo
    photo.draggable = true;
    photo.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData('text/plain', photo.id);
    });

    photo.appendChild(deleteButton);
    photoContainer.appendChild(photo);
    photoUrlInput.value = '';
  }
}

// Event listener for adding a new photo
addPhotoButton.addEventListener('click', addPhoto);

// Event listener for dropping a photo
photoContainer.addEventListener('drop', function (event) {
  event.preventDefault();
  const photoUrl = event.dataTransfer.getData('text/plain');

  if (photoUrl) {
    const photo = document.createElement('div');
    photo.classList.add('photo');
    photo.style.backgroundImage = `url(${photoUrl})`;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = 'Delete';

    // Add event listener for deleting the photo
    deleteButton.addEventListener('click', function () {
      photoContainer.removeChild(photo);
    });

    // Add event listener for dragging the photo
    photo.draggable = true;
    photo.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData('text/plain', photo.id);
    });

    photo.appendChild(deleteButton);
    photoContainer.appendChild(photo);
  }
});

// Prevent default behavior for dragover event
photoContainer.addEventListener('dragover', function (event) {
  event.preventDefault();
});