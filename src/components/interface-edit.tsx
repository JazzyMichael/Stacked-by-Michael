import { useInterfaceSelection } from "@/hooks/InterfaceSelection";

export default function InterfaceEdit() {
  const { selected } = useInterfaceSelection();

  if (!selected) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold text-gray-400">
          No interface selected
        </span>
      </div>
    );
  }

  const { category, item } = selected;
  const Icon = item.icon;

  return (
    <div className="flex flex-col h-full bg-white">
      <span className="flex gap-2 border-b-1 px-6 py-4 text-sm">
        <Icon size={20} />
        <span className="font-semibold">{item.name}</span>
        <span className="font-medium text-gray-500">{item.description}</span>
      </span>

      <div className="flex h-full items-center justify-center p-7">
        {category === "User Interfaces" && (
          <div className="border-1 shadow-md grow h-full rounded-md flex justify-center items-center">
            {item.name} not supported yet, try API Connections or Legacy
            Interfaces
          </div>
        )}

        {category === "API Connections" && (
          <div className="border-1 shadow-md grow h-full rounded-md flex justify-center items-center">
            <span className="text-gray-500 font-medium text-[15px] flex items-center gap-3">
              <div className="rounded-full bg-accent border-1 p-2">
                <Icon stroke="black" size={20} />
              </div>
              {item.description}
            </span>
          </div>
        )}

        {category === "Legacy Interfaces" && (
          <div className="border-1 shadow-md grow h-full rounded-md flex justify-center items-center">
            <span className="text-gray-500 font-medium text-[15px]">
              This UI type is legacy and will be removed in the future.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
