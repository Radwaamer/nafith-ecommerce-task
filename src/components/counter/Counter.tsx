import SmallBtn from "@components/smallBtn/SmallBtn"

const Counter = () => {
    return (
        <div className="flex items-center justify-between gap-4">
            <SmallBtn>+</SmallBtn>
            <span className="font-bold ">0</span>
            <SmallBtn>-</SmallBtn>
        </div>
    )
}

export default Counter