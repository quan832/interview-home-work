import React from "react";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";

export default function Loading(props) {
  const isLoading = useSelector((state) => state.LoadingReducer.loading);

  const renderLoading = () => {
    if (isLoading) {
      return (
        <ContentLoader
          viewBox="0 0 500 280"
          height={800}
          width={500}
          {...props}
        >
          <rect x="3" y="3" rx="10" ry="10" width="500" height="200" />
          <rect x="6" y="220" rx="0" ry="0" width="500" height="40" />
          <rect x="6" y="270" rx="0" ry="0" width="500" height="20" />

          <rect x="3" y="330" rx="10" ry="10" width="500" height="200" />
          <rect x="6" y="547" rx="0" ry="0" width="500" height="40" />
          <rect x="6" y="597" rx="0" ry="0" width="500" height="20" />
        </ContentLoader>
      );
    }
    return "";
  };
  return <div>{renderLoading()}</div>;
}
