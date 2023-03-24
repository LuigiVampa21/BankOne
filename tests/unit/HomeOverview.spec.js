// Before to run those test think about removing all the pinia logic in the HomeOverview
// component as it conflicts with jest.
// Note that for the last test you will need to follow the instructions as comment in the
// HomeOverview component

import { mount } from "@vue/test-utils";
import HomeOverview from "@/components/home/HomeOverview.vue";

import account_checking from "../../src/utils/bank_account/account_checking";
import account_savings from "../../src/utils/bank_account/account_savings";
import account_investments from "../../src/utils/bank_account/account_investments";

import lastTX from "../../src/utils/transaction/lastTx";

import sum from "../../src/utils/home/computor"




// -------------------------  TEST TRUE No data  ------------------------------

describe("HomeOverview.vue", () => {
  it("displays no transaction if no data provided", () => {
    const wrapper = mount(HomeOverview, {
      propsData: { 
        lastTX: {}
      }
      });
    expect(wrapper.text()).toContain(("No transaction"));
  });
});


// -------------------------  TEST TRUE With data LastTX ------------------------------

describe("HomeOverview.vue", () => {
  it("displays lastTX if provided", () => {
    const wrapper = mount(HomeOverview, {
      propsData: { 
        lastTX
      }
    });

    expect(wrapper.props('lastTX')).toStrictEqual({
      type: 'internal',
      beneficiary_name: "Roger Milla", 
      inflow: true,
      amount: 4500,
  })
  });
});


// -------------------------  TEST TRUE With data Accounts ------------------------------

describe("HomeOverview.vue", () => {
  it("displays sum of accounts",() => {
    const wrapper = mount(HomeOverview, {
      props: { 
        bankAccounts: [account_checking, account_savings, account_investments]
      }
    });
      expect(wrapper.text()).toContain(String(sum([account_checking, account_savings, account_investments], true)))
  });
});



// Dummi test
// test("1 + 1 equals 2", () => {
//   expect(1 + 1).toBe(2);
// });