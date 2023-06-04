document.getElementById("file-upload-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var fileInput = document.getElementById("file");
    var file = fileInput.files[0];

    if (file) {
        var formData = new FormData();
        formData.append("file", file);

        
        console.log("File Name: " + file.name);
        console.log("File Type: " + file.type);
        console.log("File Size: " + file.size + " bytes");
    }
});
