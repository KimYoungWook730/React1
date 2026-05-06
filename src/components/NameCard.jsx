export default function NameCard ({ ...userData}) {
    return(
        <div>
            <h2>사용자 정보</h2>
            <p>ID: {userData.id}</p>
            <p>이름: {userData.name}</p>
            <p>나이: {userData.age}</p>
            <p>직업: {userData.job}</p>
            <p>거주지: {userData.location}</p>
        </div>
    )
}