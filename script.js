const video = document.getElementById("myVideo");
const button = document.querySelector(".button");

let ESP = false; 

// Define the ESP32 IP address and port
const esp32Ip = "http://192.168.1.81";  // Replace with your ESP32's IP address

// Event listeners for the button
button.addEventListener("mouseover", () => {
	video.play();
    ESP = true;
    console.log("Button hovered, sending request to ESP32...");
    
    const xhr = new XMLHttpRequest();  // Create a new XMLHttpRequest object
    xhr.open("GET", "http://192.168.1.81/buzz", true);  // Configure it for GET request to trigger the buzzer
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Buzzer triggered successfully!");  // Log success when response status is 200 (OK)
        } else {
            console.error("Failed to trigger buzzer:", xhr.status, xhr.statusText);  // Log error with status
        }
    };
    xhr.onerror = function() {
        console.error("Error triggering the buzzer:", xhr.status, xhr.statusText);  // Log any request error
    };
    xhr.send();  // Send the request
});


button.addEventListener("mouseleave", () => {
    video.pause();
    ESP = false; 
    console.log("ESP is now:", ESP);
});
