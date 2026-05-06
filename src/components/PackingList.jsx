//0408 실습

// 조건에 따라 다른 JSX를 반환하는 방법
import Items from "./Items";


export default function PackingList() {
    return(
        <section>
            <h1>여행 준비 목록</h1>
            <ul>
                <Items name="여분 옷"/>
                <Items name="노트북"/>
                <Items name="컵라면" isPacked="true"/>
            </ul>
        </section>
    );
}