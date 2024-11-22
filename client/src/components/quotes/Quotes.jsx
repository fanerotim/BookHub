import './Quotes.scss'
import QuotesCard from './quotes-card/QuotesCard';
import db from './db';

const Quotes = () => {
    return (

        <div className='quotes__container'>
            <h1 className='quotes__container__heading'><span className='quotes__container__heading__effect'>Our</span> Quotes</h1>

            <h2 className='quotes__container__subheading'>BookHub's collection of words worth remembering. Add your favorite quotes and let readers discover new gems.</h2>

            <div className='quotes__container__card__container'>
                <section className='quotes__container__quote__card'>
                    {db.map((q, index) => (
                        <QuotesCard 
                        q={q} 
                        index={index} 
                        key={index} />
                    ))}
                </section>
            </div>

        </div>
    )
}

export default Quotes;