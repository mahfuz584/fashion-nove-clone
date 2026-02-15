import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleUserIcon } from "lucide-react";
import { profile_categories } from "./constants";

const Profile = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          startIcon={<CircleUserIcon className="size-5.5" />}
          className="hover:bg-accent hover:text-accent-foreground"
        />
      </TooltipTrigger>
      <TooltipContent className="w-64 p-0" sideOffset={12}>
        <div className="flex items-center gap-3 p-4">
          <Button variant="outline" className="rounded-full text-xs w-25">
            Sign In
          </Button>
          <Button className="rounded-full text-xs w-25">Sign Out</Button>
        </div>
        <Separator />
        <div className="flex flex-col py-4 px-3">
          {profile_categories.map(({ icon: Icon, id, label }) => (
            <Button
              key={`${label}-${id}`}
              variant="ghost"
              startIcon={<Icon className="size-5" />}
              className="justify-start text-xs font-medium px-3"
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
