

const Container = (props) => {

    console.log(props);
    
    return (
        <div
            id="container"
            className={props.className}
            style={{ 
                width: props.width, 
                height: props.height, 
                backgroundColor: props.bgColor
            }}>
            {props.children}
        </div>
    )
}

export default Container;