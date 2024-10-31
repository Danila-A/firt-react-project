import QuestionsList from '../QuestionsList/QuestionsList';
import SubTitle from '../SubTitle/SubTitle';
import styles from './styles.module.css';

const FAQ = () => {
    return (
        <section>
            <div className={ styles.inner }>
                <SubTitle text={ 'Frequently Asked Questions' } />
                <QuestionsList />
            </div>
        </section>
    );
}

export default FAQ;