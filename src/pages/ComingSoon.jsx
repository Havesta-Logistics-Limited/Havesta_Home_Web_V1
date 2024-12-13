import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ComingSoon() {

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const socials = [
        { name: 'Facebook', link: 'https://web.facebook.com/havestalogistics', icon: '/icons/facebook.svg' },
        { name: 'Instagram', link: 'https://www.instagram.com/havestahq/profilecard/?igsh=cTN0bHVyNjUxeDh1', icon: '/icons/instagram.svg' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/company/havesta/', icon: '/icons/linkedin.svg' },
        { name: 'X', link: 'https://x.com/havestahq?t=0rogOW8mhMYqNJ08vBCopw&s=09', icon: 'https://res.cloudinary.com/dahlcyt3t/image/upload/f_auto,q_auto/v1/portfolio/vlvcokaa210wngc4ba4h' },

    ]

    // const url = import.meta.env.WEB_APP_URL;

    const [email, setEmail] = useState('')
    const [IsSucessful, setIsSucessful] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://api.sheetbest.com/sheets/9d4cb556-d137-4817-b148-69736f291044', { 'emails': email }).then((response) => {
            console.log(response.status)
            if (response.status === 200) {
                setIsSucessful(true)
            }
            setEmail('')
        })
    
    }


    useEffect(() => {
        const futureDate = new Date(2025, 2, 14, 0, 0, 0, 0)

        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = futureDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const intervalId = setInterval(updateCountdown, 1000);

        updateCountdown();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full relative h-screen bg-soon bg-cover bg-center lg:bg-top-right flex">

            <div className="w-full h-full flex-col bg-[#00000066] lg:pl-[78px] lg:pr-[93px] lg:py-[47px] py-[23.5px] px-8 gap-[50.94px] flex">
                <img className="lg:w-[198px] lg:h-[44.06px] w-[99px] h-[22.03px] object-contain" src="/icons/logo.svg" alt="" />
                <div className="flex w-full lg:justify-center justify-between lg:h-fit h-full">
                    <div className="flex flex-col lg:flex-row w-full h-full justify-between">
                        <div className="flex flex-col h-fit gap-8 w-full items-center justify-between">
                            <p className="lg:w-[783px] w-full font-soon lg:text-[100px] text-[50px] leading-[87.8px] lg:leading-[175.6px] font-normal text-center text-[#FFFFFF]">Coming Soon</p>
                            <div className='lg:w-fit w-full flex flex-wrap lg:flex-nowrap gap-10 justify-center transition duration-500 ease-in-out'>

                                <div className='flex flex-col items-center w-1/3 lg:w-full'>
                                    <div className="flex w-fit gap-4 lg:h-40 h-20">{timeLeft.days.toString().split('').map((char, index) => (
                                        <>
                                            {
                                                timeLeft.days.toString().length < 2 ?
                                                    <>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>0</p>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                                    </> :
                                                    <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                            }
                                        </>
                                    ))}
                                    </div>
                                    <p className='text-white lg:text-[48px] lg:leading-[72px] text-[24px] leading-[36px] font-medium font-soon2'>DAYS</p>
                                </div>


                                <div className='flex flex-col items-center w-1/3 lg:w-full'>
                                    <div className="flex w-fit gap-4 h-20 lg:h-40">{timeLeft.hours.toString().split('').map((char, index) => (
                                        <>
                                            {
                                                timeLeft.hours.toString().length < 2 ?
                                                    <>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>0</p>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                                    </> :
                                                    <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                            }
                                        </>
                                    ))}
                                    </div>
                                    <p className='text-white lg:text-[48px] lg:leading-[72px] text-[24px] leading-[36px] font-medium font-soon2'>HOURS</p>
                                </div>



                                <div className='flex flex-col items-center w-1/3 lg:w-full'>
                                    <div className="flex w-fit gap-4 h-20 lg:h-40">{timeLeft.minutes.toString().split('').map((char, index) => (
                                        <>
                                            {
                                                timeLeft.minutes.toString().length < 2 ?
                                                    <>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>0</p>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                                    </> :
                                                    <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                            }
                                        </>
                                    ))}
                                    </div>
                                    <p className='text-white lg:text-[48px] lg:leading-[72px] text-[24px] leading-[36px] font-medium font-soon2'>MINUTES</p>
                                </div>

                                <div className='flex flex-col items-center w-1/3 lg:w-full'>
                                    <div className="flex w-fit gap-4 h-20 lg:h-40">{timeLeft.seconds.toString().split('').map((char, index) => (
                                        <>
                                            {
                                                timeLeft.seconds.toString().length < 2 ?
                                                    <>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>0</p>
                                                        <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                                    </> :
                                                    <p className='!bg-opacity-50 rounded-[5px] border-[0.5px] font-soonNumbers border-white bg-soonGradient flex text-[48px] leading-[61.97px] lg:text-[96px] lg:leading-[123.94px] font-normal justify-center items-center w-[50px] lg:w-[100px] h-full' key={index}>{char}</p>
                                            }
                                        </>
                                    ))}
                                    </div>
                                    <p className='text-white lg:text-[48px] lg:leading-[72px] text-[24px] leading-[36px] font-medium font-soon2'>SECONDS</p>
                                </div>
                            </div>
                            <p className="w-full lg:w-[783px] font-primary lg:text-[32px] lg:leading-[38.73px] text-[16px] leading-[19.365px] font-normal text-center text-white">We’ll let you know when we are Launching</p>
                            <form onSubmit={handleSubmit} className="w-full lg:w-[783px] lg:h-[70px] h-[40.5px] flex flex-col lg:flex-row gap-4 lg:gap-0">
                                <input className="lg:rounded-tr-none text-center lg:text-left lg:rounded-br-none rounded-[10px] w-full outline-none font-primary lg:p-[26px] p-[16px] text-3 lg:text-6 lg:leading-[29.05px] leading-[14.525px]" placeholder="Enter your email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
                                <button type='submit' className="lg:w-[238px] w-full lg:h-full h-fit bg-harvestaDarkGreen rounded-[10px] lg:rounded-tl-none lg:rounded-bl-none lg:p-0 p-[16px] text-white lg:text-[28px] lg:leading-[33.89px] text-[14px] leading-[16.945px] font-semibold font-primary text-center">Notify Me</button>
                            </form>
                        </div>
                        <div className="flex lg:flex-col justify-end h-fit lg:h-full w-full lg:w-[30px]">
                            <div className="w-full h-[30px] lg:h-[192px] flex lg:flex-col justify-between">
                                {socials.map((social, index) => {
                                    return (
                                        <a target='_blank' className='w-full h-[30px]' key={index} href={social.link}><img className='w-full h-full object-contain' src={social.icon} alt={social.name} /></a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { IsSucessful && <div className="absolute w-full h-full flex justify-center items-center">
                <div className="absolute w-full h-full" onClick={() => setIsSucessful(false)}></div>
                <div className="w-[300px] h-[200px] flex justify-center items-center bg-white rounded-[10px]">
                    <h1>Email saved</h1>
                </div>
            </div>}
        </div>
    )
}