import Selects from '../Selects/Selects';
import SubTitle from '../SubTitle/SubTitle';
import TrendingList from '../TrendingList/TrendingList';
import styles from './styles.module.css';

const TrendingNow = () => {
    return (
        <section className={ styles.trending }>
            <div className={ styles.inner }>
                <SubTitle text={ 'Trending now' } />
                <Selects />
                <TrendingList />
            </div>
        </section>
    );
}

export default TrendingNow;