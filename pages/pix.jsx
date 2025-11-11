import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pix = () => {
  const numeroPagamento = '00020126360014br.gov.bcb.pix0114+55629925291275204000053039865802BR5913LIDIANE SILVA6015APARECIDA DE GO62170513CasaEdificada630482B9';

  const toastSuccess = () => toast.success('Pix cópiado com sucesso!');

  return (
    <div className="pixContainer">
      <img src="/taxaInscricao.jpg" className="pixTaxa" alt="" />

      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     
      <hr />

      <br></br>

      <ContentCopyIcon className="corIconPix" onClick={() => { navigator.clipboard.writeText(numeroPagamento) }} />
      <div className="divPix" onClick={toastSuccess}>
        <p>Pix Copia e Cola: <b> (62) 99252-9127 | LIDIANE SILVA CAIXA ECONOMICA</b></p>
      </div>

      <br></br>

      <textarea
        id="name"
        style={{
          width: '95%',
          height: '70px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          textAlign: 'center',
          padding: '3px'
        }}
        defaultValue='00020126360014br.gov.bcb.pix0114+55629925291275204000053039865802BR5913LIDIANE SILVA6015APARECIDA DE GO62170513CasaEdificada630482B9'
      />

    </div>
  );
};

export default Pix;
