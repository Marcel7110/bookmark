const FeaturesRadio = ({name, index, current, setCurrent}) => {
    return ( 
        <div className="features-radio__item">
            <input
             type="radio"
             id={`feature_${index}`}
             name="features"
             value={index}
             onChange={(e) => setCurrent(e.currentTarget.value)}
             checked={index == current}
            />
            <label htmlFor={`feature_${index}`}>
                <h3>{name}</h3>
            </label>
        </div>
     );
}
 
export default FeaturesRadio;