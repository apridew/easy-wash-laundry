import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import { vi } from "vitest";
import { postApi } from "../../lib/axios";
import { toast } from "sonner";

vi.mock("../../lib/axios", () => ({
  postApi: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
  },
}));

describe("LoginPage", () => {
  test("should show error message on login failure", async () => {
    postApi.mockRejectedValue(new Error("Login failed"));

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Wrong username or password");
    });
  });
  test("should navigate to dashboard on successful login", async () => {
    postApi.mockResolvedValue({
      data: {
        data: {
          token: "mockToken",
        },
      },
    });

    const { container } = render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<div>Dashboard</div>} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText(/sign in/i));

    await waitFor(() => {
      expect(window.localStorage.getItem("token")).not.toBeNull();
      expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    });
  });
});
