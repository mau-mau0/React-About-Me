import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaHome, FaProjectDiagram, FaToolbox, FaTelegramPlane, FaFolderOpen } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assets/images/Mau-logos_transparent.png'

const Sidebar = ({ toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <Link style={{ display: 'block', padding: '15px 0' }} to="/">
            <img style={{ display: 'block', margin: '-3em 3em', width: '133px', height: 'auto' }} src={LogoS} alt="Logo" />
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">

          <MenuItem icon={<FaHome size={32} />}>
            {intl.formatMessage({ id: 'Home' })}
            <NavLink activeclassname="active" to="/"></NavLink>
          </MenuItem>

          <MenuItem icon={<FaProjectDiagram size={32} />}>
            {intl.formatMessage({ id: 'Experience' })}
            <NavLink activeclassname="active" className="contact-link" to="/experience"></NavLink>
          </MenuItem>

          <MenuItem icon={<FaToolbox size={32} />}>
            {intl.formatMessage({ id: 'Skills' })}
            <NavLink activeclassname="active" className="contact-link" to="/skills"></NavLink>
          </MenuItem>

          <MenuItem icon={<FaFolderOpen size={32} />}>
            {intl.formatMessage({ id: 'Portfolio' })}
            <NavLink activeclassname="active" className="contact-link" to="/portfolio"></NavLink>
          </MenuItem>

          <MenuItem icon={<FaTelegramPlane size={32} />}>
            {intl.formatMessage({ id: 'Contact' })}
            <NavLink activeclassname="active" className="contact-link" to="/contact"></NavLink>
          </MenuItem>

        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '24px 24px',
          }}
        >
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/kamau-bowie-aa257332a/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mau-mau0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/maumauu__"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="mailto:k.maumau11@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      </SidebarFooter>
    </ProSidebar >
  );
};

export default Sidebar;
