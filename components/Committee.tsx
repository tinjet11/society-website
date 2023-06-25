import React from 'react'
import Committee_card from './Committee_card'

const Committee = () => {
    
    return (
        <div className='container'>
        <div className='flex flex-col m-2 bg-white rounded-lg shadow-lg p-4'>

                    <h1 className="text-center font-bold text-4xl mb-3">Committee</h1>

                    <hr />

                    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                        <Committee_card
                            title={'President'}
                            image={'/avatar-boy.svg'}
                            name={'Mirza Hizriyan Nubli Hidayat'}
                            email={'president@unmcss.com'}
                        />

                        <Committee_card
                            title={'Vice President'}
                            image={'/avatar-girl.svg'}
                            name={'Carmel Natasha Barnabas'}
                            email={'vicepresident@unmcss.com'}
                        />

                        <Committee_card
                            title={'Event Manager'}
                            image={'/avatar-boy.svg'}
                            name={'Rezmana Agung Wibawa'}
                            email={'eventmanager@unmcss.com'}
                        />

                        <Committee_card
                            title={'Marketing Director'}
                            image={'/avatar-boy.svg'}
                            name={'Lim En Xuan'}
                            email={'marketingdirector@unmcss.com'}
                        />

                        <Committee_card
                            title={'Head of Tech'}
                            image={'/avatar-boy.svg'}
                            name={'Leong Tin Jet'}
                            email={'headoftech@unmcss.com'}
                        />

                        <Committee_card
                            title={'Head of Creative Department'}
                            image={'/avatar-girl.svg'}
                            name={'Allysa Amani binti Kamardin'}
                            email={'creativedepartment@unmcss.com'}
                        />

                        <Committee_card
                            title={'Public Relations'}
                            image={'/avatar-boy.svg'}
                            name={'Mithilesh Tew'}
                            email={'publicrelation@unmcss.com'}
                        />
                    </div>

                </div>

            </div>

    )
}

export default Committee