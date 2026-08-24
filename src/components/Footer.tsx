import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faPaperPlane, faHeadphones} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <><footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-6">
          <a href="mailto:hellolupejara@gmail.com" className="hover:text-accent">
            <FontAwesomeIcon icon={faPaperPlane} />
            : hellolupejara@gmail.com
          </a>

          <a href="https://linkedin.com/in/guadalupejara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
          >
          <FontAwesomeIcon icon={faLinkedin} /> :
          linkedin.com/in/guadalupejara
        </a>

        <a href="https://github.com/guadalupejara"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
        >
        <FontAwesomeIcon icon={faGithub} /> :
        github.com/guadalupejara
      </a>
    </div><p className="flex items-center gap-1.5 text-xs">
        coded with
        <FontAwesomeIcon icon={faMugHot} /> & <FontAwesomeIcon icon={faHeadphones} />
        by Lupe
      </p>
      </div>
    </footer>
  </>);
}

export default Footer;