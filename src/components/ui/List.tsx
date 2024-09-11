import { cn } from "@utils/cn";

interface ListProps {
  className?: string;
  title?: string;
  description?: string;
}
const List: React.FC<ListProps> = ({ className, title, description }) => {
  return (
    <>
      <div className={cn(className)}>
        <ul className="space-y-4 py-2 text-sm lg:text-base">
          {title && description && (
            <li>
              <span className="font-bold">{title}:</span> {description}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

List.displayName = "List";

export { List };
