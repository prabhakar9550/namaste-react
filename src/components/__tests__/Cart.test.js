import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => 
     Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA_NAME)
    })
)


it("Should load Restaurant Menu Component", async () => {

 await act( async () => render(
    <BrowserRouter>
 <Provider store={appStore}>
    <Header />
 <RestaurantMenu/>
 <Cart />
 </Provider>
 </BrowserRouter>
 ));

 const accordionHeader = screen.getByText("Rs 129 Deal Of The Day (38)")

 fireEvent.click(accordionHeader);
  
   expect(screen.getAllByTestId("fooditems").length).toBe(38);

   expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

   const addBtns = screen.getAllByRole("button", {name: "Add +"});

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(40);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

  expect(screen.getAllByTestId("fooditems").length).toBe(38);

  expect(screen.getByText("Cart is Empty add items to the cart !")).toBeInTheDocument();
})