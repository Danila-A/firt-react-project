import styles from './styles.module.css';

const Text = ({ text }) => {
    return (
        <div>
            <p className={ styles.text } style={{ fontWeight: 700 }}>{ text }</p>
        </div>
    );
}

export default Text;    