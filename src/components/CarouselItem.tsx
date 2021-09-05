import { FC } from 'react'

const CarouselItem: FC<{source: string}> = ({source}) =>{
    return(
        <div className="carousel-item">
            <img src={source} alt="carosel-item"/>
        </div>
    )
}
export default CarouselItem