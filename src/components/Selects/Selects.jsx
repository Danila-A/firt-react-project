import styles from './styles.module.css';

const Selects = () => {
    return (
        <div className={ styles.wrapper }>
            <select className={ styles.select } name="" id="">
                <option className={ styles.option } value="english" selected>english</option>
                <option className={ styles.option } value="global">global</option>
            </select>
            <select className={ styles.select } name="" id="">
                <option className={ styles.option } value="films" selected>films</option>
                <option className={ styles.option } value="TV programms">TV programms</option>
            </select>
        </div>
    );
}

export default Selects;