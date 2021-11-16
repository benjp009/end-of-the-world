const program = [
  {
    icon: '../ressources/images/cheers.png',
    title: 'Party',
    description: 'The end is near, so no more escuses, life is a party, Enjoy while you can.',
  },
  {
    icon: '../ressources/images/yes.png',
    title: 'Accept',
    description: 'afther that day, the world will nott be. Just accept it. We have sessions for you to work on that.',
  },
  {
    icon: '../ressources/images/flame.png',
    title: 'Burn',
    description: 'Your belongings will no longer be, it is time to burn it all! We have gasoline and matches!',
  },
  {
    icon: '../ressources/images/heart.png',
    title: 'Love',
    description: 'The last act you should do is love, love everyone and receive love from all people present.',
  },
  {
    icon: '../ressources/images/destroy.png',
    title: 'Destroy',
    description: 'You should destroy all things that you touch, better by you than the destroyer of worlds, no?',
  },
];

for (let i = 0; i < program.length; i += 1) {
  document.getElementById('program').innerHTML += `
  <div class='program-card'>
    <img src='${program[i].icon}' alt='' class='program-icon'>
    <h4 class='program-title'>${program[i].title}</h4>
    <p class='program-text'>${program[i].description}</p>
  </div>`;
}
