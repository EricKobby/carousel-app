import { shallow } from 'enzyme'
import Button from '../components/Button'

describe('<Button />', ()=>{
    
    const fetchImagesMock =  jest.fn()
    const wrapper = shallow(<Button className="next-button" text="&rsaquo;" onClick={fetchImagesMock}/>)
    it('renders without error', ()=>{
        expect(wrapper.find("button")).toBeTruthy()
    })

    it('has the right classname', ()=>{
        expect(wrapper.prop("className")).toBe("next-button")
    })

    it('calls fetchImages', ()=>{
        wrapper.find("button").simulate("click")
        expect(fetchImagesMock).toBeCalled()
    })
    it('has the right icon', ()=>{
        expect(wrapper.find("button").text()).toBe('›')
    })
})