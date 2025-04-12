import { CardsStats } from "./01-daisy/stats";

export function ComparisonDaisy01() {
  return (
    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <CardsStats />
      </div>
    </div>
  );
}
