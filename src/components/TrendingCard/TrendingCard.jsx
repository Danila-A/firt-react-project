import styles from './styles.module.css';

const TrendingCard = ({ backgroundImage }) => {
    return (
        <div className={ styles.wrapper }>
            <a href="#">
                <img className={ styles.img } src={ backgroundImage } alt="" />
            </a>
        </div>
    );
}

export default TrendingCard;