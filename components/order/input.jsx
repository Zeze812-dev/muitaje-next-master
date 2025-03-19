export default function Input({children, name="", type = "text", required=false}) {
    return (
        <div className="w-3/5">
            <h3>{children}</h3>
            <input required={required} type={type} name={name} className="w-full bg-stone-300 border-l-2 border-t-2 border-stone-400 hover:outline-0"/>
        </div>
    )
}