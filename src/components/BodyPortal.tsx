import ReactDOM from 'react-dom'
export default function BodyPortal(props : any) {
    return ReactDOM.createPortal(props.children, document.body)
};
