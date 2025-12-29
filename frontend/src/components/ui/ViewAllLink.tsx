import { Link } from "react-router-dom";

interface ViewAllLinkProps {
  to: string;
  label?: string;
  className?: string;
}

export default function ViewAllLink({
  to,
  label = "View all",
  className = "",
}: ViewAllLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-1 w-17 text-xs font-medium text-[#99a1af] hover:text-white/80 hover:gap-2 transition-all absolute top-3 right-3 ${className}`}
    >
      {label}
      <span className="text-sm">→</span>
    </Link>
  );
}
