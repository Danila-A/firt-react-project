import styles from './styles.module.css';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hello');
    }

    return (
        <div>
            <form className={ styles.form }>
                <div style={{ flexGrow: 1, marginRight: '8px' }}>
                    <input className={ styles.input } placeholder='Email address' type="text"   />
                </div>
                <button className={ styles.button } onSubmit={ (event) => handleSubmit(event) }>get started</button>
            </form>
        </div>
    );
}

export default Form;