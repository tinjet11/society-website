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
            Do you want to cooperate with CSS members on an event or workshop? or perhaps for the larger student body in the field of computer science? We look forward to hearing from you!
            Please send us an email through <LinkPlaceholder url="mailto:admin@unmcss.com" text="admin@unmcss" target="_self" /> and let us know what you'd like to work on with us!
            Please note that we need a minimum of four weeks to prepare for events and activities, for internal procedures.
          </div>

          <div className="px-6">
            <p className='title-header'>How to <span className='title'>Reach</span> us?</p>
            We're reachable from all common social media spaces! For the fastest response, you can get in contact with us by joining our <LinkPlaceholder url="https://discord.com/invite/SfyEyMcQrm" text="Discord community" />.
            Send a message in one of the channels or directly to a committee member, and we'll respond as soon as possible. We also respond fast on our <LinkPlaceholder url="https://instagram.com/unm.css" text="Instagram page" />.
            For other enquiries, feel free to use the contact form below!
            <br></br>
            <br></br>
            <LinkPlaceholder url="https://tally.so/r/mK5aMA" text="Contact Form"/>
            {/* <iframe data-tally-src="https://tally.so/embed/mK5aMA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="492" title="UNM CSS Contact form
"></iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
                /> */}
          </div>

          <div className='px-6'>
            <p className='title-header '>Frequently Asked <span className='title'>Questions</span></p>
            If you have any questions, suggestions, or anything else, don’t hesitate to get in touch with us. We aim to respond to all messages within 24 hours, but it’s possible that we may miss one. If we don’t respond after a couple of days, please send another message!

            <Faq data={faq} />
          </div>

        </div>
      </div>
    </>


  );
}
