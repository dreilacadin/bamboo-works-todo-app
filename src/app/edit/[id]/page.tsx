import { FormEvent } from "react";
import EditForm from "~/app/_components/EditForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  return <EditForm id={id} />;
}
