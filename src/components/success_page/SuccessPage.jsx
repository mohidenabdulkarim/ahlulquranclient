import React from 'react'

const SuccessPage = () => {
    return (

        <div className='page-wrapper bg-gra-03 p-t-45 p-b-50'>
            <a href="/">
                <img src="/assets/images/logoo.png" alt="" className="ml-5" style={{ width: '100px' }} />
                <span style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>Ahlu Qur'an Academy</span>
            </a>
            <div className='wrapper wrapper--w790'>
                <div className='card card-5 border-0'>
                    <div className='card-heading'>
                        <h2 className='title'>Thanks for registering.</h2>
                    </div>
                    <div className='card-body'>
                        <div className="container p-5">
                            <div className='sec-title mb-5'>
                                <div className='sec-title-inner'>
                                    <h3>Registeration Successfull</h3>
                                </div>
                            </div>
                            <br />
                            <div className="text mb-5">
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Waalidiinta iyo ardeyda sharafta leh ee soo gudbiyay foomamkii isla markaana raba inay bilaabaan bishan waxa maamulka Ahlul Quran Academy ku wargelinayaa in ay isu diyaariyaan imtixaankii bilaabista ee lagu xadidayay qof walba iyo heerkiisa. Hadaba si qaybta imtixaanaadka laguugu gudbiyo fadlan lacagtii bisha kusoo dir nambarada hoos ku qoran
                                    <br /><br />

                                    Feegu Waa Ardayga kawayn 18 jir :$20
                                    Caruurtana :$30
                                    <br /><br />
                                    <strong>Xawaladaha:</strong><br />
                                    Taaj-Zaad: <u>0637219999</u><br />
                                    Dahabshiil -E dahab: <u>0653223611</u>
                                    <br />
                                    <br />
                                    Fadlan whatsapp (<strong><u>+44 20 3983 4610</u></strong>) ka noogu soodir cadayta aad ku kubixisay lacagta .

                                    Mahad Sanidiin
                                </p>
                            </div>

                            <a href="/" className="btn btn-primary">back to homepage</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage
