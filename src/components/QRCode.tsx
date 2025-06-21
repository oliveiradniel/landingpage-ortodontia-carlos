import qrCode from "@/assets/images/qr-code.png";

export default function QRCode() {
  return (
    <div className="absolute hidden md:flex rounded-md flex-col border w-[200px] h-auto p-2 border-black/20 bottom-[120%] right-1/2 translate-x-[50%] bg-white">
      <img loading="lazy" src={qrCode} alt="QR Code para ir até o WhatsApp" />
      <small className="text-center text-gray-600">Escanear o código</small>
    </div>
  );
}
