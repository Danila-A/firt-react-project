import Form from "../Form/Form";
import SmallText from "../SmallText/SmallText";

const GetStarted = () => {
    return (
        <div>
            <SmallText text={ 'Ready to watch? Enter your email to create or restart your membership.' } />
            <div style={{ paddingTop: '20px' }}> 
                <Form />
            </div>
        </div>
    );
}

export default GetStarted;