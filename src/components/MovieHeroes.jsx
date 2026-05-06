//0408 실습

import {heroes} from './HeroesData'

export default function MovieHeroes() {
    const filterTests = heroes.filter(hero => hero.power ===5);
    const listHeroes = filterTests.map (hero =>
        <li key={hero.id}>
            <p>
                {hero.name}의 배역은 {hero.casting} 입니다
            </p>
        </li>
    );

    return(
        <section>
            <h1>영화 속 영웅들</h1>
            <ul>
                {listHeroes}
            </ul>
        </section>
    );
}