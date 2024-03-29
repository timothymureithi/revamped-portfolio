import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => (
    <div className="app__social app__navbar-social">
        <div>
            <a
                href="https://github.com/SanketMane17"
                style={{ height: "20px" }}
                target="_blank">
                <GitHubIcon />
            </a>
        </div>
        <div>
            <a
                href="https://www.linkedin.com/in/timothy-mureithi/"
                style={{ height: "20px" }}
                target="_blank"
            >
                <LinkedInIcon />
            </a>
        </div>
    </div>
);

export default SocialMedia;