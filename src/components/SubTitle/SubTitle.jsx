import styles from './styles.module.css';

const SubTitle = ({ text }) => {
    return (
        <div>
            <h2 className={ styles.text }>{ text }</h2>
        </div>
    );
}

export default SubTitle;