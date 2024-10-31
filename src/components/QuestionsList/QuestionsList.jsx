import Question from '../Question/Question';
import styles from './styles.module.css';

const QuestionsList = () => {
    

    return (
        <div>
            <div className={ styles.inner }>
                <Question  title={ 'What can I watch on Netflix?' } text={ 'Netflix has an extensive library of feature films, documentaries, TV programmes, anime award-winning Netflix originals and more. Watch as mush as you want, anytime you want.' } />
                <Question  title={ 'What is Netflix? '} text={ 'Netflix is a streaming service that offers a wide variety of awaed-winning TV programmes, films, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert - all for one low monthly price. There is always something new to discover, and new TV programmes and films are added every week!' } />
                <Question  title={ 'How much does Netflix cost?' } text={ 'Watch NEtflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans reange from $8.99 to 18.99 a month. No extra consts, no contracts.' } />
                <Question  title={ 'Where can I watch?' } text={ 'Watch anywhere, anytime. Sign in with your Netlix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. YOu can also download your favourite programmes with the IOS or Android app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.' } />
                <Question  title={ 'How do I cancel?' } text={ 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account at any time.' } />
                <Question  title={ 'Is Netflix good for children?' } text={ 'The Netflix Children is exprerience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space. Children is profiles come withPIN-protected paretal controls that let you restict the maturity rating of content children can watch and block sprcific titles you do not wnt children to see.' } />
            </div>
        </div>
    );
}

export default QuestionsList;