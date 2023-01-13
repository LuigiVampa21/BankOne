import { 
    mount, 
} from "@vue/test-utils";
import CardCreditCard from "@/components/card/CardCreditCard.vue";
import card from "../../src/utils/card/customCard";


test("renders the 'Press Get Physical Card To Apply' message when there is no second card", async () => {
    const wrapper = mount(CardCreditCard)

    await wrapper.setProps({ 
        card,
        hasSecondCard: false,
        showDetails: false,
    })
  
    expect(wrapper.text()).toContain('Press Get Physical Card To Apply')
})

test("renders the card number correctly", async() => {
    const wrapper = mount(CardCreditCard)
    await wrapper.setProps({ 
        card,
        hasSecondCard: false,
        showDetails: false,
    })
    const date = wrapper.find('#date')
    expect(date.text()).toContain("* * / * *");
  });



  

