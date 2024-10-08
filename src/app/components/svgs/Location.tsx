type LocationProps = {
    width?: number;
    height?: number;
    className?: string; 
}

export default function Location({ width, height, className }: LocationProps ) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className}  width={width} height={height} viewBox="0 0 42 43" fill="none">
            <path d="M34.125 21.5C34.125 30.2815 24.5205 36.2047 21.7436 37.7337C21.2745 37.992 20.7255 37.992 20.2564 37.7337C17.4795 36.2047 7.875 30.2815 7.875 21.5C7.875 13.625 14.2345 8.375 21 8.375C28 8.375 34.125 13.625 34.125 21.5Z" stroke="white" strokeWidth="2"/>
            <circle cx="21" cy="21.5" r="6" stroke="white" strokeWidth="2"/>
        </svg>
    )
}