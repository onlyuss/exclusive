
const profile = document.getElementById("profile");

profile.src = config.profileImage;

// Exclusive Content langsung menuju link Telegram
const exclusiveBtn = document.getElementById("exclusiveBtn");

exclusiveBtn.href = config.telegramLink;

let index = 0;

function changeBackground() {
    document.body.style.backgroundImage =
        `url(${config.backgrounds[index]})`;

    index++;

    if (index >= config.backgrounds.length) {
        index = 0;
    }
}

const members = 15472;

const active =
    Math.floor(
        Math.random() *
        (config.maxActive - config.minActive)
    ) + config.minActive;

document.getElementById("members").innerHTML =
    `👥 ${members.toLocaleString()} Members`;

document.getElementById("active").innerHTML =
    `🟢 ${active.toLocaleString()} Active`;

changeBackground();

setInterval(changeBackground, 3000);
