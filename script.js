const joinBtn = document.getElementById("joinBtn");
const downloadBtn = document.getElementById("downloadBtn");
const bar = document.getElementById("bar");
const status = document.getElementById("status");

let joined = false;

joinBtn.addEventListener("click", () => {
    window.open("https://t.me/+qEVLcU2rN9g0ODI1", "_blank");

    let progress = 0;

    const timer = setInterval(() => {
        progress += 2;
        bar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(timer);
            joined = true;
            status.innerHTML = "✅ Telegram Joined Successfully!";
            downloadBtn.disabled = false;
            downloadBtn.style.opacity = "1";
            downloadBtn.style.cursor = "pointer";
        }
    }, 40);
});

downloadBtn.addEventListener("click", () => {
    if (!joined) {
        alert("⚠ Please join our Telegram first!");
        return;
    }

    window.open(
        "https://github.com/hackelbabatun0/AIMBOT+REGEDIT.zip/file",
        "_blank"
    );
});
