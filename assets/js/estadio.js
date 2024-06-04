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

function closeInputModal() {
    var inputModal = document.getElementById("input-modal");
    inputModal.style.display = "none";
}

function submitPayment() {
    var inputs = document.querySelectorAll('.payment-input');
    inputs.forEach(function(input) {
        input.style.display = 'none';
    });

    var processingMessage = document.getElementById('processing-message');
    processingMessage.style.display = 'block';

    var dots = '';
    var intervalId = setInterval(function() {
        dots += '.';
        if (dots.length > 3) {
            dots = '';
        }
        document.getElementById('loading-dots').textContent = dots;
    }, 400);

    setTimeout(function() {
        clearInterval(intervalId);
        processingMessage.style.display = 'none';
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 4000);
    }, 4000);
}

window.onclick = function(event) {
    var paymentModal = document.getElementById("payment-modal");
    var inputModal = document.getElementById("input-modal");
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    } else if (event.target == inputModal) {
        inputModal.style.display = "none";
    }
};

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closePaymentModal();
        closeInputModal();
    }
});
