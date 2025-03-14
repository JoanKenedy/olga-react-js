// eslint-disable-next-line react/prop-types
export const ContactButton = ({ classList, textColor, bg }) => {
  return (
    <a
      className={`inline-block text-center h-max px-5 py-2  rounded-full font-light transition hover:scale-95 ${classList} ${
        textColor || "text-white"
      } ${bg || "bg-violet-600"}`}
      href="https://api.whatsapp.com/send?phone=525564529359"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ir al WhatsApp de Olga Castillo"
    >
      Contacto
    </a>
  );
};
