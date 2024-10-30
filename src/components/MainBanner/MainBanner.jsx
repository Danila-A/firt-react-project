import Title from '../Title/Title';
import styles from './styles.module.css';
import Text from '../Text/Text';
import GetStarted from '../GetStarted/GetStarted';
import Header from '../Header/Header';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

const MainBanner = () => {

    return (
        <section className={ styles.banner }>

            <div className={ styles.background }>
                <BackgroundImage />
            </div>

            <div className={ styles.inner }>
                
                <div className={ styles.header }>
                    <Header />
                </div>

                <div className={ styles.wrapper }>
                    <Title />
                    <Text bold text={ "Starts at $8.99. Cancel at any time" } />
                    <div className={ styles.form }>
                        <GetStarted />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default MainBanner;