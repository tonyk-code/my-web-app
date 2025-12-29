import { LayoutGrid, List } from "lucide-react";
import type { ViewMode } from "../../types/Types";

interface ViewToggleProp {
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

export default function ViewToggle({ view, setView }: ViewToggleProp) {
  return (
    <div className="flex bg-white/10 rounded-lg text-white w-fit p-1 gap-1">
      <button
        onClick={() => setView("grid")}
        className={`${
          view === "grid"
            ? "text-[#102226] bg-[#b7ff03]"
            : "text-white bg-transparent hover:bg-white/20"
        } p-2 rounded-md`}
      >
        <LayoutGrid size={20} />
      </button>
      <button onClick={() => setView("list")} className={`${
          view === "list"
            ? "text-[#102226] bg-[#b7ff03]"
            : "text-white bg-transparent hover:bg-white/20"
        } p-2 rounded-md`}>
        <List size={20} />
      </button>
    </div>
  );
}
