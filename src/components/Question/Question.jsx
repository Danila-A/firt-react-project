import { useState } from 'react';
import styles from './styles.module.css';

const Question = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <div className={ styles.question }>
            <div className={ styles.background } onClick={ handleOnClick }>
                <h3>{ title }</h3>
                <div className={ styles.svg } style={ isOpen ? { transform: "rotateZ(45deg)"} : { transform: "rotateZ(0deg)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" width="36" height="36" data-icon="PlusLarge" aria-hidden="true" class="elj7tfr3 default-ltr-cache-1k5iouc-Icon-StyledAccordionIcon e164gv2o4"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
                </div>
            </div>
            { isOpen ? 
                <div className={ styles.background }>
                    <p>{ text }</p>
                </div> 
                : 
                null
            }
        </div>
    );
}

export default Question;