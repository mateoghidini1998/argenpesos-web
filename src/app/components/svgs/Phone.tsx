type PhonePropTypes = {
    className?: string;
    width?: number;
    height?: number;
}
export default function PhoneSVG({ className, width, height }: PhonePropTypes) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 57 109" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_30_320)">
        <path d="M45.7691 0.0150146H11.2309C5.39233 0.0150146 0.634308 4.77303 0.634308 10.6116V98.3885C0.634308 104.236 5.39233 108.985 11.2309 108.985H45.7691C51.6171 108.985 56.3657 104.227 56.3657 98.3885V10.6116C56.3657 4.76356 51.6077 0.0150146 45.7691 0.0150146ZM32.9547 101.232H24.0548C22.7563 101.232 21.6947 100.18 21.6947 98.8719C21.6947 97.5639 22.7468 96.5118 24.0548 96.5118H32.9547C34.2532 96.5118 35.3148 97.5639 35.3148 98.8719C35.3148 100.18 34.2627 101.232 32.9547 101.232ZM52.7735 90.6259H4.22652V17.3789H52.7735V90.6259Z" fill="#888888"/>
        </g>
        <defs>
        <clipPath id="clip0_30_320">
        <rect width="55.7314" height="108.97" fill="white" transform="translate(0.634308 0.0150146)"/>
        </clipPath>
        </defs>
        </svg>
        
    )
}