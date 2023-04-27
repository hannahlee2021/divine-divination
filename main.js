const img = document.getElementById('fingerprint');
const element = document.getElementById('prick_title');
img.addEventListener('click', function() {

    element.remove();

    img.src = 'https://static.wixstatic.com/media/f45a57_0208f0f3b7874bb598857e3503c8d458~mv2.png';
    img.src = 'https://static.wixstatic.com/media/f45a57_f972d0501eb7411b99e5da48a203bcb5~mv2.png';
    img.src = 'https://static.wixstatic.com/media/f45a57_9e2d12f5ba704a0e888abcaacaf891ec~mv2.gif'; 
})