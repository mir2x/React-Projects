export default function TabButton({children, isSelected, onSelect}) {
    return (
        <button className={isSelected ? "active":undefined} onClick={onSelect}>{children}</button>
    );
}