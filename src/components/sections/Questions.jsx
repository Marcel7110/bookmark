import data from '../../data/questions.json'
import AccordionItem from '../AccordionItem'
import TextBlock from '../TextBlock';

const Questions = () => {
    return ( 
        <div className="questions container">
        <TextBlock title="Frequently Asked Questions">
                Here ara some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
            </TextBlock>
            <div className="questions-accordion">
                {data.map((item, index) => (
                    <AccordionItem title={item.title} content={item.content} key={index}/>
                ))}
            </div>
            <button className='btn btn-main'>More Info</button>
        </div>
     );
}
 
export default Questions;