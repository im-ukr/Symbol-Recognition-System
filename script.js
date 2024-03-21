function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const outputElement = document.getElementById('output');

    const file = fileInput.files[0];
    if (!file) {
        outputElement.innerText = 'No file selected.';
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        outputElement.innerText = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        outputElement.innerText = 'An error occurred.';
    });
}
