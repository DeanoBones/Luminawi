const video = document.getElementById("myVideo");
const button = document.querySelector(".button");

let ESP = false; 

// Define the ESP32 IP address and port
const esp32Ip = "http://192.168.1.81";  // Replace with your ESP32's IP address

// Event listeners for the button
button.addEventListener("mouseover", () => {
    video.play();
    ESP = true;
    console.log("ESP is now:", ESP); 

    // Send a request to the ESP32 to trigger the buzzer
    fetch(`${esp32Ip}/buzz`)
        .then(response => response.text())
        .then(data => {
            console.log(data);  // Log the response from the ESP32 (e.g., "Buzzer Triggered")
        })
        .catch(error => {
            console.error("Error triggering the buzzer:", error);
        });
});

button.addEventListener("mouseleave", () => {
    video.pause();
    ESP = false; 
    console.log("ESP is now:", ESP);
});
