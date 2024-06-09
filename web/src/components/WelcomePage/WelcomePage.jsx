import { Footer } from './Footer/Footer.jsx'
import Lottie from 'lottie-react'

export function WelcomePage() {
    return (
        <div className="max-w-dvw mt-24 h-dvh">
            <Lottie
                className={'absolute left-[21%] top-[12%] mt-[2%] w-[22%]'}
                path={'lotties/welcomePage/gray-corvete-welcome.json'}
                loop={false}
                autoplay={true}
            />
            <img
                className={'absolute mt-[20%] w-full object-contain'}
                src={'images/welcomePage/trail.png'}
            />
            <img
                className={'mt-[-6em] h-full w-full scale-[40%] object-contain'}
                src={'images/welcomePage/vehicle.png'}
            />
            <Lottie
                className={'absolute bottom-0 right-[5%]'}
                path={'lotties/welcomePage/exclusevely-on-flash.json'}
                loop={false}
                width={'52%'}
                autoplay={true}
            />
            <Footer />
        </div>
    )
}
