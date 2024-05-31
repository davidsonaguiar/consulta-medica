"use client"

import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import UserPopover from "./user-popover";

function AuthArea() {

  const { user } = useKindeBrowserClient();

  if (user) {
    return (
      <UserPopover picture={user.picture} />
    )
  }

  return (
    <Button asChild variant={user ? "secondary" : "default"}>
      <LoginLink>
        Comece agora
      </LoginLink>
    </Button>
  )
}

export default AuthArea
