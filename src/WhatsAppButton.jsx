import React from 'react'

const WhatsAppButton = () => {
    const phoneNumber = '+6281229974014'; // Ganti dengan nomor WhatsApp Anda
    const message = 'Saya tertarik dengan produk Anda!'; // Pesan yang ingin dikirim
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button style={styles.button}>
          Hubungi Kami di WhatsApp
        </button>
      </a>
    );
  };
  
  const styles = {
    button: {
      backgroundColor: '#25D366',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
  };
  
  export default WhatsAppButton;