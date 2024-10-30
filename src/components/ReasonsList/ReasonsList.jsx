import ReasonsCard from '../ReasonsCard/ReasonsCard';
import styles from './styles.module.css';

const ReasonsList = () => {
    return (
        <div className={ styles.list }>
            <ReasonsCard title={ 'Stories tailored to your taste' } star />
            <ReasonsCard title={ 'Cancel or switch plans anytime' } hands />
            <ReasonsCard title={ 'A place just for children' } heart />
            <ReasonsCard title={ 'For your phone, tablet, laptop and TV' } tv />
        </div>
    );
}

export default ReasonsList;