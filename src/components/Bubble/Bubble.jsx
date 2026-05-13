import style from "./Bubble.module.css"

export default function Bubble() {
    return(
        <>
            <h1 className={style.title}>Bubble</h1>
            <nav className={style.navBar}>
                <button className={style.button}>버튼1</button>&nbsp;
                <button className={style.button}>버튼2</button>
            </nav>
        </>
    );
}