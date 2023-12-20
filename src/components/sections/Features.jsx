import { useState } from 'react';
import data from '../../data/features.json'
import FeaturesRadio from '../FeaturesRadio';
import TextBlock from '../TextBlock'
import Shape from '../../assets/bg-shape.svg'

const Features = () => {
    const [current,setCurrent] = useState(0)

    return ( 
        <div className="features container">
            <TextBlock title='Features'>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </TextBlock>
            <div className='features-radio'>
                {data.map((item, index) => (
                    <FeaturesRadio setCurrent={setCurrent} current={current} name={item.sub} index={index} key={index}/>
                ))}
            </div>
            <div className='features-box layout'>
                <div className='features-box-row-1'>
                    <img src={data[current].img} alt={data[current].name} className='features-box-row-1__image'/>
                    <img src={Shape} alt='' className='features-box-row-1__shape'/>
                </div>
                <div className='features-box-row-2'>
                    <TextBlock title={data[current].title}>
                        {data[current].content}
                    </TextBlock>
                    <button className='btn btn-main'>More Info</button>
                </div>
            </div>
        </div>
     );
}
 
export default Features;