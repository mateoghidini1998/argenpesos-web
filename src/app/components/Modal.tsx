
export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed  z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg relative">
                {children}
            </div>
        </div>
    );
}
