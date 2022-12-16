import ThanYouIcon from '../../../images/icon-thank-you.svg'

export default function ThankYou() {
    return (
        <div className="content-layout row justify-content-center align-items-center">
            <div className="col text-center">
                <img src={ThanYouIcon} alt="ThanYouIcon" className='mb-4'/>
                <h4 className='mb-3'>Thank you</h4>
                <p className='text-muted'>
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>

        </div>
    )
}
