import { FC } from "react"
import CarouselItem from "./CarouselItem"


 const CarouselList: FC<{carouselItems: Array<any>}> = ({carouselItems}) =>{

    return(
        <div className="carousel-list">
            {carouselItems.map(({urls, id}) => <CarouselItem source={urls['thumb']} key={id}/>)}
        </div>
     )
 }

 export default CarouselList