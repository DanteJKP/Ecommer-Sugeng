document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productTitle = urlParams.get('title');
    const productPrice = urlParams.get('price').replace("Rp ", "").replace(".", "").trim();
    const productImage = urlParams.get('img');

    if (productTitle && productPrice && productImage) {
        document.getElementById('productImg').src = productImage;
        document.getElementById('productName').value = productTitle;
        document.getElementById('productPrice').value = `Rp ${parseInt(productPrice).toLocaleString()}`;
    }

    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('productPrice');
    const sendButton = document.getElementById('sendToWhatsApp');

    // Fungsi untuk memperbarui harga total
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = parseInt(productPrice) * quantity;
        priceInput.value = `Rp ${totalPrice.toLocaleString()}`;
    }

    // Update harga ketika quantity berubah
    quantityInput.addEventListener('input', updateTotalPrice);

    // Inisialisasi harga awal (untuk quantity default = 1)
    updateTotalPrice();

    // Fungsi untuk mengirim pesan ke WhatsApp
    sendButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = parseInt(productPrice) * quantity;

        // Format pesan untuk dikirim ke WhatsApp
        const message = `Halo, saya ingin membeli:\n\n` +
            `Produk: ${productTitle}\n` +
            `Harga: Rp ${parseInt(productPrice).toLocaleString()} per item\n` +
            `Jumlah: ${quantity}\n` +
            `Total: Rp ${totalPrice.toLocaleString()}\n\n` +
            `Terima kasih!`;

        // Nomor WhatsApp tujuan (ganti dengan nomor yang diinginkan)
        const phoneNumber = '6282235498757'; // Gunakan format internasional tanpa '+'

        // Buka WhatsApp dengan pesan yang diformat
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});
