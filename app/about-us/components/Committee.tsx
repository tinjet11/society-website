
import { CommitteeType } from '@/types'
import Committee_card from './Committee_card'


interface Props {
    data: CommitteeType[];
}

const CommitteePage = ({ data }: Props) => {

    return (
        <div className='container'>
            <div className='flex flex-col m-2 rounded-lg p-4'>

                <h1 className="font-bold text-4xl mb-3">Committee</h1>
                {data.length === 0 && <p>No result found</p>}

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

                    <Committee_card
                        title={'Vice President'}
                        image={'/avatar-girl.svg'}
                        name={'Carmel Natasha Barnabas'}
                        study_year='Year 2
                              - Computer Science w/ AI'
                        email={'vicepresident@unmcss.com'}
                    />

                    <Committee_card
                        title={'Event Manager'}
                        image={'/avatar-boy.svg'}
                        name={'Rezmana Agung Wibawa'}
                        study_year='Year 2
                              - Computer Science w/ AI'
                        email={'eventmanager@unmcss.com'}
                    />

                    <Committee_card
                        title={'Marketing Director'}
                        image={'/avatar-boy.svg'}
                        name={'Lim En Xuan'}
                        study_year='Year 2
                              - Computer Science w/ AI'
                        email={'marketingdirector@unmcss.com'}
                    />

                    <Committee_card
                        title={'Head of Creative Department'}
                        image={'/avatar-girl.svg'}
                        name={'Allysa Amani binti Kamardin'}
                        study_year='Year 2
                              - Computer Science w/ AI'
                        email={'creativedepartment@unmcss.com'}
                    />

                    <Committee_card
                        title={'Public Relations'}
                        image={'/avatar-boy.svg'}
                        name={'Mithilesh Tew'}
                        study_year='Year 1
                              - Computer Science w/ AI'
                        email={'publicrelation@unmcss.com'}
                    />
                </div>

            </div>

        </div>

    )
}

export default CommitteePage