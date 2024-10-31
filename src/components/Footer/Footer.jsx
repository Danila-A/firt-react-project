import CountryName from '../CountryName/CountryName';
import Link from '../Link/Link';
import ListsList from '../ListsList/ListsList';
import SecondLanguageSelect from '../SecondLanguageSelecet/SecondLanguageSelect';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={ styles.inner }>
                <div>
                    <Link text={ 'Questions? Contact us.' } />
                </div>
                <ListsList />
                <SecondLanguageSelect />
                <CountryName country={ 'Russia' } />
            </div>
        </footer>
    );
}

export default Footer;