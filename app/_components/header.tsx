import { Button } from "@/components/ui/button"
import Image from "next/image"
import Container from "./container"
import LinkItem from "./link-item"
import links from "@/datas/links"
import { ThemeButton } from "./theme-button"

function Header() {
  return (
    <div className="ml-auto py-4 border-b border-border">
      <Container className="flex justify-between items-cente gap-6">
        <div className="w-full flex items-center gap-10">
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={180}
          />
          <ul className="ml-auto md:flex gap-8 hidden">
            {links.map(item => <LinkItem key={"header-" + item.name} href={item.url} label={item.name} />)}
          </ul>
        </div>
        <ThemeButton />
        <Button>
          Comece agora
        </Button>
      </Container>
    </div>
  )
}

export default Header
