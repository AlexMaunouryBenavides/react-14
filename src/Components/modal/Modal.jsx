import { useState } from 'react';
import Styles from './modal.module.css';

function Modal({ open, close }) {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<button
				className={Styles.openBtn}
				onClick={toggleModal}>
				{open}
			</button>

			{modal && (
				<div className={Styles.modal}>
					<div
						className={Styles.overlay}
						onClick={toggleModal}></div>
					<div className={Styles.content}>
						<p>Employee Created! </p>
					</div>
					<button
						className={Styles.closeBtn}
						onClick={toggleModal}>
						{close}
					</button>
				</div>
			)}
		</>
	);
}

export default Modal;
