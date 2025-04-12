import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function ComponentsCollectionShadcn() {
  return (
    <div className="space-y-4 ">
      <div className="text-xl font-bold">
        <div>Shadcn/ui</div>
      </div>

      <div className="w-full space-x-2">
        <Button>click</Button>
        <Button variant="ghost">click</Button>
        <Button variant="outline">click</Button>
      </div>

      <div className="w-full space-x-2">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
      </div>

      <div className="w-full space-x-2">
        <Badge>Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
      </div>
    </div>
  );
}
