import { LoginForm } from "../components/LoginForm/LoginForm";
import { SignUpHeader } from "../components/SignUpHeader/SignUpHeader";

export function LoginPage() {
  return (
    <section className="h-full">
      <SignUpHeader />
      <LoginForm />
    </section>
  );
}
