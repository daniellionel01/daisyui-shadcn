import { Terminal } from "lucide-react";

export function ComponentsCollectionDaisy() {
  return (
    <div className="space-y-4 ">
      <div className="text-xl font-bold">
        <div>DaisyUI</div>
      </div>

      <div className="w-full space-x-2">
        <div className="btn btn-neutral">click</div>
        <div className="btn btn-ghost">click</div>
        <div className="btn btn-outline">click</div>
      </div>

      <div className="w-full space-x-2">
        <div role="alert" className="alert alert-vertical alert-outline sm:alert-horizontal">
          <Terminal className="h-4 w-4" />
          <div>
            <h3 className="font-bold">New message!</h3>
            <div className="text-xs">You have 1 unread message</div>
          </div>
        </div>
      </div>

      <div className="w-full space-x-2">
        <div className="badge badge-sm badge-neutral">Badge</div>
        <div className="badge badge-sm badge-neutral badge-outline">Badge</div>
        <div className="badge badge-sm badge-ghost">Badge</div>
      </div>
    </div>
  );
}
