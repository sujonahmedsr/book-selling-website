import { useEffect, useState } from "react";

const OfferPage = () => {
    // data format mm-dd-yy 
    const targetDay = new Date('11-3-2024').getTime()

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
            return { timeUp: 'cv' }
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
        <div className="container mx-auto mt-16">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
                <div className="space-y-3 max-w-sm text-center">
                    <h2 className="text-lg font-semibold text-red-500">Upcoming Campaign <br /></h2>
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
                        <button className="text-white font-semibold px-4 py-2 rounded bg-red-500 hover:bg-red-600 duration-300">View Details</button>
                    </div>
                </div>

                <div>
                    <img src="https://img.cf.rokomari.com/banner/DESKTOP9b3d3774-3694-4cf0-9643-d02948db186d.webp" alt="asdf" className="h-72"/>
                </div>
            </div>


        </div>
    );
};

export default OfferPage;