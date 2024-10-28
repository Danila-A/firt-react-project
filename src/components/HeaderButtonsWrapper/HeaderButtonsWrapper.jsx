import LanguageSelect from "../LanguageSelect/LanguageSelect";
import SignInButton from "../SignInButton/SignInButton";
import styles from './styles.module.css';

const HeaderButtonsWrapper = () => {
    return (
        <div className={ styles.wrapper }>
            <LanguageSelect />
            <SignInButton />
        </div>
    );
}

export default HeaderButtonsWrapper;
