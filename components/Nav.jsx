import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <div className="flex-between w-full mb-16 pt-1">
                <div className="flex gap-3 flex-center">
                    <Image
                        src="/vscode-logo.svg"
                        alt="CSS logo"
                        width={15}
                        height={15}
                        className="bg-black ml-1 mt-1"
                    ></Image>
                    <p className="nav_text">File</p> 
                    <p className="nav_text">Edit</p> 
                    <p className="nav_text">Selection</p> 
                    <p className="nav_text">View</p>
                    <p className="nav_text">Go</p> 
                    <p className="nav_text">Run</p>
                    <p className="nav_text">Terminal</p> 
                    <p className="nav_text">Help</p>   
                </div>
            </div>
        </>
    )
}

