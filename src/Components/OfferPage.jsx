import { useEffect, useState } from "react";
import offerImg from '../assets/Img/dfg.webp'
import { Link } from "react-router-dom";

const OfferPage = () => {
    // data format mm-dd-yy 
    const targetDay = new Date('12-23-2024').getTime()

    const calculateTimeLeft = () => {
        const today = new Date().getTime()
        const dif_day = targetDay - today
        if (dif_day > 0) {
            const days = Math.floor(dif_day / (1000 * 60 * 60 * 24))
            const hours = Math.floor(dif_day % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(dif_day % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(dif_day % (1000 * 60) / 1000)
            return { days, hours, minutes, seconds };
        } else {
            return { timeUp: true }
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);

        return () => clearInterval(timer)
    }, [])


    return timeLeft?.timeUp ? null : (
        <div className="container mx-auto mt-24">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
                <div className="space-y-3 max-w-sm text-center">
                    <h2 className="text-lg font-semibold text-primary">Upcoming Campaign <br /></h2>
                    <h1 className="text-4xl font-bold text-gray-700 leading-normal">Choose Your Books From Here</h1>
                    <div className="gap-5 text-gray-700 flex items-center justify-center">
                        <div>
                            <h1 className="text-3xl font-bold">{timeLeft.days}</h1>
                            <p>Days</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{timeLeft.hours}</h1>
                            <p>Hrs</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{timeLeft.minutes}</h1>
                            <p>Mnts</p>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{timeLeft.seconds}</h1>
                            <p>Secd</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-white font-semibold px-4 py-2 rounded bg-primary hover:bg-gray-700 duration-300">View Details</button>
                    </div>
                </div>

                <div>
                    <Link to={'/AllBooks'}>
                    <img src={offerImg} alt="offerImg" className="h-72"/>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default OfferPage;