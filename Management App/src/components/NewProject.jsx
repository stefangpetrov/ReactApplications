import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({onAdd}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '')
        {
            modal.current.open();
            return;
        }
        onAdd({
            title : enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
  return (
    <>
        <Modal buttonCaption={"Close"} ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-700 mb-4">Oops, invalid value</p>
            <p className="text-stone-700 mb-4">Provide valid value pls bro</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title"/>
                <Input ref={description} label="Description" isTextArea/>
                <Input ref={dueDate} label="Due Date" type="date"/>
            </div>
        </div>
    </>
  )
}
