import React from 'react';
import developer from '../../../../../../images/Portfolio2020/Designer.svg';

function SiteBannerImage() {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <img style={{ maxWidth: "200px", margin: "0px auto", paddingTop: "35%" }} src={developer} alt="dev" />
    </div>

  )
}

export default SiteBannerImage