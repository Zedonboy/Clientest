import { useEffect, useState } from "react";
import InputSelectorBtn from "../components/InputSelectorBtn";
import Modal from "../components/Modal";
import eventbus from "../utils/event.js";
import { FormInput } from "../utils/types";
const inputypes = [
  {
    symbol: "TI",
    name: "Text Input",
    data: {
      element: "input",
      label: "Text Input",
      id: "deftfdyeudewr",
      options: [],
    },
  },

  {
    symbol: "S",
    name: "Selector",
    data: {
      id: "vfdvvdbvhfdbj",
      element: "select",
      label: "Text Input",
      options: [{name: "Canada"}]
    },
  },
];
export default function FormCreate() {
  const [showInputModal, setShowInputModal] = useState(false);
  const [formInputs, setFormInput] = useState([]);
  useEffect(() => {
    eventbus.on("formcreate.opendialog", () => {
      setShowInputModal(true);
    });

    return () => {
      eventbus.remove("formcreate.opendialog");
    };
  });
  return (
    <div className="p-6 md:p-24 flex flex-col">
      {showInputModal ? (
        <Modal
          onClose={(e) => {
            setShowInputModal(false);
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white relative w-full h-full md:w-2/3 md:h-2/3 overflow-hidden shadow rounded-lg"
          >
            <button
              onClick={(e) => {
                setShowInputModal(false);
              }}
              type="button"
              className="inline-flex absolute mt-3 ml-4 top-0 left-0 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex absolute mt-3 mr-4 top-0 right-0 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Done
            </button>
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-center">
                <div className="w-1/2">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="h-full w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-8 overscroll-auto">
                {inputypes.map((m) => (
                  <InputSelectorBtn
                    icon={m.symbol}
                    name={m.name}
                    onClick={(e) => {}}
                    onSelect={(e) => {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
      <input
        placeholder="Type Title"
        className="outline-none bg-transparent text-5xl font-light"
      />
      <textarea
        rows={2}
        placeholder="Description"
        className="outline-none border-transparent resize-none mt-8 border-none focus:ring-0 focus:border-none bg-transparent text-3xl font-light"
      />
      <div className="space-y-6 sm:space-y-5">
        {inputypes.map((m) => {
          if (m.data.element === "input")
            return (
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor={m.data.id}
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  {m.data.label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id={m.data.id}
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            );

          if (m.data.element === "select")
            return (
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor={m.data.id}
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  {m.data.label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id={m.data.id}
                    className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  >
                   {m.data.options.map(v => (
                    <option>{v.name}</option>
                   ))}
                  </select>
                </div>
              </div>
            );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={(e) => {
            setShowInputModal(true);
          }}
          className="hover:text-indigo-600 text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
