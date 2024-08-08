import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import { reducers } from "../../redux/index.js";
import ProductPage from "./ProductPage";

const store = createStore(reducers, {
  products: {
    products: [
      {
        id: "58e0c367",
        name: "Cuci + Setrika",
      },
      {
        id: "e2f7be9c",
        name: "Cuci",
      },
    ],
    isLoading: false,
  },
});

describe("ProductPage", () => {
  test("should render product data correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("58e0c367")).toBeInTheDocument();
    expect(screen.getByText("Cuci + Setrika")).toBeInTheDocument();

    expect(screen.getByText("e2f7be9c")).toBeInTheDocument();
    expect(screen.getByText("Cuci")).toBeInTheDocument();
  });
});
