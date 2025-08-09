import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {

    return (
        <div className="d-flex gap-3 fs-3 justify-content-center">
            {/* LinkedIn */}
            <div className="d-flex gap-3 fs-3 border px-4 py-2">
                <a href="https://github.com/iuzaifa" target="_blank" rel="noreferrer">
                    <FaLinkedin color="#0A66C2" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/iuzaifa" target="_blank" rel="noreferrer">
                    <FaGithub color="black" />
                </a>

                <a href="mailto:abuhuzaifaw7@gmail.com" className="icon-btn">
                    <img src="/gmail.png" alt="Email" />
                </a>

                <a href="https://leetcode.com/u/abuhuzaiifa/" target="_blank" rel="noreferrer" className="icon-btn">
                    <img src="/leetcode.png" alt="LeetCode" />
                </a>
            </div>


        </div>
    );
};

export default SocialLinks;
