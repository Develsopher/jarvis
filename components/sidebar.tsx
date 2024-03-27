"use client";

import { cn } from "@/lib/utils";
import {
  Bot,
  Code2Icon,
  FileVideoIcon,
  MessageCircleMoreIcon,
  Music2,
  Palette,
  Settings2,
} from "lucide-react";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const orbitron = Orbitron({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Hey, Jarvis!",
    icon: Bot,
    href: "/dashboard",
    color: "text-white",
  },
  {
    label: "Let's Chat",
    icon: MessageCircleMoreIcon,
    href: "/conversation",
    color: "text-green-500",
  },
  {
    label: "Write the code",
    icon: Code2Icon,
    href: "/code",
    color: "text-yellow-500",
  },
  {
    label: "Draw images",
    icon: Palette,
    href: "/image",
    color: "text-violet-500",
  },
  {
    label: "Create videos",
    icon: FileVideoIcon,
    href: "/video",
    color: "text-pink-400",
  },
  {
    label: "Play some music",
    icon: Music2,
    href: "/music",
    color: "text-sky-500",
  },

  {
    label: "Settings",
    icon: Settings2,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#090e13] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", orbitron.className)}>
            Jarvis
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("size-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
