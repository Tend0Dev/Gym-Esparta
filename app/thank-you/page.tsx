'use client'
import { useEffect, useState } from "react";
import { CardMembership } from "@/components/card-membership/card-membership";
import { Header } from '../../components/header';
import { SuccessfulPayment } from "@/components/card-membership/successful_payment";

export default function ThankYouPage() {
  const [userData, setUserData] = useState<{
    nombre?: string;
    email?: string;
    foto?: string;
  }>({});

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Header />
        <SuccessfulPayment />
      <CardMembership userData={userData} />
    </div>
  );
}
