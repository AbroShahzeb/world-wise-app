import React from "react";
import styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <p>
        Position: lat ({lat}), long ({lng})
      </p>
    </div>
  );
}

export default Map;
