import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

export function ComponentsCollection() {
  return (
    <div className="space-y-4 ">
      <div className="flex w-full space-x-4 text-xl font-bold">
        <div className="w-full">
          <div>Shadcn/ui</div>
        </div>
        <div className="w-full">
          <div>DaisyUI</div>
        </div>
      </div>

      <div className="flex w-full space-x-4">
        <div className="w-full">
          <Button>click</Button>
        </div>
        <div className="w-full">
          <div className="btn btn-neutral">click</div>
        </div>
      </div>

      <div className="flex w-full space-x-4">
        <div className="w-full">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>
        </div>
        <div className="w-full">
          <div role="alert" className="alert alert-vertical alert-outline sm:alert-horizontal">
            <Terminal className="h-4 w-4" />
            <div>
              <h3 className="font-bold">New message!</h3>
              <div className="text-xs">You have 1 unread message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
