import { useRouteError } from "react-router-dom";

type ErrorProps = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error: ErrorProps = useRouteError() as ErrorProps;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
