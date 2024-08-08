import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("NotFoundPage", () => {
  test("should render 404 error message and image correctly", () => {
    render(
      <MemoryRouter initialEntries={["/non-existent-path"]}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/ERROR : 404/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorry, page not found/i)).toBeInTheDocument();
    expect(screen.getByAltText("404")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
