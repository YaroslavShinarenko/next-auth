import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import Image from "next/image";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-400 to-lime-700">
      <div className="space-y-6 text-center">
        <div className="flex justify-center gap-x-2">
          <h1
            className={cn(
              "text-6xl font-semibold text-white drop-shadow-md",
              headingFont.className
            )}
          >
            Auth
          </h1>
          <Image src="/auth-lock.svg" alt="Auth icon" width="48" height="48" />
        </div>
        <p className="text-white text-lg">A simple authentification</p>
        <div>
          <LoginButton>
            <Button size="lg" variant="secondary">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
