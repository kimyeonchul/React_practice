import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoid } = useParams();
  return <div>VideoDetail {videoid}</div>;
}
