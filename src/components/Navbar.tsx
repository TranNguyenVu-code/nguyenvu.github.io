import { Drawer, IconButton, useDisclosure } from "@chakra-ui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/portfolio";
import type { PortfolioShellProps } from "../templates/types";
import { PortfolioStyleSelector } from "./shared/PortfolioStyleSelector";
import { ColorModeButton } from "./ui/color-mode";

export default function Navbar({
  activeSection,
  activeTemplateId,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onSelectTemplate,
  onToggleLayoutMode,
}: Omit<PortfolioShellProps, "children">) {
  const { open, onOpen, onClose } = useDisclosure();
  const nextLayoutLabel =
    layoutMode === "single" ? "Multi-page" : "Single page";
  const navigate = (id: typeof activeSection) => {
    onNavigate(id);
    onClose();
  };
  const links = (mobile: boolean) =>
    navigationItems.map((item) => (
      <a
        key={item.id}
        href={getNavigationHref(item.id)}
        onClick={(e) => {
          e.preventDefault();
          navigate(item.id);
        }}
        aria-current={item.id === activeSection ? "page" : undefined}
        data-testid={`navbar-${mobile ? "mobile-" : ""}link-${item.id}`}
      >
        {item.label}
      </a>
    ));
  return (
    <header className="analytics-navbar">
      <div className="navbar-main">
        <a
          className="brand"
          href={getNavigationHref("home")}
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
          aria-label="Navigate to portfolio home"
          data-testid="navbar-brand-link"
        >
          <span className="brand-mark" aria-hidden="true">
            NV<span>✳</span>
          </span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>ANALYTICAL NOTEBOOK</small>
          </span>
        </a>
        <div className="navbar-controls">
          <PortfolioStyleSelector
            activeTemplateId={activeTemplateId}
            onSelectTemplate={onSelectTemplate}
            testIdPrefix="navbar"
          />
          <ColorModeButton
            color="var(--text-100)"
            bg="var(--control-bg)"
            data-testid="navbar-theme-toggle"
          />
          <button
            className="layout-button"
            onClick={onToggleLayoutMode}
            aria-label={`Switch to ${nextLayoutLabel} layout`}
            data-testid="navbar-layout-toggle"
          >
            {nextLayoutLabel}
          </button>
          <IconButton
            className="navbar-menu"
            aria-label="Open navigation"
            onClick={onOpen}
            color="var(--text-100)"
            bg="var(--control-bg)"
            data-testid="navbar-menu-toggle"
          >
            <HiMenu />
          </IconButton>
        </div>
      </div>
      <nav className="desktop-nav" aria-label="Portfolio sections">
        {links(false)}
      </nav>
      <Drawer.Root
        open={open}
        onOpenChange={(e) => !e.open && onClose()}
        placement="end"
      >
        <Drawer.Backdrop bg="var(--drawer-backdrop)" />
        <Drawer.Positioner>
          <Drawer.Content
            maxW="340px"
            bg="var(--surface-800)"
            color="var(--text-100)"
          >
            <Drawer.Header>
              <div className="drawer-title">
                <strong>Notebook contents</strong>
                <IconButton
                  aria-label="Close navigation"
                  onClick={onClose}
                  data-testid="navbar-menu-close"
                >
                  <HiX />
                </IconButton>
              </div>
            </Drawer.Header>
            <Drawer.Body>
              <nav
                className="mobile-nav"
                aria-label="Mobile portfolio sections"
              >
                {links(true)}
              </nav>
              <button
                className="action secondary mobile-layout"
                onClick={() => {
                  onToggleLayoutMode();
                  onClose();
                }}
                data-testid="navbar-mobile-layout-toggle"
              >
                {nextLayoutLabel}
              </button>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </header>
  );
}
