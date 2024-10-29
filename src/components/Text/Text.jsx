import styles from './styles.module.css';

const Text = ({ text, bold }) => {
    console.log(bold);
    return (
        <div>
            <p 
                className={ styles.text }
                style={ bold && { fontWeight: 700} }
            >
                { text }
            </p>
        </div>
    );
}

export default Text;    