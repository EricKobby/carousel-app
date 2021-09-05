import {shallow} from 'enzyme'
import CarouselList from '../components/CarouselList'

describe('<CarouselList />', ()=>{
    
    it('renders without crashing',()=>{
        const wrapper =  shallow(< CarouselList carouselItems={[]}/>)
        expect(wrapper.getElement()).toBeTruthy()
    })
})