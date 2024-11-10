import Tile from "./Tile";

const Section3 = () => {

    const tiles = [
        {
            title: "Flexible working hours",
            img: '/images/Clock.png', 
        },
        {
            title: "Sport compensation",
            img: '/images/Barbell.png', 
        },
        {
            title: "Health care Insurance",
            img: '/images/ShieldCheck.png', 
        },
        {
            title: "Marriage bonus",
            img: '/images/HandsClapping.png', 
        },
        {
            title: "Fun team events",
            img: '/images/Confetti.png', 
        },
        {
            title: "Perfessional grow budget",
            img: '/images/RocketLaunch.png', 
        },
        {
            title: "30 days paid vacation",
            img: '/images/Calendar.png', 
        },
        {
            title: "Competitive salary",
            img: '/images/Wallet.png', 
        },
        {
            title: "Compensation for eyeglasses",
            img: '/images/Eyeglasses.png', 
        },
        {
            title: "Allowance for first-graders",
            img: '/images/GraduationCap.png', 
        },
        {
            title: "Childbirth allowances",
            img: '/images/Baby.png', 
        },
        {
            title: "Employee referral bonus",
            img: '/images/Target.png', 
        },
        {
            title: "Birthdays celebration",
            img: '/images/Cake.png', 
        },
    ]

    return (
        <>
            <div className="flex justify-center items-center w-full h-max pt-20 pb-20 bg-[#ffffff]">
                <div className="w-[327px] flex justify-center flex-col items-center gap-8 md:w-5/6">
                    <div>
                        <p className="text-[28px] text-center w-full font-career md:text-[50px] md:w-[753px]">
                            What benefits are waiting for you?
                        </p>
                        <p className="text-center">
                            Havesta offers a variety of hand-picked benefits
                            that you can take advantage of!
                        </p>
                        
                    </div>
                    <div className="flex flex-row gap-4 flex-wrap w-full h-max">
                        {tiles.map((tile, index) => {
                            return (
                                <Tile key={index} data={tile}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section3;
