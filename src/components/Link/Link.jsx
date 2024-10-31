import styles from './styles.module.css';

const Link = ({ text }) => {
    return (
        <span>
            <a className={ styles.link } href="#">{ text }</a>
        </span>
    );
}

export default Link;