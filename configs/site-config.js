import {
  FaGithub,
  FaDev,
  FaLinkedin,

  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Aman Mishra. All Rights Reserved.`,
  author: {
    name: "Aman Mishra",
    accounts: [
      {
        url: "https://github.com/thisisamanmishra",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/Aman_Mishra_1",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },

      {
        url: "https://linkedin.com/in/iamamanmishra",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },

      {
        url: "mailto:amanmishra151202@gmail.com",
        label: "Mail me",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
