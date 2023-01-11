import { mount } from '@vue/test-utils'
import HomeOverview from '@/components/HomeOverview.vue'

describe('HomeCard', () => {
  test('should render the correct text when lastTX is defined', () => {
    const wrapper = mount(HomeOverview, {
      propsData: {
        bankAccounts: [{balance: 1000}],
        lastTX: {inflow: true, amount:50, type: 'SEPA'}
      }
    })
    expect(wrapper.find('.tx-amount').text()).toBe('+ 50€')
    expect(wrapper.find('.last-transaction-container').text()).toContain("SEPA transfer")
  })

  test('should render the correct text when lastTX is not defined', () => {
    const wrapper = mount(HomeOverview, {
      propsData: {
        bankAccounts: [{balance: 1000}]
      }
    })
    expect(wrapper.find('.ion-justify-content-center').text()).toBe('No transaction')
  })
  test('should render the correct text when bankAccounts is not defined', () => {
    const wrapper = mount(HomeOverview)
    expect(wrapper.find('.fontWeight100').text()).toBe('')
    expect(wrapper.find('ion-text').text()).toBe('EUR')
  })
  
  test('should render the correct text when overviewTotal is defined', () => {
    const wrapper = mount(HomeOverview, {
      propsData: {
        bankAccounts: [{balance: 1000}]
      }
    })
    expect(wrapper.find('.fontWeight100').text()).toBe('1000 €')
    expect(wrapper.find('ion-text').text()).toBe('EUR')
  })
  
})
// In this example, the mount function from the @vue/test-utils library is used to mount the component and render it in a testing environment. Props are passed via the propsData option.

// You can then use the find method to search for elements within the rendered component and text method to get the text of a element.

// You can add more test cases as per your needs.
// Please let me know if you have any further questions.




