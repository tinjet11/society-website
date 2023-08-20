import getCommittees from "@/actions/getCommittee";
import getPositions from "@/actions/getPosition";
import CommitteePage from "@/app/about-us/components/Committee";
import Position from "@/app/about-us/components/Position";
import Faq from "./components/faq";
import getFaqs from "@/actions/getFaqs";


export const revalidate = 0

export default async function Home() {
  const committee = await getCommittees();
  const position = await getPositions();
  const faq = await getFaqs();
  return (
    <>
      <div className='container flex-col'>
        <div className="px-6">
          <p className='title-header '>Meet our <span className="title">Team</span></p>
          <CommitteePage data={committee} />
        </div>
        <div className="px-6">
          <p className='title-header '>Open <span className="title">Positions!</span></p>
          <Position data={position} />
        </div>

        <div className='px-6'>
          <p className='title-header '>Our <span className="title">Mission</span> and <span className='text-[#E981D9]'>Vision</span></p>
          <p>
            CSS has focused towards a technical approach in improving the Computer Science student life. Provided through workshops, talks and industrial trips with various collaborations, CSS proved to be a society where computer science students could enhance their knowledge and insight within the realm of computer science.
            As a staple tradition, CSS will be collaborating with the School of Computer Science (SoCS)
            for an event called ‘CS Week’ where all students in SoCS have a chance to meet seniors
            through ice breaking events, guest talks from tech industries and garnering new skills
            through workshops.
          </p>
          <br />
          <p>
            The Computer Science Society, in continuing this goal, will focus on creating a community of
            computer science and tech enthusiasts within the University. On top of hosting multiple
            technical talks and workshops, CSS would focus on building a community through hosting society projects and activities. A community with the love and passion for everything computer science.
          </p>
        </div>

        <div className='px-6'>
          <p className='title-header '>Frequently Asked <span className='title'>Question</span></p>
          <Faq data={faq} />
        </div>
      </div>

    </>
  );
}
