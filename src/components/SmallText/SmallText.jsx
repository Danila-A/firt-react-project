import styles from './styles.module.css';

const SmallText = ({ text }) => {
    return (
        <div>
            <p className={ styles.text }>{ text }</p>
        </div>
    );
}

export default SmallText;