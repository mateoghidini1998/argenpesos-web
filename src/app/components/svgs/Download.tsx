type DownloadSVGPropTypes = {
    className?: string;
    width?: number
    height?: number
}

export default function DownloadSVG ({ className, width, height }: DownloadSVGPropTypes) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 28 28" fill="none">
            <path d="M13.992 16.4769L13.2211 17.2478L13.992 18.0187L14.7629 17.2478L13.992 16.4769ZM15.0822 6.12024C15.0822 5.51815 14.5941 5.03006 13.992 5.03006C13.3899 5.03006 12.9018 5.51815 12.9018 6.12024L15.0822 6.12024ZM7.46741 11.4941L13.2211 17.2478L14.7629 15.7061L9.00915 9.95234L7.46741 11.4941ZM14.7629 17.2478L20.5166 11.4941L18.9748 9.95234L13.2211 15.7061L14.7629 17.2478ZM15.0822 16.4769L15.0822 6.12024L12.9018 6.12024L12.9018 16.4769L15.0822 16.4769Z" fill="#4DC4F1"/>
            <path d="M5.93677 18.7782L5.93677 19.9289C5.93677 21.2 6.96718 22.2304 8.23825 22.2304L19.7457 22.2304C21.0168 22.2304 22.0472 21.2 22.0472 19.9289V18.7782" stroke="#4DC4F1" strokeWidth="2.18036"/>
        </svg>
    )
}