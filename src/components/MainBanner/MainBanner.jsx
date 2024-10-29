import Title from '../Title/Title';
import styles from './styles.module.css';
import Text from '../Text/Text';

const MainBanner = () => {

    return (
        <section className={ styles.banner }>
            <div className={ styles.banner__bg }>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/NL-nl-20241021-TRIFECTA-perspective_394181aa-685c-4788-a8ca-4bc669d692ba_large.jpg" alt="" />
            </div>
            <div className={ styles.banner__inner }>
                <div className={ styles.wrapper }>
                    <Title />
                    <Text text={"Starts at $8.99. Cancel at any time"} />
                </div>
                <div className={ styles.form }>

                </div>
            </div>
        </section>
    );
}

export default MainBanner;