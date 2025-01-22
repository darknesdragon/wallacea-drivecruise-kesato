type CaretRightProps = {
    className?: string
}

const CaretRight = ({ className } : CaretRightProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m144 448l224-192L144 64z"/></svg>
    )
}

export default CaretRight;