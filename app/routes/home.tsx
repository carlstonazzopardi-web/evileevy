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
function HeaderBar(){
    return (
        <header class = "bg-black m-1">
            <div class = "flex">
            <p class = "text-white">EƎ</p>
                <div class = "text-white">
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Our Site Models</button>
                </div>
            </div>
        </header>
    );
}
export default function Home({ loaderData }: Route.ComponentProps) {
    return (
            <div>
            <HeaderBar/>
            </div>
    );
}
