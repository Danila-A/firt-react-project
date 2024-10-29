import Form from "../Form/Form";
import Text from "../Text/Text";

const GetStarted = () => {
    return (
        <div>
            <div style={{ fontSize: '16px' }}>
                <Text text={ 'Ready to watch? Enter your email to create or restart your membership.' } />
            </div>
            <div style={{ paddingTop: '20px' }}> 
                <Form />
            </div>
        </div>
    );
}

export default GetStarted;