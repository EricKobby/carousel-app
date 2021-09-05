import { shallow } from 'enzyme'
import CarouselItem from '../components/CarouselItem'

describe('<CarouselItem />', ()=>{
    
    const wrapper =  shallow(<CarouselItem source={""}/>)
    it('renders without error', ()=>{
        expect(wrapper.find("img")).toBeTruthy()
    })
})