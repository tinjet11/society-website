import React from 'react'
import Committee_card from './Committee_card'

const Committee = () => {
    return (
        <div className='container'>
        <div className='flex flex-col m-2 bg-white rounded-lg shadow-lg p-4'>

                    <h1 className="text-center font-bold text-4xl mb-3">Committee</h1>

                    <hr />

                    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-4 mt-10">

                        <Committee_card
                            title={'President'}
                            image={'nav/logo.svg'}
                            name={'Mirza Hizriyan Nubli Hidayat'}
                            email={'president@unmcss.com'}
                        />

                        <Committee_card
                            title={'Vice President'}
                            image={'nav/logo.svg'}
                            name={'Carmel Natasha Barnabas'}
                            email={'vicepresident@unmcss.com'}
                        />

                        <Committee_card
                            title={'Event Manager'}
                            image={'nav/logo.svg'}
                            name={'Rezmana Agung Wibawa'}
                            email={'eventmanager@unmcss.com'}
                        />

                        <Committee_card
                            title={'Marketing Director'}
                            image={'nav/logo.svg'}
                            name={'Lim En Xuan'}
                            email={'marketingdirector@unmcss.com'}
                        />

                        <Committee_card
                            title={'Head of Tech'}
                            image={'nav/logo.svg'}
                            name={'Leong Tin Jet'}
                            email={'headoftech@unmcss.com'}
                        />

                        <Committee_card
                            title={'Head of Creative Department'}
                            image={'nav/logo.svg'}
                            name={'Allysa Amani binti Kamardin'}
                            email={'creativedepartment@unmcss.com'}
                        />

                        <Committee_card
                            title={'Public Relations'}
                            image={'nav/logo.svg'}
                            name={'Mithilesh Tew'}
                            email={'publicrelation@unmcss.com'}
                        />





                    </div>

                </div>

            </div>

    )
}

export default Committee