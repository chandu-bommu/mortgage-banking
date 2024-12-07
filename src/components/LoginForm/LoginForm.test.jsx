import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginForm from "./LoginForm"; 
import { login } from "../../store/action"; 
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);

describe("LoginForm", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore({
      user: { name: "" }, 
      isAuthenticated: false,
    });
    mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate); 
  });

  it("renders login form correctly", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(screen.getByLabelText("Customer ID")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("updates state on input change", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const customerIdInput = screen.getByLabelText("Customer ID");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(customerIdInput, { target: { value: "12345" } });
    expect(customerIdInput.value).toBe("12345");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(passwordInput.value).toBe("password");
  });

  it("dispatches login action on form submit", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const customerIdInput = screen.getByLabelText("Customer ID");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(customerIdInput, { target: { value: "12345" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);

    expect(store.dispatch).toHaveBeenCalledWith(login("12345", "password"));
  });

  it("redirects to /my/accounts when authenticated", () => {
    store = mockStore({
      user: { name: "Test User" },
      isAuthenticated: true,
    });

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/my/accounts");
  });

  it("displays welcome message when authenticated", () => {
    store = mockStore({
      user: { name: "Test User" },
      isAuthenticated: true,
    });

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(screen.getByText("Welcome, Test User!")).toBeInTheDocument();
  });
});