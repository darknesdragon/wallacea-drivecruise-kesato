type ChevronRightProps = {
    className?: string;
}

const ChevronRight = ({className} : ChevronRightProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12L7.72 5.03a.75.75 0 0 1 1.06-1.06z" clipRule="evenodd"/></svg>
    )
}

export default ChevronRight