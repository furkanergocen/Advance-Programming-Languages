async function getSpriteImages() {
    for (let i = 1; i < 15; i++) {
        let url = "Sprite-Images/cat (" + i + ").png";

        let options = {
            method: "GET",
        };

        let response = await fetch(url, options);

        if (response.status === 200) {
            let imageBlob = await response.blob();
            let imageObjectURL = URL.createObjectURL(imageBlob);

            let image = document.createElement("img");
            image.src = imageObjectURL;

            images.push(image);
        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
}