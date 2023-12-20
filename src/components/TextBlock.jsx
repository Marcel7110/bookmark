const TextBlock = ({title, children}) => {
    return ( 
        <div className="text-block">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
     );
}
 
export default TextBlock;