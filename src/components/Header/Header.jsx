import HeaderButtonsWrapper from "../HeaderButtonsWrapper/HeaderButtonsWrapper";
import Logo from "../Logo/Logo";
import styles from './styles.module.css';

const Header = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.header__inner }>
                <Logo/>
                <HeaderButtonsWrapper />
            </div>
        </header>
    );
}

export default Header;
