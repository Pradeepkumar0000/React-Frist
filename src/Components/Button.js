


const Button = (props)=>{
    console.log(props,typeof props)
return(
    <div>
    <button>{props.name}</button>
    {props.children}
    </div>
)
}


export default Button