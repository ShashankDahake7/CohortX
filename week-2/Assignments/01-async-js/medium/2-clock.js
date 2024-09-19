// Using `1-counter.js` or `2-counter.js` from the easy section, can you create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// function currentTime() {
//     const d = new Date();
//     const hr = d.getHours().toString().padStart(2, '0');
//     const min = d.getMinutes().toString().padStart(2, '0');
//     const sec = d.getSeconds().toString().padStart(2, '0');
//     console.log(`${hr}:${min}:${sec}`);
// }
// setInterval(currentTime, 1000);

function currentTimeWithAMPM() {
    const d = new Date();
    const hr = d.getHours() % 12 || 12;
    const min = d.getMinutes().toString().padStart(2, '0');
    const sec = d.getSeconds().toString().padStart(2, '0');
    const ampm = d.getHours() < 12 ? 'AM' : 'PM';
    console.log(`${hr}:${min}:${sec} ${ampm}`);
}
setInterval(currentTimeWithAMPM, 1000);