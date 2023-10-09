import  "./TextSlot.css"


const TextSlot = (props) => {
    return (
       <div className="text-slot">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
       </div>

    )
}

export default TextSlot