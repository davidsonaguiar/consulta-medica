import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

interface Props {
  picture: string | null;
}

function UserPopover({ picture }: Props) {
  return (
    <Popover>
      <PopoverTrigger>
        <Image
          width={40}
          height={40}
          src={picture || "/user.svg"}
          alt="user"
          className="rounded-full"
        />
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <Button asChild variant="secondary">
          <LogoutLink>
            Sair
          </LogoutLink>
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default UserPopover
