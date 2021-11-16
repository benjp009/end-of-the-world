const speaker = [
  {
    profilePicture: '../ressources/images/Speaker1.jpg',
    name: 'Jorge Renat',
    title: 'Chief Happy Officer of World of Warcraft',
    description: 'The parallel universe are the world in which we wish to live, yet we are going to become hashes in both worlds',
  },
  {
    profilePicture: '../ressources/images/Speaker2.jpg',
    name: 'Mane Monaya',
    title: 'Tech Space Officer',
    description: 'We try to build spaceship to go to a planet that does not exist, and we failed miserably, lets jump all together to reach the moon',
  },
  {
    profilePicture: '../ressources/images/Speaker3.jpg',
    name: 'Mark Cook',
    title: 'Chief Reading Executive',
    description: 'We need to read as much as possible, as memories are the only belongings our soul will keep beyond',
  },
  {
    profilePicture: '../ressources/images/Speaker4.jpg',
    name: 'Kim Andersadjian',
    title: 'Self Made Zillionaire',
    description: 'I have so much money, I will give it all to whoever saves me after the end of the world',
  },
  {
    profilePicture: '../ressources/images/Speaker5.jpg',
    name: 'Britney Johansen',
    title: 'Dancing Guru',
    description: 'Where there is music, there is life, if we die with music, we will never stop dancing, Woow',
  },
  {
    profilePicture: '../ressources/images/Speaker6.jpg',
    name: 'Steven McCurry',
    title: 'Disk Pusher on iPad',
    description: 'We will make you dance with music coming from the other world, be ready and party',
  },
];

for (let i = 0; i < speaker.length; i += 1) {
  document.getElementById('speaker').innerHTML += `
  <div class='speaker-card'>
    <div class='speaker-picture-container'>
      <img class='grey-bg' src='../ressources/images/chess-table.png' alt=''>
      <img class='speaker-picture' src='${speaker[i].profilePicture}' alt=''>
    </div>
    <div class='speaker-text-container'>
      <h4>${speaker[i].name}</h4>
      <h5>${speaker[i].title}</h5>
      <p>${speaker[i].description}</p>
    </div>
  </div>`;
}
