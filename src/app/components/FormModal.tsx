type FormModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function FormModal({ isOpen, onClose, children }: FormModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-[150px] text-black">
            <div className="bg-white p-8 rounded-lg w-[620px]">
                {children}
            </div>
        </div>
    )
}