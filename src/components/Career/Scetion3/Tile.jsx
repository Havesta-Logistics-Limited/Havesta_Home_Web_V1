const Tile = ({data}) => {
    
    return(
        <>
            <div
                className=" w-[47.53%] md:w-[18%] p-[16px] bg-careerTile h-[90px] items-center flex flex-row gap-4 "
            >
                <div className="w-[24px]">
                    <img className="object-contain w-full h-full" src={data.img} alt="" />
                </div>
                <p className="font-normal w-full text-[14px] text-left md:text-[16px]">{data.title}</p>
            </div>
        </>
    )
}

export default Tile;