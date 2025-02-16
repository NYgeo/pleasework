const answers_no = [
    "No", "Are you sure?", "Are you really sure??",
    "Are you really really sure???", "Think again?",
    "Am I that chopped?", "Please be my loca", "Please be my loca"
];

const images_no = [
    "assets/images/asheating.jpeg",
    "assets/images/shawty.jpg",
    "assets/images/dany.jpg",
    "assets/images/mr.longveinyahdih.png",
    "assets/images/prodigy.jpeg",
    "assets/images/sonic-devil.gif",
    "assets/images/loco.jpg"
];

const yesResponseImage = "assets/images/yes.gif";
const successLink = "https://www.youtube.com/watch?v=vJLB1cq3Zmk";

let noClickCount = 0;
let yesButtonSize = 50;

const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const banner = document.getElementById('banner');
const messageBox = document.getElementById('message-box');

function updateBanner(image) {
    banner.src = image;
    refreshBanner();  // Ensures the image is reloaded properly
}

function refreshBanner() {
    let src = banner.src;
    banner.src = '';  // Reset the src temporarily
    banner.src = src;  // Reapply the src to refresh the image
}

function updateYesButtonSize() {
    yesButtonSize += Math.floor(Math.random() * 20) + 30;
    yesButton.style.height = `${yesButtonSize}px`;
    yesButton.style.width = `${yesButtonSize}px`;
}

function handleNoClick() {
    updateBanner(images_no[noClickCount % images_no.length]);
    updateYesButtonSize();

    if (noClickCount < answers_no.length - 1) {
        noButton.innerHTML = answers_no[noClickCount];
        noClickCount++;
    } else {
        forceYes();
    }
}

function forceYes() {
    alert("You must press Yes now!lol");
    noButton.style.display = "none";
    yesButton.disabled = false;
    yesButton.style.cursor = "pointer";
    messageBox.innerHTML = "<h2>You must press Yes now! lol</h2>";
}

yesButton.addEventListener('click', () => {
    // Ensure the button is only functional once enabled
    if (yesButton.disabled) return;

    updateBanner(yesResponseImage);  // Update the banner to "yes.gif"
    document.querySelector('.buttons').style.display = "none";  // Hide both Yes and No buttons
    document.getElementById('question-heading').style.display = "none";  // Hide the question heading

    // First show the "Yes" message
    let yesMessage = document.createElement('h2');
    yesMessage.innerHTML = "You pressed Yes!";
    document.querySelector('.message').appendChild(yesMessage);  // Add the Yes message

    // After a delay, show the success message with the link
    setTimeout(() => {
        let message = document.getElementsByClassName('message')[0];
        message.innerHTML = "<h2><a href='https://www.youtube.com/watch?v=vJLB1cq3Zmk'> esta cancion esta dedicada a ti, oops i forgot u don't know spanish. \nClick this link</a></h2><h6>Made by: Bob <a class='creator' href='https://github.com/Aayush-683'></a></h6>";
        message.style.display = "block";  // Display the success message with the link
    }, 1000);  // Delay the success message by 1 second to show the "Yes" message first
});

noButton.addEventListener('click', handleNoClick);
