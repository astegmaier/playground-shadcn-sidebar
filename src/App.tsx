import { BigList } from "./BigList"

export const App = () => {
  return (
    <div className="flex-col">
      <div className="p-3 bg-blue-300">
        17Reviews
      </div>
      <div className="p-3 bg-red-300">Sidebar</div>
      <div className="p-3 bg-green-300"><BigList /></div>
    </div>
  )
}


