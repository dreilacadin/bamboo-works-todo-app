import { type Status } from "~/types";

export default function TodoStatus({ status }: { status: Status }) {
  if (status === "pending") {
    return <span className="text-slate-300">{status.toUpperCase()}</span>;
  }

  if (status === "in progress") {
    return <span className="text-amber-500">{status.toUpperCase()}</span>;
  }

  if (status === "completed") {
    return <span className="text-green-500">{status.toUpperCase()}</span>;
  }
}
