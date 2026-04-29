function resetForm() {
    var form = document.getElementById('reservationForm');
    var successMessage = document.getElementById('successMessage');

    if (form) {
        form.reset();
    }

    if (successMessage) {
        successMessage.style.display = 'none';
    }
}


    function toggleNav() {
        var links = document.querySelector('.nav-links');
        if (!links) return;
        if (links.classList.contains('open')) {
            links.classList.remove('open');
        } else {
            links.classList.add('open');
        }
    }



