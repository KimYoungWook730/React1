//0408 실습

// 조건에 따라 다른 JSX를 반환하는 방법

// export default function Items({name, isPacked}) {
//     return <li>{name} {isPacked ? "☑️" : ""}</li>;
// }

// export default function Items({name, isPacked}) {
//     return(
//         <li>
//             {isPacked ? ( 
//                 <del>
//                     {name + "✅"}
//                 </del>
//             ) : (
//                 name
//             )}
//         </li>
//     )
// }

export default function Items({name, isPacked}) {
    let itemContents = name;
    if (isPacked) {
        itemContents = <del>{name + "✅"}</del>
    }
    return (
        <li>{itemContents}</li>
    );
}