export enum InputTypes{
    TEL = "tel",
    NAME = "name",

}

export interface FormInput {
    element: string
    type: string
    placeholder: string
    label : string
    id: string
}