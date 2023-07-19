import EmailSubscriptionForm from "@/components/subscription-form";
import { ToasterProvider } from "@/providers/toast-provider";

export default function Home() {

  return (
    <>
      <ToasterProvider />
      <EmailSubscriptionForm />
    </>
  );
}
