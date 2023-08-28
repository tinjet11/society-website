import getFaqs from "@/actions/getFaqs";
import LinkPlaceholder from "@/components/ui/link-placeholder";
import Faq from "./components/faq";
import { Metadata } from "next";

export const revalidate = 0

export const metadata:Metadata = {
  title: 'Contact Us | UNM Computer Science Society',
  description:'We are open to collaboration & sponsorship. Feel free to connect with us'
}

export default async function Home() {
  const faq = await getFaqs();
  return (
    <>
      <div className="container">

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

        <div className='px-6'>
          <p className='title-header '>Frequently Asked <span className='title'>Question</span></p>
          <Faq data={faq} />
        </div>

      </div>
      </div>
    </>


  );
}
