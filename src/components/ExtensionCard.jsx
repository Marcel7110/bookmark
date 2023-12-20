const ExtensionCard = ({title, version, img}) => {
    return ( 
        <div className="extension-card">
            <div className="extension-card-row-1">
                <img src={img} alt={title}/>
                <h2>Add to {title}</h2>
                <p>Minimum version {version}</p>
            </div>
            <div className="extension-card-row-2">
                <button className="btn btn-main">
                    Add & Install Extension
                </button>
            </div>
        </div>
     );
}
 
export default ExtensionCard;