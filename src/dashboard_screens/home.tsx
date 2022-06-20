import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Modal from "../components/Modal";
import {useNavigate} from "react-router-dom"
export default function DashboardHome() {
  const navigate = useNavigate()
  return (
    <div className="flex-1 flex items-stretch overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        {/* Primary column */}
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Forms</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new project or using templates
          </p>
          <div className="mt-6">
            <button
              onClick={(e) => {
                navigate("/dashboard/form-create")
              }}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              New Form
            </button>
            <button
              type="button"
              className="inline-flex ml-4 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Use Templates
            </button>
          </div>
        </div>

       
      </main>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
        {/* Your content */}
      </aside>
    </div>
  );
}
