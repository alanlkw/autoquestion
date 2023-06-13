document.getElementById("file-upload-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var fileInput = document.getElementById("file");
    var file = fileInput.files[0];

    if (file) {
        var formData = new FormData();
        formData.append("file", file);

        // You can use AJAX or fetch API to upload the file to the server
        // Here, we'll just log the file details to the console
        console.log("File Name: " + file.name);
        console.log("File Type: " + file.type);
        console.log("File Size: " + file.size + " bytes");
    }
});
