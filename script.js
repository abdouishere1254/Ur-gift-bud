
let currentPage = 1;

const totalPages = 4;

function showPage() {

    // Hide all pages
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById("page" + i)
            .classList.remove("active");
    }

    // Show current page
    document.getElementById("page" + currentPage)
        .classList.add("active");

    // Update page counter
    document.getElementById("pageNumber").textContent =
        "0" + currentPage + " / 04";

    // Update back button
    document.getElementById("backBtn").disabled =
        currentPage === 1;
}

function nextPage() {

    if (currentPage < totalPages) {
        currentPage++;
        showPage();
    }

}

function previousPage() {

    if (currentPage > 1) {
        currentPage--;
        showPage();
    }

}

function restartWebsite() {

    currentPage = 1;
    showPage();

}

// Start website
showPage();
