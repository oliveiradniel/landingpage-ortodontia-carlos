export default function GoogleMap() {
  return (
    <div className="min-h-[400px] h-[500px] w-full lg:max-w-[570px] rounded-md overflow-hidden shadow-md">
      <iframe
        aria-label="Mapa da localização da clínica em Brodowski, SP"
        title="Mapa com a localização da Clínica Dr. Carlos Alberto em Brodowski, SP"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3622293602495!2d-47.66094538450763!3d-20.99119488593669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b92c73d66c6875%3A0x9a1b4e4f62847c6c!2sCentro%2C%20Brodowski%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718900000000!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
