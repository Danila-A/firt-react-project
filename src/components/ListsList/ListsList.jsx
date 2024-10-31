import LinksList from '../LinksList/LinksList';
import styles from './styles.module.css';

const ListsList = () => {

    const links = [
        ['FAQ', 'Investor Realations', 'Ways to watch', 'Corporate Information', 'Lagal Notices'],
        ['Help Centre', 'Jobs', 'Terms of Use', 'Contact Us', 'Only on Netflix'],
        ['Account', 'Redeem gift cards', 'Privacy', 'Speed Test', 'Advert chices'],
        ['Media Centre', 'Buy gift cards', 'Cookie Preferences', 'Legal Guarantee']
    ]

    return (
        <div className="">
            <div className={ styles.inner }>
                { links.map((item) => {
                    return <LinksList list={ item } key={item[0]} />
                })}
            </div>
        </div>
    );
}

export default ListsList;