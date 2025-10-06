import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Evil Eevy" },
    { name: "description", content: "Eevy is evil!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}
export function headerbar(){
    return (
      <header>
        <button>example1</button>
        <button>example2</button>
        <button>example3</button>
      </header>
    );
}
export default function Home({ loaderData }: Route.ComponentProps) {
    return (
            <div>
            <headerbar/>
            </div>
    );
}
