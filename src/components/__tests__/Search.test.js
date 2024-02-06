import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search Res List for burger text input", async () => {

   await act( async () =>  render(
   <BrowserRouter>
   <Body/>
   </BrowserRouter>
   ) );

   const cardsBefore = screen.getAllByTestId("resCard");

   expect(cardsBefore.length).toBe(9);

   const searchBtn = screen.getByRole("button", {name: "Search"});

   const searchInput = screen.getByTestId("searchinput");

   fireEvent.change(searchInput, { target: { value: "burger"}})

   fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard")

  expect(cards.length).toBe(1);
   
});

it("Should filter Top Rated Restaurant", async () => {

    await act( async () =>  render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ) );
 
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
 
    expect(cardsBeforeFilter.length).toBe(9);
 
  const topRateBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

  fireEvent.click(topRateBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(4);
    
 });