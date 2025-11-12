// Home Page component

const Content = () => {
  return (
    <div className="static">
      <video
        src="/casaedificada2025.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      <div className="myContent">
        <b>A CONFIRMAÇÃO DA SUA INSCRIÇÃO SOMENTE APÓS O PAGAMENTO, E ENVIO DO COMPROVANTE NO WHATSAPP: (62) 99452-9444</b>
      </div>
    </div>
  );
};

export default Content;
