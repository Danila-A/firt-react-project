import Link from '../Link/Link';
import styles from './styles.module.css';

const LinksList = ({ list }) => {
    return (
        <div className="">
            <ul >
                {list.map((item) => {
                    return <li className={ styles.li } key={ item }><Link text={ item } /></li>
                })}   
            </ul>
        </div>
    );
}

export default LinksList;