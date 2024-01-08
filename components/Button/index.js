export default function Button({
    title="test",
    color
}) { 
    return (
        <button style={{backgroundColor: color}}>{title}</button>
    )
}