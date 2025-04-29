import { BigList } from "./BigList";

export const App = () => {
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr] h-screen w-screen overflow-hidden">
      <div className="p-3 bg-blue-300 col-span-2">17Reviews</div>
      <div className="p-3 bg-red-300 overflow-auto max-h-full">
        <BigList />
      </div>
      <div className="p-3 bg-green-300 overflow-auto max-h-full">
        <BigList expanded />
      </div>
    </div>
  );
};
