export default function Button({
    text,
    type,
    disabled,
    onClick,
    className = "",
}: {
    text: string,
    type?: "submit" | "button" | undefined,
    disabled?: boolean,
    onClick?: () => void,
    className?: string,

}) {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`relative hover:-translate-y-2 self-start flex h-[50px] items-center bg-transparent border-text border-2 justify-center p-6 w-auto rounded-3xl text-xl font-medium transition-all duration-150 hover:bg-primary hover:border-transparent hover:drop-shadow-primary ` + className}>
            <p className="z-10">
                {text}
            </p>
        </button>
    )
}