const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream,pass to video element ,then play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error here
        console.log('whoops, error here:', error);
    }
}
button.addEventListener('click', async () => {
//  Disable Button
button.disabled = true;
// start picture in picture
await videoElement.requestPictureInPicture();
// reset button
button.disabled = false;
});
// on Load
selectMediaStream();