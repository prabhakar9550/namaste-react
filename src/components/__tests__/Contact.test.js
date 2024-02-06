import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {

    // beforeAll(() => {
    //     console.log("Before All");

    // });

    // beforeEach(() => {
    //     console.log("Before Each");
        
    // });

    // afterAll(() => {
    //     console.log("After All");
        
    // })

    // afterEach(() => {
    //     console.log("After Each");
        
    // })

    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load buttom contact us component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    
    it("Should load input name contact us component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes name contact us component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
       // console.log(inputBoxes);
    
        expect(inputBoxes.length).toBe(2);
    });

})




