import ReasonsList from '../ReasonsList/ReasonsList';
import SubTitle from '../SubTitle/SubTitle';
import styles from './styles.module.css';

const Reasons = () => {
    return (
        <section>
            <div className={ styles.inner }>
                <SubTitle text={ 'More reasons to join' } />
                <ReasonsList />
            </div>
        </section>
    );
}

export default Reasons;