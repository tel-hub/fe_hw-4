let images = [
  {
    small: 'https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_640.jpg',
    large: 'https://cdn.pixabay.com/photo/2023/04/06/01/26/heart-7902540_960_720.jpg'
  },
  {
    small: 'https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302__340.jpg',
    large: 'https://cdn.pixabay.com/photo/2023/04/09/11/05/mountains-7911302_960_720.jpg'
  },
  {
    small: 'https://cdn.pixabay.com/photo/2022/11/22/22/06/bird-7610726__340.jpg',
    large: 'https://cdn.pixabay.com/photo/2022/11/22/22/06/bird-7610726_960_720.jpg'
  }
];

let imageHolder = document.createElement('div');
let imagePreview = document.createElement('img');

imageHolder.className= 'image-holder';

document.body.append(imageHolder);
document.body.append(imagePreview);

for (let i = 0; i < images.length; i++) {
  const img = images[i];

  let image = document.createElement('img');

  image.src = img.small;

  image.addEventListener('click', () => {
    imagePreview.src = img.large;
  });

  imageHolder.appendChild(image);
}
