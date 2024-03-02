document.getElementById("downloadPdf").addEventListener("click", function () {
    const pdfUrl = "./Resume.pdf"; // Replace with the actual URL of your PDF file

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // Specify the desired filename for the downloaded file

    // Append the link to the document body and trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
