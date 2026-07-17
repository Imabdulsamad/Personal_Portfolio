import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  RedditIcon,
  MediumIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * All social profiles. Rendered in the navbar (compact) and footer (full set).
 * Every link opens in a new tab.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Imabdulsamad",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imabdul-samad/",
    icon: LinkedinIcon,
  },
  {
    label: "Twitter",
    href: "https://x.com/ImabdulsamadAS",
    icon: TwitterIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsamad/",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@codewithsamad",
    icon: YoutubeIcon,
  },
  {
    label: "Reddit",
    href: "https://reddit.com/user/",
    icon: RedditIcon,
  },
  {
    label: "Medium",
    href: "https://medium.com/@imabdulsamad",
    icon: MediumIcon,
  },
];
