import { Terminal } from "lucide-react";
import { BreadcrumbEllipsis } from "./ui/breadcrumb";

export function ComponentsCollectionDaisy() {
  return (
    <div className="space-y-8 max-w-[500px]">
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

      <div className="w-full">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <BreadcrumbEllipsis className="h-4 w-4" />
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>Breadcrumb</li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className="w-full">
        <input type="email" placeholder="Email" className="input w-full max-w-xs" />
      </div>

      <fieldset className="w-full space-y-2">
        <div className="flex items-center space-x-2">
          <input type="radio" name="radio-1" className="radio radio-sm" />
          <label htmlFor="r1" className="text-sm font-medium leading-none">
            Radio
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" name="radio-2" className="radio radio-sm" defaultChecked />
          <label htmlFor="r2" className="text-sm font-medium leading-none">
            Radio
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="radio" name="radio-3" className="radio radio-sm" />
          <label htmlFor="r3" className="text-sm font-medium leading-none">
            Radio
          </label>
        </div>
      </fieldset>

      <div>
        <select defaultValue="Pick a color" className="select w-[180px]">
          <option disabled={true}>Select a fruit</option>
          <option>Apple</option>
          <option>Banana</option>
          <option>Blueberry</option>
        </select>
      </div>

      <div className="w-full">
        <div className="flex items-center space-x-2">
          <input type="checkbox" defaultChecked className="toggle toggle-sm" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Airplane Mode
          </label>
        </div>
      </div>

      <div className="card bg-base-100 shadow-sm w-[350px]">
        <div className="card-body">
          <div className="space-y-1">
            <h2 className="card-title">Create project</h2>
            <p className="text-sm text-base-content/70">Deploy your new project in one-click.</p>
          </div>
          <div className="py-4">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
          </div>
          <div className="card-actions justify-between">
            <button className="btn btn-outline">Cancel</button>
            <button className="btn btn-neutral">Deploy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
