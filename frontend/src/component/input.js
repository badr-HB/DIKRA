export default function HOME({types,place,style,valueit,setfunction}) {
    return (
        <div>
            <input type={types} placeholder={place} className={`${style}`} id="input" value={valueit} onChange={setfunction} />
        </div>
    )
}