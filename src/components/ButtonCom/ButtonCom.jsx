// import style from './ButtonCom.module.css'

// function handleClick() {
//     alert("버튼 클릭")
// }

// export default function ButtonCom() {
//     return (
//         <>
//             <h1 className={style.title}>ButtonCom 컴포넌트</h1>
//             <nav className={style.navBar}>
//                 <button onClick={handleClick} className={style.myButton}>버튼1</button>
//                 <button onClick={handleClick} className={style.myButton}>버튼2</button>
//             </nav>
//         </>
//     )
// }

// export default function ButtonCom ({message, children}) {
//     function handleClick() {
//         alert(message);
//     }
//     return(
//         <button onClick={handleClick}>
//             {children}
//         </button>
//     )
// }

export default function Button({handle, message, children}) {
    return(
        <button onClick={ () => handle({message})}>
            {children}
        </button>
    );
}