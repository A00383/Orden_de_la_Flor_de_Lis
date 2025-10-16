const homeswitch = document.getElementById("home");


if (homeswitch) {
    homeswitch.addEventListener("click", () => {
        const homeurl = `https://ordendelaflordelis.vercel.app/index.html`;
        window.open(homeurl, "_blank");
    });
}
