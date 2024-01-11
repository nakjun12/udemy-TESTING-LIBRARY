import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });
//초기 세팅에 관해 조사
// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };

