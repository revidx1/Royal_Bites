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


    function filtrer(categorie) {

    
            document.querySelectorAll('.filtre-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');


            document.querySelectorAll('.galerie-item').forEach(item => {
                if (categorie === 'tous') {
                    item.style.display = 'block';
                } else if (item.dataset.categorie === categorie) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

