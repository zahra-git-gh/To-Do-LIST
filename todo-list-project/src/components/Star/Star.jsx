import './Star.css';
export function Star({isImportant, isToday}){
    return<>
    <div style={{backgroundColor:isImportant?'red':isToday?'white':'gray'}} className={`${isImportant? 'star':"star-solid"}  w-5 h-5`}></div>
    </>
}