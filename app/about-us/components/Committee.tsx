
import { CommitteeType } from '@/types'
import Committee_card from './Committee_card'
import LinkPlaceholder from '@/components/ui/link-placeholder';


interface Props {
    data: CommitteeType[];
}

const CommitteePage = ({ data }: Props) => {

    return (
        <div className='container'>
            <div className='flex flex-col m-2 rounded-lg p-4'>

                {data.length === 0 && <p> Follow us on <LinkPlaceholder text='social media' url='https://linktr.ee/unmcss' /> for latest update!</p>}

                <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 mt-10">

                    {data &&
                        data
                            .sort((a, b) => parseInt(a.order) - parseInt(b.order)) // Convert to numbers and sort
                            .map((member) => (
                                <Committee_card
                                    key={member.name}
                                    title={member.title}
                                    image={member.imageUrl}
                                    name={member.name}
                                    study_year={member.year}
                                    email={member.email}
                                />
                            ))
                    }
                </div>

            </div>

        </div>

    )
}

export default CommitteePage