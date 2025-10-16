const homeswitch = document.getElementById("home");
const historyswitch = document.getElementById("history");
const socialworkswitch = document.getElementById("socialwork");
const membersswitch = document.getElementById("members");
const findusswitch = document.getElementById("findus");

if (homeswitch) {
    homeswitch.addEventListener("click", () => {
        const homeurl = `https://ordendelaflordelis.vercel.app/index.html`;
        window.open(homeurl, "_self");
    });
}

if (historyswitch) {
    historyswitch.addEventListener("click", () => {
        const historyurl = `https://ordendelaflordelis.vercel.app/history.html`;
        window.open(historyurl, "_self");
    });
}

if (socialworkswitch) {
    socialworkswitch.addEventListener("click", () => {
        const socialworkurl = `https://ordendelaflordelis.vercel.app/socialwork.html`;
        window.open(socialworkurl, "_self");
    });
}

if (membersswitch) {
    membersswitch.addEventListener("click", () => {
        const membersurl = `https://ordendelaflordelis.vercel.app/members.html`;
        window.open(membersurl, "_self");
    });
}

if (findusswitch) {
    findusswitch.addEventListener("click", () => {
        const findusurl = `https://ordendelaflordelis.vercel.app/findus.html`;
        window.open(findusurl, "_self");
    });
}