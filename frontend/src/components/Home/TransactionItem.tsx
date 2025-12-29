export default function TransactionItem({
  title,
  date,
  amount,
  status,
}: {
  title: string;
  date: string;
  amount: number;
  status: "completed" | "pending" | "recurring";
}) {
  return (
    <div className="grid grid-cols-4 py-4 border-b border-b-gray-100 lg:gap-[5vw] hover:bg-gray-50 hover:transition-all text-sm">
      <span className=" text-gray-600">{title}</span>
      <p className="text-gray-400">{date}</p>
      <p
        className={`font-semibold ${
          status === "completed"
            ? "text-green-500"
            : status === "recurring"
            ? "text-red-500"
            : "text-gray-700"
        }`}
      >
        {status === "completed" ? "+" : status === "recurring" ? "-" : ""}$
        {amount.toLocaleString()}
      </p>
      <span
        className={`${
          status === "completed"
            ? "text-green-600 bg-green-50"
            : status === "recurring"
            ? "text-blue-500 bg-blue-50"
            : "text-amber-600 bg-amber-50"
        } px-2 py-0.5 rounded text-xs uppercase md:w-30 flex justify-center items-center h-7`}
      >
        {status}
      </span>
    </div>
  );
}
