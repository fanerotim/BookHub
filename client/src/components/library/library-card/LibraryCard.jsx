import './LibraryCard.scss'
import placeholderImage from '../../../assets/elixir.jpg'


const LibraryCard = () => {
    return (
        <section className='library__card__wrapper'>
            <div className='library__card__img__container'>
                <img className='library__card__img' src={placeholderImage} alt="" />
            </div>
            <p>Title</p>
            <p>Author</p>
            <button>More</button>
        </section>
    )
}

export default LibraryCard;