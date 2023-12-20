import TextBlock from "../TextBlock";
import Shape from '../../assets/bg-shape.svg'

const Start = () => {
    return ( 
        <div className="start layout">
            <div className="start-row-1">
                <TextBlock title="A Simple Bookmark Manager">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free
                </TextBlock>
                <div className="start-row-1__btn-box">
                    <button className="btn btn-main">Get it on Chrome</button>
                    <button className="btn">Get it on Firefox</button>
                </div>
            </div>
            <div className="start-row-2">
                <img src="images/illustration-hero.svg" alt="bookmark image" className="start-row-2__image"/>
                <img src={Shape} className="start-row-2__shape"/>
            </div>
        </div>
     );
}
 
export default Start;