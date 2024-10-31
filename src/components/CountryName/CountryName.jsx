import styles from './styles.module.css';

const CountryName = ({ country }) => {
    return (
        <div className={ styles.inner }>
            <p className={ styles.p }>Netflix { country }</p>
        </div>
    );
}

export default CountryName;