import Arrow from "./svgs/Arrow";

type FAQProps = {
    text: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FAQ({ text, content, isOpen, onToggle }: FAQProps) {
    return (
        <div className="w-full">
            <div className="border-[2px] border-solid border-[#00ADEE] rounded-[13px]">
                <div 
                    className="flex items-center justify-between w-full gap-2 md:px-10 px-2 py-2 md:py-5 cursor-pointer"
                    onClick={onToggle}
                >
                    <p className="text-lightblue-primary text-center  text-base md:text-[28px] md:text-left">
                        {text}
                    </p>
                    <Arrow stroke="#00ADEE" className={`h-[40px] w-[40px] transform ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300`}/>
                </div>
                {isOpen && (
                    <div className="px-10 py-5 max-w-[1200px] text-[#888] text-sm md:text-[24px] transition-max-height duration-300 ease-in-out overflow-hidden md:leading-8">
                        <p>{content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
