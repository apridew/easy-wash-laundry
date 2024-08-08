import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { reducers } from "../../redux/index.js";
import CustomerPage from "./CustomerPage";

const store = createStore(reducers, {
  customers: {
    customers: [
      {
        id: "cbead6e9",
        name: "Yanto Subidi",
        phoneNumber: "828292992",
        address: "Jakarta Selatan",
      },
      {
        id: "b32eed7d",
        name: "Ana Maryani",
        phoneNumber: "7398291200",
        address: "Jakarta Barat",
      },
    ],
  },
  products: { isLoading: false },
});

describe("CustomerPage", () => {
  test("should render customer data correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CustomerPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("cbead6e9")).toBeInTheDocument();
    expect(screen.getByText("Yanto Subidi")).toBeInTheDocument();
    expect(screen.getByText("828292992")).toBeInTheDocument();
    expect(screen.getByText("Jakarta Selatan")).toBeInTheDocument();

    expect(screen.getByText("b32eed7d")).toBeInTheDocument();
    expect(screen.getByText("Ana Maryani")).toBeInTheDocument();
    expect(screen.getByText("7398291200")).toBeInTheDocument();
    expect(screen.getByText("Jakarta Barat")).toBeInTheDocument();
  });
});
