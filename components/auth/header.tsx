import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import Image from "next/image";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src="/auth-lock.svg" alt="Auth icon" width="48" height="48" />
      <h1 className={cn("text-3xl font-semibold", headingFont.className)}>
        Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
