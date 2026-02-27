import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleUserIcon } from "lucide-react";
import { profile_categories } from "./constants";
import { ActiveTooltipProps } from "./types";

const Profile = ({ active, setActive }: ActiveTooltipProps) => {
  return (
    <Tooltip
      open={active === "profile"}
      onOpenChange={(open) => setActive(open ? "profile" : null)}
    >
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          startIcon={<CircleUserIcon className="size-5.5" />}
          className="hover:bg-accent hover:text-accent-foreground"
        />
      </TooltipTrigger>
      <TooltipContent className="w-60 p-0" sideOffset={12}>
        <div className="flex items-center  justify-between p-4">
          <Button variant="outline" className="rounded-full w-25 font-semibold">
            Sign In
          </Button>
          <Button className="rounded-full w-25 font-semibold">Sign Out</Button>
        </div>
        <Separator />
        <div className="flex flex-col py-4 px-3">
          {profile_categories.map(({ icon: Icon, id, label }) => (
            <Button
              key={`${label}-${id}`}
              variant="ghost"
              startIcon={<Icon className="size-5" />}
              className="justify-start px-3"
            >
              {label}
            </Button>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default Profile;
