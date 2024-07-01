import { NewTaskCard } from "../Add-new-task-card/NewTaskCard";
import { Card } from "../Card/Card";

export function ParentTaskCards({ isList }) {
  return (
    <section
      className={`grid  ${
        isList
          ? "grid-cols-1"
          : "grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 items-end sm:gap-4 xl:gap-6"
      } w-full`}
    >
      <Card isNew={true} isList={isList} />
      <Card isNew={false} isList={isList} />
      <Card isNew={false} isList={isList} />
      <Card isNew={false} isList={isList} />
      <Card isNew={false} isList={isList} />
      <NewTaskCard isList={isList} />
    </section>
  );
}
