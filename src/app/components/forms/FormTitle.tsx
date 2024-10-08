type FormTitleProps = {
    title: string;
}

export default function FormTitle({ title }: FormTitleProps) {
    return (
        <h2 className="text-lightblue-primary text-[32px] font-bold mb-4">{title}</h2>
    )
}