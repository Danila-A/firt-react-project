import LanguageSelect from '../LanguageSelect/LanguageSelect';
import styles from './styles.module.css';

const SecondLanguageSelect = () => {
    return (
        <div className={ styles.inner }>
            <LanguageSelect />
        </div>
    );
}

export default SecondLanguageSelect;