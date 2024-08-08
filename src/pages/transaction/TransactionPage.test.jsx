import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { reducers } from "../../redux/index.js";
import TransactionPage from "./TransactionPage";

const store = createStore(reducers, {
  transactions: {
    transactions: [
      {
        id: "710a8d60",
        customer: { name: "Ana Maryani" },
        billDate: "2024-08-08",
        billDetails: [
          {
            product: { price: 121000 },
            qty: 1,
          },
        ],
      },
    ],
  },
  products: { isLoading: false },
});

describe("TransactionPage", () => {
  test("should render transaction data correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TransactionPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("710a8d60")).toBeInTheDocument();
    expect(screen.getByText("Ana Maryani")).toBeInTheDocument();
    expect(screen.getByText("Rp 121.000")).toBeInTheDocument();
    expect(screen.getByText("08-08-2024")).toBeInTheDocument();
  });
});
