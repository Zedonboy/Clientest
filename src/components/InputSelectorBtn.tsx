import { ReactNode, useState } from "react";

interface IProps {
  name : string
  icon : ReactNode
  onClick ?: (e : any) => void
  onSelect ?: (e : boolean) => void
}
export default function InputSelectorBtn(props : IProps) {
  const [selected, setSelected] = useState(false)
  return (
    <button onClick={props.onClick} className="col-span-1 flex shadow-sm rounded-md">
      <div
        className={
          "flex-shrink-0 flex items-center h-full justify-center w-8 text-white text-sm font-medium rounded-l-md bg-blue-600"
        }
      >
        {props.icon}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <div className="text-gray-900 font-medium hover:text-gray-600">
            {props.name}
          </div>
          {/* <p className="text-gray-500">Members</p> */}
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open options</span>
            <input
            onChange={
              e => {
                props?.onSelect?.(!selected)
                setSelected(!selected)
              }
            }
            checked={selected}
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </button>
        </div>
      </div>
    </button>
  );
}
