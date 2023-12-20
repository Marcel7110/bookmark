import TextBlock from '../TextBlock'
import ExtensionCard from '../ExtensionCard'

const Extensions = () => {
    return ( 
        <div className="extensions container">
        <TextBlock title='Download the extension'>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </TextBlock>
            <div className="extensions-box">
                <ExtensionCard title='Chrome' version='62' img='images/logo-chrome.svg'/>
                <ExtensionCard title='Firefox' version='55' img='images/logo-firefox.svg'/>
                <ExtensionCard title='Opera' version='46' img='images/logo-opera.svg'/>
            </div>
        </div>
     );
}
 
export default Extensions;