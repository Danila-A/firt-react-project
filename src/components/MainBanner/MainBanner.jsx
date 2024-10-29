import Title from '../Title/Title';
import styles from './styles.module.css';
import Text from '../Text/Text';
import GetStarted from '../GetStarted/GetStarted';
import Header from '../Header/Header';

const MainBanner = () => {

    return (
        <section className={ styles.banner }>
            <div className={ styles.banner__bg }>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/NL-nl-20241021-TRIFECTA-perspective_394181aa-685c-4788-a8ca-4bc669d692ba_large.jpg" alt="" />
            </div>
            <div style={{ position: 'absolute', width: '100%', margin: '0 auto', zIndex: 3, top: 0}}>
                <Header />
            </div>
            <div className={ styles.banner__inner }>
                <div className={ styles.wrapper }>
                    <Title />
                    <Text bold text={ "Starts at $8.99. Cancel at any time" } />
                </div>
                <div className={ styles.form }>
                    <GetStarted />
                </div>
            </div>
        </section>
    );
}

export default MainBanner;