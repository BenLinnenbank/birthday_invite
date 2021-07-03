const bodyBackground = document.querySelector('body');

setTimeout(() => {
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * Math.floor(3) + 1);
        const cloud = document.createElement('div');
        cloud.setAttribute('class', `cloud${randomNum}`);
        const image = document.createElement('img');
        image.setAttribute('src', `./images/cloud${randomNum}.png`);
        cloud.appendChild(image);
        cloud.style.left = `${Math.floor(Math.random() * Math.floor(80))}vw`;
        cloud.style.top = `${Math.floor(Math.random() * Math.floor(-40)) + -40}vh`;

        bodyBackground.appendChild(cloud);
    }
}, 5000);
