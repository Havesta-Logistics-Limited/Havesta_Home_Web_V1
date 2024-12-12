import { useState, useEffect } from 'react';


export default function ComingSoon() {

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    const socials = [
        { name: 'Facebook', link: 'https://www.facebook.com', icon: '/icons/facebook.svg' },
        { name: 'Instagram', link: 'https://www.instagram.com', icon: '/icons/instagram.svg' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com', icon: '/icons/linkedin.svg' },
        { name: 'Twitter', link: 'https://www.twitter.com', icon: '/icons/twitter.svg' },

    ]

    useEffect(() => {
        const futureDate = new Date(2025, 5, 1, 0, 0, 0, 0)

        const updateCountdown = () => {
            const now = new Date();
            const timeDifference = futureDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            setTimeLeft({ days, hours, minutes });
        };

        const intervalId = setInterval(updateCountdown, 60000);

        updateCountdown();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-[982px] bg-soon bg-cover bg-top-right flex">
            <div className="w-full h-full flex-col bg-[#00000066] pl-[78px] pr-[93px] pt-[47px] gap-[50.94px] flex">
                <img className="w-[198px] h-[44.06px] object-contain" src="/icons/logo.svg" alt="" />
                <div className="flex justify-end w-full h-[699px]">
                    <div className="flex w-[1054px] h-full justify-between">
                        <div className="flex flex-col w-[783px] items-center justify-between">
                            <p className="font-soon text-[100px] leading-[175.6px] font-normal text-[#FFFFFF]">Coming Soon</p>
                            <div className='w-full flex gap-4 justify-between'>
                                <div className='flex flex-col items-center w-full'>
                                    <div className="flex w-fit gap-4 h-40">{timeLeft.days.toString().split('').map((char, index) => (<p className='!bg-opacity-50 rounded-[5px] border-[0.5px] border-white bg-soonGradient flex text-[96px] leading-[123.94px] font-normal justify-center items-center w-[100px] h-full' key={index}>{char}</p>))}</div>
                                    <p className='text-white text-[48px] leading-[72px] font-medium font-soon2'>DAYS</p>
                                </div>

                                <div className='flex flex-col items-center w-full'>
                                    <div className="flex w-fit gap-4 h-40">{timeLeft.hours.toString().split('').map((char, index) => (<p className='!bg-opacity-50 rounded-[5px] border-[0.5px] border-white bg-soonGradient flex text-[96px] leading-[123.94px] font-normal justify-center items-center w-[100px] h-full' key={index}>{char}</p>))}</div>
                                    <p className='text-white text-[48px] leading-[72px] font-medium font-soon2'>HOURS</p>
                                </div>

                                <div className='flex flex-col items-center w-full'>
                                    <div className="flex w-fit gap-4 h-40">{timeLeft.minutes.toString().split('').map((char, index) => (<p className='!bg-opacity-50 rounded-[5px] border-[0.5px] border-white bg-soonGradient flex text-[96px] leading-[123.94px] font-normal justify-center items-center w-[100px] h-full' key={index}>{char}</p>))}</div>
                                    <p className='text-white text-[48px] leading-[72px] font-medium font-soon2'>MINUTES</p>
                                </div>
                            </div>
                            <p className="font-primary text-[32px] leading-[38.73px] font-normal text-white">We’ll let you know when we are Launching</p>
                            <div className="w-full h-[81px] flex">
                                <input className="rounded-tl-[10px] rounded-bl-[10px] w-full outline-none font-primary p-[26px] text-6 leading-[29.05px]" placeholder="Enter your email address" type="text" />
                                <button className="w-[238px] h-full bg-harvestaDarkGreen rounded-tr-[10px] rounded-br-[10px] text-white tetxt-[28px] leading-[33.89px] font-semibold font-primary text-center">Notify Me</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end h-full w-[30px]">
                            <div className="w-full h-[192px] flex flex-col justify-between">
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
        </div>
    )
}