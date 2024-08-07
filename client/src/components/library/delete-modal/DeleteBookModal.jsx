import { useEffect } from 'react';
import './DeleteBookModal.scss'
import useDeleteBook from '../../../hooks/useDeleteBook';

const DeleteBookModal = ({ props, deleteModalItemDefinition }) => {

    const { deleteBook } = useDeleteBook();

    useEffect(() => {
        // disable scroll when modal shows (mount)
        document.body.style.overflowY = 'hidden';

        // enable scroll when modal is closed (unmount)
        return () => {
            document.body.style.overflowY = 'scroll'
        }
    }, [])

    function handleReject() {
        // hide modal
        props.deleteHandler();
    }

    function handleApprove() {
        deleteBook();
    }

    return (
        <section className='delete__modal__container'>
            <div className='delete__modal'>
                <h1 className='delete__modal__text'>Are you sure you want to delete this book entry from <span className='delete__modal__text__logo'>BookHub</span>? This action cannot be undone.</h1>
                <p className='delete__modal__text__notice'>By clicking <span className='delete__modal__text__notice__delete'>Delete</span>, the book entry will be permanently removed from our library.</p>

                <div className='delete__modal__button__container'>
                    <button onClick={handleApprove} className='delete__modal__button__container__approve delete__modal__button__container__button'>Delete</button>
                    <button onClick={handleReject} className='delete__modal__button__container__reject delete__modal__button__container__button'>Cancel</button>
                </div>
            </div>
        </section>
    )
}

export default DeleteBookModal;