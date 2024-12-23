const video = document.getElementById("myVideo");
const button = document.querySelector(".button");

// Event listeners for the button
button.addEventListener("mouseover", () => {
    video.play();  // Play the video
    console.log("Video is playing"); // Log video status for debugging

    // Send request to ESP32 to trigger the buzzer
    fetch("http://<ESP32_IP_ADDRESS>/buzz")  // Replace with the actual IP address of your ESP32
      .then(response => response.text())
      .then(data => {
        console.log("Buzzer triggered:", data); // Log the response
      })
      .catch(error => {
        console.error("Error triggering buzzer:", error); // Handle errors
      });
});

button.addEventListener("mouseleave", () => {
    video.pause();  // Pause the video
    console.log("Video is paused"); // Log video status for debugging
});
