
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const setModalProps = ({ type, header, body }) => {
   modalTitle.textContent = header;
   modalTitle.classList.add(`text-${type}`);
   modalBody.textContent = body;

};

export default setModalProps ;