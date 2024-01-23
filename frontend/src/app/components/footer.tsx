import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const iconSize =36;

  return (
    <footer>
      <div className="socialsList">
        <ul>
          <li>
            <a href="https://www.facebook.com/ecell.iiithyd/" target="_blank">
              <FacebookIcon style={{ fontSize: iconSize }}/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ecell_iiith/" target="_blank">
              <InstagramIcon style={{ fontSize: iconSize }}/>
            </a>
          </li>
          <li>
            <a href="https://x.com/ecell_iiith" target="_blank">
              <XIcon style={{ fontSize: iconSize }}/>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCE8mniuxsSH_SVYTmKWxtfA"
              target="_blank"
            >
              <YouTubeIcon style={{ fontSize: iconSize }}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <LinkedInIcon style={{ fontSize: iconSize }}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
  }