import OderUp from "./OrederUp";

export default function Kiosk(){
    return(
        <section>
            <h2>치즈버거 세트 메뉴를 주문하세요.</h2>
            <p>일반 세트 : </p>
            <OderUp order={1} />
            <p>패밀리 세트 : </p>
            <OderUp order={2} />
            <p>이용해 주셔서 감사합니다.</p>
        </section>
    );
}