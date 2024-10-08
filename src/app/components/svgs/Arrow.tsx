type ArrowProps = {
    stroke?: string
    className?: string;
}

export default function Arrow({ stroke, className }: ArrowProps){
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" fill="none">
        <path d="M17 48L33 32L17 16" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}