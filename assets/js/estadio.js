function showPaymentMethods() {
    var modal = document.getElementById("payment-modal");
    modal.style.display = "block";
}

function closePaymentModal() {
    var modal = document.getElementById("payment-modal");
    modal.style.display = "none";
}

function showInput(method) {
    closePaymentModal();

    var inputModal = document.getElementById("input-modal");
    inputModal.style.display = "block";

    var inputs = document.querySelectorAll('.payment-input');
    inputs.forEach(function(input) {
        input.style.display = 'none';
    });

    var input = document.getElementById(method + '-input');
    if (input) {
        input.style.display = 'block';
    }
}

window.onload = function() {
    var comprarButtons = document.querySelectorAll('button[id^="comprar"]');
    comprarButtons.forEach(function(button) {
        button.addEventListener('click', showPaymentMethods);
    });
};

window.onclick = function(event) {
    var modal = document.getElementById("payment-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        var modal = document.getElementById("payment-modal");
        modal.style.display = "none";
    }
});