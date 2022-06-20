import BodyPortal from "./BodyPortal";
import {Transition} from "@headlessui/react"
import { Fragment, ReactNode } from "react";

interface IProps {
    onClose ?: () => void
    children : ReactNode
}
export default function Modal(props : IProps ) {
  return (
    <BodyPortal>
        <Transition show={true} appear onClick={(e : any) => {
            props?.onClose?.()
        }} as="section" enter="duration-700" enterFrom="backdrop-blur-none" enterTo="backdrop-blur" className="absolute p-4 backdrop-blur bg-black/30 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
            <Transition.Child as={Fragment} enter="transition-transform duration-500 delay-400" enterFrom="scale-0" enterTo="scale-100">
            {props?.children}
            </Transition.Child>
        </Transition>
    </BodyPortal>
  );
}
