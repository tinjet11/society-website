import LinkPlaceholder from "@/components/ui/link-placeholder";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="container"></div>
      <div className="flex flex-col">

        <div className="px-6">
        <p className='title-header'>Want to <span className='text-[#E981D9]'>Collaborate?</span></p>
        We are open for collaboration or sponsorship for events related to tech. Feel free to email 
        to <LinkPlaceholder text="president@unmcss.com" url=""/>
        </div>

        <div className="px-6">
        <p className='title-header'>How to <span className='title'>Reach</span> us?</p>

        Email: 


        </div>

      </div>
    </>


  );
}
