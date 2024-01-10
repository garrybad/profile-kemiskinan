import Image from 'next/image';
import React from 'react';
import { saveAs } from "file-saver";

interface Props {
    id: string;
    img: string;
}

function Dialog(props: Props) {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = props.img;
        link.download = 'downloaded-image';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const saveFile = () => {
        saveAs(
            props.img,
            props.id + ".jpg"
        );
    };

    return (
        <dialog id={props.id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl bg-neutral-50">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                {/* <p className="py-4">ID : {props.id}</p> */}
                <Image className="w-full h-[60vh] object-cover mt-4" sizes="100vw" src={props.img} width={0} height={0} alt='Poverty' />
                <div className='mt-2 text-end'>
                    <button className="btn bg-green-500 border-none text-white hover:bg-green-500 hover:brightness-75" onClick={saveFile}>Download</button>
                </div>
            </div>
        </dialog>
    )
}

export default Dialog