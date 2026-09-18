"use client";

interface TopBannerProps {
  onLinkClick: () => void;
}

export default function TopBanner({ onLinkClick }: TopBannerProps) {
  return (
    <div className="top-banner">
      <div className="top-banner-content">
        <span>
          Erasmus+ Work Placement & Staff Mobility funding is now active. Learn more about how to participate
        </span>
        <a href="/apply-now" onClick={onLinkClick}>
          Here
        </a>
      </div>
    </div>
  );
}
