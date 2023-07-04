import React from 'react'
import Committee_card from './Committee_card'

const Committee = () => {

    return (
        <div className='container'>
            <div className='flex flex-col m-2 primary-bg-colorrounded-lg shadow-lg p-4'>

                <h1 className="text-center font-bold text-4xl mb-3">Committee</h1>


                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <Committee_card
                        title={'President'}
                        image={'/avatar-boy.svg'}
                        name={'Mirza Hizriyan Nubli Hidayat'}
                        study_year='Year 3 - Computer Science'
                        email={'president@unmcss.com'}
                    />

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
                        title={'Head of Tech'}
                        image={'/avatar-boy.svg'}
                        name={'Leong Tin Jet'}
                        study_year='Year 2
                              - Computer Science w/ AI'
                        email={'headoftech@unmcss.com'}
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

export default Committee