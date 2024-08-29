// Generate random stars with twinkling effect at different times
const numStars = 100;
const numPurpleStars = 20;

for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';

    let topPosition = Math.random() * 100;
    let leftPosition = Math.random() * 100;

    star.style.top = `${topPosition}vh`;
    star.style.left = `${leftPosition}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
}

for (let i = 0; i < numPurpleStars; i++) {
    let star = document.createElement('div');
    star.className = 'star purple-star';

    let topPosition = Math.random() * 100;
    let leftPosition = Math.random() * 100;

    star.style.top = `${topPosition}vh`;
    star.style.left = `${leftPosition}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
}

// Libra constellation star positions (adjusted for accuracy)
const libraStars = [
    { top: 5, left: 5 },
    { top: 12, left: 7 },
    { top: 19, left: 5 },
    { top: 12, left: 14 },
    { top: 19, left: 17 },
    { top: 26, left: 14 }
];

// Draw the stars for Libra
libraStars.forEach(position => {
    let star = document.createElement('div');
    star.className = 'star libra-star';
    star.style.top = `${position.top}vh`;
    star.style.left = `${position.left}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(star);
});
