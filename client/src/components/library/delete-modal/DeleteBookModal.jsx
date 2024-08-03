import { useEffect } from 'react';
import './DeleteBookModal.scss'
import useDeleteBook from '../../../hooks/useDeleteBook';

const DeleteBookModal = ({props}) => {

    const {deleteBook} = useDeleteBook();

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
        console.log('handle approve')
        deleteBook();
    }

    return (
        <section className='delete__modal__container'>
            <div className='delete__modal'>
                <h1 className='delete__modal__text'>Are you sure you want to delete your entry?</h1>

                <div className='delete__modal__button__container'>
                    <button onClick={handleApprove} className='delete__modal__button__container__approve delete__modal__button__container__button'>Yes</button>
                    <button onClick={handleReject} className='delete__modal__button__container__reject delete__modal__button__container__button'>No</button>
                </div>
            </div>
        </section>
    )
}

export default DeleteBookModal;