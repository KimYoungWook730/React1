import NameCard from "./NameCard";

export default function SpreadComp(){
    const userData = {
        id: 1,
        name: "Tom",
        age: "25",
        job: "developer",
        location: "seoul"
    };

    return(
        <>
        <NameCard {...userData} />
        </>
    )
}