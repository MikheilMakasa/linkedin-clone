import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React projects are starting", "Top news - 9021 readers")}
      {newsArticle(
        "Cyberpunk 2077 is making a comeback",
        "Top news - 3201 readers"
      )}
      {newsArticle("Nasa has destroyed an asteroid", "Top news - 3948 readers")}
      {newsArticle(
        "Red dead redemption still the best open world?",
        "Top news - 2578 readers"
      )}
      {newsArticle(
        "Amazons Rings Of Power series is a disaster",
        "Top news - 998 readers"
      )}
      {newsArticle(
        "A man discovers an alien artifact in Dmanisi, Georgia",
        "Top news - 1988 readers"
      )}
    </div>
  );
}

export default Widgets;
